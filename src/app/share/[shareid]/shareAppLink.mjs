export const APP_STORE_URL = 'https://apps.apple.com/us/app/betzon/id6550891419'
export const ANDROID_PACKAGE = 'com.betzon.mobile'

export function detectOs(navigator) {
    const ua = navigator?.userAgent || ''
    if (/android/i.test(ua)) return 'android'
    if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator?.maxTouchPoints > 1)) return 'apple'
    return 'desktop'
}

// A missing API is unknown, not evidence that the app is uninstalled.
export async function detectInstalledApp(navigator) {
    if (!navigator?.getInstalledRelatedApps) return null
    try {
        const apps = await navigator.getInstalledRelatedApps()
        return apps.some((app) => app.platform === 'play' && app.id === ANDROID_PACKAGE)
    } catch {
        return null
    }
}

// Invoke only from a tap. Cancelling on background prevents a delayed store
// redirect when someone successfully opens Betzon and later returns to Safari.
export function openSharedContest({ contestId, os, window, document, onFallback, onLeaving }) {
    if (!/^[1-9]\d*$/.test(String(contestId ?? ''))) return () => {}
    if (os === 'desktop') {
        window.location.assign(APP_STORE_URL)
        return () => {}
    }
    let timer
    const cleanup = () => {
        window.clearTimeout(timer)
        document.removeEventListener('visibilitychange', onVisibility)
        window.removeEventListener('pagehide', onPageHide)
    }
    const onPageHide = () => {
        cleanup()
        onLeaving?.()
    }
    const onVisibility = () => {
        if (document.visibilityState === 'hidden') {
            cleanup()
            onLeaving?.()
        }
    }
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)
    timer = window.setTimeout(() => {
        cleanup()
        if (document.visibilityState === 'hidden') return
        onFallback?.()
        if (os === 'apple') window.location.assign(APP_STORE_URL)
    }, 2500)
    try {
        window.location.assign(`myapp://share/${contestId}`)
    } catch {
        cleanup()
        onFallback?.()
        if (os === 'apple') window.location.assign(APP_STORE_URL)
    }
    return cleanup
}

// Explicit URL overrides let the share page preview each device/install state.
export function parseSharePreview(params) {
    const osValue = (params.get('os') || '').toLowerCase()
    const os = osValue === 'ios' || osValue === 'apple' ? 'apple'
        : osValue === 'android' || osValue === 'desktop' ? osValue : null
    const installedValue = (params.get('installed') || '').toLowerCase()
    const installed = ['true', '1'].includes(installedValue) ? true
        : ['false', '0'].includes(installedValue) ? false : null
    return { os, installed }
}
