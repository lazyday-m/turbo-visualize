import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/turbo-visualize/pc',
  assetPrefix: '/turbo-visualize/pc/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
