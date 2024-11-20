/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com"
      },
      {
        hostname: "a.deviantart.net"
      }
    ]
  }
};

export default nextConfig;
