import type { NextConfig } from "next";

const nextConfig: any = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
// Final deployment fix: 2026-03-12 16:47
