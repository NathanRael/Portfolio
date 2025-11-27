import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  // experimental : {
  //     ppr : true,
  // },
  // devIndicators : {
  //     appIsrStatus : true,
  //     buildActivity :true,
  //     buildActivityPosition : 'bottom-right'
  // }
};

export default withNextIntl(nextConfig);
