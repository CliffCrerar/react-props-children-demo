/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/docs',
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
