import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/tmdb/:path*',  
        destination: 'https://api.themoviedb.org/3/:path*', 
      },
    ];
  },
};

export default nextConfig;
