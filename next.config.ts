import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "export",
  basePath: "/",
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;
