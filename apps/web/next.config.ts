import type { NextConfig } from 'next';

const config: NextConfig = {
  async rewrites() {
    const apiOrigin = process.env.API_ORIGIN ?? 'http://127.0.0.1:3001';
    return [{ source: '/api/:path*', destination: `${apiOrigin}/api/:path*` }];
  },
};

export default config;
