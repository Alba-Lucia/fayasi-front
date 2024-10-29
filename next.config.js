// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false,
//     images:{
//         domains:['localhost']
//     }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fayasi-backend.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;

