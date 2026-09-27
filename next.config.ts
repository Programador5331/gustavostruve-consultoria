import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old GoDaddy Website Builder blog URLs (site migrated from GoDaddy).
      // Google still has these indexed; redirect instead of leaving them as 404s.
      {
        source: "/blog/f.rss",
        destination: "/blog/rss.xml",
        permanent: true,
      },
      {
        source: "/f/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/f/:slug*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
