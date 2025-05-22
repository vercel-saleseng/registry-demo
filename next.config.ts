import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '9xunyj9nbtcqjdrd.public.blob.vercel-storage.com',
            },
            {
                protocol: 'https',
                hostname: 'static.episodate.com',
            },
        ],
    },
};

export default nextConfig;
