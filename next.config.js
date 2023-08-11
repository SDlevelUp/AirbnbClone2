/** @type {import('next').NextConfig} */


const path = require('path');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'img.freepik.com',
      'images.unsplash.com',
      'plus.unsplash.com'
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'chemin/vers/le/dossier');
    return config;
  },
};

module.exports = nextConfig;