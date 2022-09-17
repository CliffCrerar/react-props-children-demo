/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/docs',
  devIndicators: {
    autoPrerender: false,
  },
}

module.exports = nextConfig
