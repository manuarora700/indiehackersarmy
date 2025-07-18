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
			{ hostname: 'webui.gopx.dev' },
			{ hostname: 'tryhoverify.com' },
			{ hostname: 'www.planmygrowth.in' },
			{ hostname: 'github.com' },
			{ hostname: 'ui.metamorix.com' },
			{ hostname: 'todaylist.carrd.co' },
			{hostname: 'www.shoponwhatsapp.com'}
		],
	},
};

export default nextConfig;
