/** @type {import('next').NextConfig} */

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        port: "",
        pathname: "/maps/api/place/photo?**",
      },
    ],
  },
};

module.exports = nextConfig;
