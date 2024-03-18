/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ujcklkwybwifqevmfhsv.supabase.co",
      },
    ],
  },
};

export default nextConfig;
