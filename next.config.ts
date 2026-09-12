import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async rewrites() {
    return [
      {
        source: "/programs",
        destination: "/pricing",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/membership",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/services/hormone-optimization",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/anti-aging-longevity",
        destination: "/services/wellness-healthy-aging",
        permanent: true,
      },
      {
        source: "/services/concierge-wellness",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
