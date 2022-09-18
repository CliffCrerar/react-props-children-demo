/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/docs',
}


if (process.env.NODE_ENV === 'development')
  nextConfig.devIndicators = {
    autoPrerender: false,
  };
// nextConfig.images.unoptimized = false;
module.exports = nextConfig
