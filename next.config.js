/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep next dev and next build from overwriting each other's server chunks.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
