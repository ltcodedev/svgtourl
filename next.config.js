/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: "./",
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  env:{
    BACKEND_URL: "/svgtourl"
  },
}

module.exports = nextConfig
