/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/docs',
  devIndicators: {
    autoPrerender: false,
  }
}

if(process.env.NODE_ENV !== 'development') {
  nextConfig.images.unoptimized = true;
}

module.exports = nextConfig
