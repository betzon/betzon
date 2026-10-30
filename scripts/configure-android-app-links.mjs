import { mkdirSync, writeFileSync } from 'node:fs'
import { pathToFileURL, fileURLToPath } from 'node:url'

export function buildAssetLinks(fingerprints) {
    const values = [...new Set(fingerprints.map((value) => value.trim().toUpperCase()))]
    if (values.length === 0 || values.some((value) => !/^(?:[A-F0-9]{2}:){31}[A-F0-9]{2}$/.test(value))) {
        throw new Error('Provide the SHA-256 app-signing certificate fingerprint from Play Console (32 colon-separated hex bytes).')
    }
    return [{
        relation: ['delegate_permission/common.handle_all_urls'],
        target: {
            namespace: 'android_app',
            package_name: 'com.betzon.mobile',
            sha256_cert_fingerprints: values,
        },
    }]
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    try {
        const links = buildAssetLinks(process.argv.slice(2))
        const folder = new URL('../public/.well-known/', import.meta.url)
        mkdirSync(folder, { recursive: true })
        const output = new URL('assetlinks.json', folder)
        writeFileSync(output, JSON.stringify(links, null, 2) + '\n')
        console.log(`Created ${fileURLToPath(output)}. Deploy the website before installing the Android build.`)
    } catch (error) {
        console.error(error.message)
        process.exitCode = 1
    }
}
