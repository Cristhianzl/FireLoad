import type { NextConfig } from "next";

// The Vercel alias serves the same pages; send it to the canonical domain so
// search engines never index two copies of the site.
const CANONICAL_HOST = "fireload.com.br";
const VERCEL_ALIAS_HOST = "fireload.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: VERCEL_ALIAS_HOST }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
