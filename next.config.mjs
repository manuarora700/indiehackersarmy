/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'ui.aceternity.com' },
			{ hostname: 'sprintsocial.ai' },
			{ hostname: 'cdn.youprotab.com' },
			{ hostname: 'getaresu.me' },
			{ hostname: 'https://ui.gesturs.com' },
			{ hostname: 'fyg.app' },
      { hostname: "webui.gopx.dev" },
			{ hostname: "tryhoverify.com" },
			{ hostname: "planmygrowth.in" },
		],
	},
};

export default nextConfig;
