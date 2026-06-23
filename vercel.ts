import { routes, deploymentEnv, type VercelConfig } from '@vercel/config/v1';


export const config = {
  rewrites: [
    routes.rewrite('/api/(.*)', `${deploymentEnv('BACKEND_URL')}/api`)
  ]
};
