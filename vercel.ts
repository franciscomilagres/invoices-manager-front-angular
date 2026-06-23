import type { VercelConfig, routes } from '@vercel/config/v1';

// Read your secret backend URL from Vercel's environment variables
const backendUrl = process.env.BACKEND_URL || 'https://fallback-backend.com';

export const config: VercelConfig = {
  rewrites: [
    routes.rewrite('/api/(.*)', `${backendUrl}/api/$1`)
  ]
};

export default config;
