/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  env: {
    API_PATH: 'https://657122bc09586eff6642403d.mockapi.io',
  },
};

module.exports = nextConfig;
