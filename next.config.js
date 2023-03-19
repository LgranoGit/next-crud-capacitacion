/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    URL: 'URL defecto',
  },
}

module.exports = nextConfig
