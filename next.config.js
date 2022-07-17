/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images-na.ssl-images-amazon.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig;
