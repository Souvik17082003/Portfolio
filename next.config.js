const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
