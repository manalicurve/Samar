import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.creativechannel.in",
        pathname: "/**",
      },
    ],
    // Allow unoptimized for external img tags used in PortfolioGrid
    unoptimized: true,
  },
};

export default nextConfig;
