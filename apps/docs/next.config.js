/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/turbo-visualize/docs',
  assetPrefix: '/turbo-visualize/docs/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
