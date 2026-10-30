import test from 'node:test'
import assert from 'node:assert/strict'
import { buildAssetLinks } from './configure-android-app-links.mjs'

test('uses the supplied public certificate for the Betzon package', () => {
    const fingerprint = Array(32).fill('AB').join(':')
    const links = buildAssetLinks([fingerprint.toLowerCase(), fingerprint])
    assert.deepEqual(links, [{
        relation: ['delegate_permission/common.handle_all_urls'],
        target: { namespace: 'android_app', package_name: 'com.betzon.mobile', sha256_cert_fingerprints: [fingerprint] },
    }])
})

test('rejects missing or placeholder fingerprints', () => {
    for (const values of [[], [''], ['YOUR_FINGERPRINT'], ['AA:BB']]) {
        assert.throws(() => buildAssetLinks(values), /SHA-256/)
    }
})
