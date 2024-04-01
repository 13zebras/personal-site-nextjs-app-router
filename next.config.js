/** @type {import('next').NextConfig} */

// const nextConfig = {
module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'picsum.photos',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
				pathname: '/**',
			},
		],
	},
}

// module.exports = nextConfig
