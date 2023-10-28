const path = require('path');

/** @type {import('next-react-svg').NextReactSvgConfig} */
const nextReactSvgConfig = {
  include: path.resolve(__dirname, 'public/images/'),
};
const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
    ],
  },
};

module.exports = withReactSvg(nextConfig);
