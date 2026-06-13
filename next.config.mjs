/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => {
    return "zylxy-production";
  },
};

export default nextConfig;
