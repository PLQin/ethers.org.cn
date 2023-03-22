/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

if (process.env.BASE_PATH) {
  nextConfig.basePath = process.env.BASE_PATH
} else {
  // /app is the default base path for the app
  // 这里是为了解决在实际开发时，nextjs的 basepath 并不为 /app 的问题
  nextConfig.basePath = process.env.NODE_ENV === 'production' ? '' : ''
}

module.exports = nextConfig
