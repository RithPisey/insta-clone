/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["upload.wikimedia.org", "insta-clone-liart.vercel.app"],
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
