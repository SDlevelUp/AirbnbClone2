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
      "res.cloudinary.com"
    ],
  },
};

module.exports = nextConfig;