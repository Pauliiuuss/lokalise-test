/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = () => {
  const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    i18n,
  };

  return nextConfig;
};
