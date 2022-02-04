/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/images/'),
  webpack(config, _) {
    return config;
  },
  reactStrictMode: true,
});
