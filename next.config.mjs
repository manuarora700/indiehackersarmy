/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "ui.aceternity.com" },
      { hostname: "sprintsocial.ai" },
      { hostname: "cdn.youprotab.com" },
    ],
  },
};

export default nextConfig;
