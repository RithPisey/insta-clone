/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"https://upload.wikimedia.org",
			"https://insta-clone-liart.vercel.app",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
