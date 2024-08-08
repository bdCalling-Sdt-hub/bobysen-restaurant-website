/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "192.168.10.138",

        port: "5005", // Include the port if it's part of the hostname
      },
    ],
    domains: ["192.168.10.61"],
  },
};

export default nextConfig;
