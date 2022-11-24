/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      "/": { page: "/" },
      "/": { page: "/treatment" },
      "/": { page: "/summary" },
    };
  },
};

module.exports = nextConfig;
