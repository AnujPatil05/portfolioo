import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
