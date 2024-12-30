import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images : {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
            { protocol: "https", hostname: "cdn.sanity.io" },
            { protocol: "https", hostname: "placehold.co" },
            {
                protocol : 'https',
                hostname : 'cdn.jsdelivr.net'
            }
        ],
    }
};

export default nextConfig;
