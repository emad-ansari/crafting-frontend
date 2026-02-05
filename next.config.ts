import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "aicdn.picsart.com",
			},
		],
	},
};

export default nextConfig;
