/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    domains: ['i.pravatar.cc', 'picsum.photos'],
  },
};

module.exports = nextConfig;
