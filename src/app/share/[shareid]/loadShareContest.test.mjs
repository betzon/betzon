import test from 'node:test'
import assert from 'node:assert/strict'
import { loadShareContest } from './loadShareContest.mjs'

test('loads the requested contest', async () => {
    const result = await loadShareContest('191', {
        fetchImpl: async (url, options) => {
            assert.equal(url, '/api/share-contest/191')
            assert.equal(options.cache, 'no-store')
            return { ok: true, json: async () => ({ contest: { id: 191 } }) }
        },
    })
    assert.equal(result.contest.id, 191)
})

test('a stalled request reaches the deadline and aborts', async () => {
    const controller = new AbortController()
    await assert.rejects(loadShareContest('191', {
        controller,
        timeoutMs: 10,
        fetchImpl: () => new Promise(() => {}),
    }), /timed out/)
    assert.equal(controller.signal.aborted, true)
})

test('a stalled JSON body also reaches the deadline', async () => {
    await assert.rejects(loadShareContest('191', {
        timeoutMs: 10,
        fetchImpl: async () => ({ ok: true, json: () => new Promise(() => {}) }),
    }), /timed out/)
})

test('preserves not-found status for invalid links', async () => {
    await assert.rejects(loadShareContest('191', {
        fetchImpl: async () => ({ ok: false, status: 404, json: async () => ({}) }),
    }), (error) => error.status === 404)
})

test('server failures remain retryable', async () => {
    await assert.rejects(loadShareContest('191', {
        fetchImpl: async () => ({ ok: false, status: 502, json: async () => ({}) }),
    }), (error) => error.status === 502)
})
