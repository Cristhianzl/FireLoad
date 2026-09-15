import type { NextConfig } from "next";

// Aliases serve identical pages; redirect so engines index a single copy.
const CANONICAL_HOST = "fireload.com.br";
const ALIAS_HOSTS = ["fireload.vercel.app", "www.fireload.com.br"];

const nextConfig: NextConfig = {
  async redirects() {
    return ALIAS_HOSTS.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${CANONICAL_HOST}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
