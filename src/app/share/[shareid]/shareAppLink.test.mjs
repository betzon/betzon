import test from 'node:test'
import assert from 'node:assert/strict'
import { APP_STORE_URL, detectOs, detectInstalledApp, openSharedContest, parseSharePreview } from './shareAppLink.mjs'

function browser() {
    const document = new EventTarget()
    document.visibilityState = 'visible'
    const window = new EventTarget()
    const urls = []
    const timers = new Map()
    window.location = { assign: (url) => urls.push(url) }
    window.setTimeout = (fn) => { timers.set(1, fn); return 1 }
    window.clearTimeout = (id) => timers.delete(id)
    return { window, document, urls, timers, tick: () => [...timers.values()].forEach((fn) => fn()) }
}

test('detects iPhone, Android, desktop and iPad desktop mode', () => {
    assert.equal(detectOs({ userAgent: 'iPhone' }), 'apple')
    assert.equal(detectOs({ userAgent: 'Android' }), 'android')
    assert.equal(detectOs({ userAgent: 'Macintosh', maxTouchPoints: 5 }), 'apple')
    assert.equal(detectOs({ userAgent: 'Macintosh', maxTouchPoints: 0 }), 'desktop')
})

test('installed app detection distinguishes unsupported, missing, present and errors', async () => {
    assert.equal(await detectInstalledApp({}), null)
    assert.equal(await detectInstalledApp({ getInstalledRelatedApps: async () => [] }), false)
    assert.equal(await detectInstalledApp({ getInstalledRelatedApps: async () => [{ platform: 'play', id: 'com.betzon.mobile' }] }), true)
    assert.equal(await detectInstalledApp({ getInstalledRelatedApps: async () => { throw Error() } }), null)
})

test('iOS opens the exact shared contest and falls back to the App Store', () => {
    const b = browser()
    openSharedContest({ ...b, contestId: '123', os: 'apple' })
    assert.deepEqual(b.urls, ['myapp://share/123'])
    b.tick()
    assert.deepEqual(b.urls, ['myapp://share/123', APP_STORE_URL])
})

test('successful app handoff cancels store redirect even after returning', () => {
    const b = browser()
    let left = false
    openSharedContest({ ...b, contestId: '123', os: 'apple', onLeaving: () => { left = true } })
    b.document.visibilityState = 'hidden'
    b.document.dispatchEvent(new Event('visibilitychange'))
    b.document.visibilityState = 'visible'
    b.tick()
    assert.equal(left, true)
    assert.deepEqual(b.urls, ['myapp://share/123'])
})

test('Android attempts app opening but never sends users to an unreleased listing', () => {
    const b = browser()
    let fallback = false
    openSharedContest({ ...b, contestId: '123', os: 'android', onFallback: () => { fallback = true } })
    b.tick()
    assert.equal(fallback, true)
    assert.deepEqual(b.urls, ['myapp://share/123'])
})

test('unmount and page navigation cancel pending fallback', () => {
    for (const mode of ['unmount', 'pagehide']) {
        const b = browser()
        let left = false
        const cancel = openSharedContest({ ...b, contestId: '123', os: 'apple', onLeaving: () => { left = true } })
        if (mode === 'unmount') cancel()
        else b.window.dispatchEvent(new Event('pagehide'))
        b.tick()
        assert.equal(left, mode === 'pagehide')
        assert.deepEqual(b.urls, ['myapp://share/123'])
    }
})

test('invalid contests do not navigate; desktop offers the App Store directly', () => {
    const b = browser()
    openSharedContest({ ...b, contestId: '../bad', os: 'apple' })
    assert.deepEqual(b.urls, [])
    openSharedContest({ ...b, contestId: '123', os: 'desktop' })
    assert.deepEqual(b.urls, [APP_STORE_URL])
})

test('URL previews cover both devices and install states, with safe defaults', () => {
    for (const os of ['apple', 'android']) {
        for (const installed of [true, false]) {
            assert.deepEqual(parseSharePreview(new URLSearchParams({ os, installed })), { os, installed })
        }
    }
    assert.deepEqual(parseSharePreview(new URLSearchParams('os=ios&installed=1')), { os: 'apple', installed: true })
    assert.deepEqual(parseSharePreview(new URLSearchParams('installed=0')), { os: null, installed: false })
    assert.deepEqual(parseSharePreview(new URLSearchParams()), { os: null, installed: null })
    assert.deepEqual(parseSharePreview(new URLSearchParams('os=unknown&installed=maybe')), { os: null, installed: null })
    assert.deepEqual(parseSharePreview(new URLSearchParams('os=constructor')), { os: null, installed: null })
})
