import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/boyce-consulting-marketing',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
