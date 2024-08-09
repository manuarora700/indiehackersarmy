/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "ui.aceternity.com" },
      { hostname: "sprintsocial.ai" },
    ],
  },
};

export default nextConfig;
