/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.moda.app',
      },
    ],
  },
};

module.exports = nextConfig;
