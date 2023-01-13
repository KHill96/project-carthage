/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images:{
    domains:[
      'media.graphassets.com',
      'localhost'
    ]
  },
  async redirects() {
    return [{
      source:'/books',
      destination: '/',
      permanent: true
    }
    ]
  }


}
