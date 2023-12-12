/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
        //pathname: "/u/35678887?v=4",
      },
    ],
  },
};

module.exports = nextConfig;
