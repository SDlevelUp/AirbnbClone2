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
      'plus.unsplash.com',
      'avatars.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;