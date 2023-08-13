/** @type {import('next').NextConfig} */

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
      'lh3.googleusercontent.com',
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;