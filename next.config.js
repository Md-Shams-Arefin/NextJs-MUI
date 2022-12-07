/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    envMode: process.env.NODE_ENV,
    // customKey: 'my-value',
    // port: process.env.PORT
  },
}

module.exports = nextConfig
