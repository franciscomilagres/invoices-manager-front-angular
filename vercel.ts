// Read your secret backend URL from Vercel's environment variables
const backendUrl = process.env.BACKEND_URL || 'https://fallback-backend.com';

// Construct the full string destination prior to assigning it to the object
const apiDestination = backendUrl + '/api/$1';

export const config = {
  rewrites: [
    {
      source: '/api/(.*)',
      destination: apiDestination
    }
  ]
};
