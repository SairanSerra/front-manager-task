/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config, options) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig
