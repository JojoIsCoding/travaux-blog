/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true/* ,
  eslint: {
    ignoreDuringBuilds: true,
  }, */
}



module.exports = () => {
 
  const rewrites = () => {
  return [
    {
      source: '/:id/:slug',
      destination: '/category/:id?slug=:slug'   
    },

    {
      source: '/p/:id/:slug',
      destination: '/posts/:id?slug=:slug'
    },

    {
      source: '/recents',
      destination: '/posts'
    }
  ]
}

const redirects = () => {
  return [
    {
      source: '/category/:id?slug=:slug',
      destination: '/:id/:slug',
      permanent: true 
    },

    {
      source: '/posts/:id?slug=:slug',
      destination: '/p/:id/:slug',
      permanent: true
    },

    {
      source: '/posts',
      destination: 'recents',
      permanent: true
    },

    {
      source: '/category',
      destination: '/',
      permanent: true
    }
  ]
}

return {
  rewrites,
  redirects
}

}

