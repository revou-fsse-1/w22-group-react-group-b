/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["i.imgur.com", "/public", "cdn.filestackcontent.com"],
	},
};

module.exports = nextConfig;
