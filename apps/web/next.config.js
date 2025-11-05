/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/turbo-visualize/web',
  assetPrefix: '/turbo-visualize/web/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
