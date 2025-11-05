/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/turbo-visualize',
  assetPrefix: '/turbo-visualize/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
