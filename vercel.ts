import { routes } from '@vercel/config/v1';


export const config = {
  rewrites: [
    routes.rewrite('/api/(.*)', 'https://invoices-manager-back.vercel.app/api/$1')
  ]
};
