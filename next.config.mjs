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
		],
	},
};

export default nextConfig;
