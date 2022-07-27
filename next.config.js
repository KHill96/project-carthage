/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['images-na.ssl-images-amazon.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects(){
    return[{
      source: '/books',
      destination:'/books/popular',
      permanent:true,
    }
    ,
    {
      source:'/search/',
      destination:'/search',
      permanent:true,
    }]
  }
}

module.exports = nextConfig;
