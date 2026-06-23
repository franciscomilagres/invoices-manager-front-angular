import type { VercelConfig } from '@vercel/config';

// Read your secret backend URL from Vercel's environment variables
const backendUrl = process.env.BACKEND_URL || 'https://fallback-backend.com';

const config: VercelConfig = {
  rewrites: [
    {
      source: '/api/(.*)',
      destination: `${backendUrl}/api/$1`
    }
  ]
};

export default config;
