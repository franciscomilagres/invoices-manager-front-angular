import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';


export const config = {
  rewrites: [
    routes.rewrite('/api/(.*)', `${deploymentEnv('API_BASE_URL')}/api/$1`)
  ]
};
