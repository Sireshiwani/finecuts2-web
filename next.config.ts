import type { NextConfig } from "next";
import path from "path";
import { DJANGO_PROXY_PREFIXES } from "./lib/django-proxy-paths";

function djangoRewriteBase(): string {
  return (
    process.env.DJANGO_API_URL ||
    process.env.NEXT_PUBLIC_DJANGO_API_URL ||
    "http://127.0.0.1:8000"
  ).replace(/\/$/, "");
}

const nextConfig: NextConfig = {
  // Prevent Next from picking /var/www when a stray package-lock.json exists there
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Local dev: proxy Django staff/API paths (production uses nginx)
  async rewrites() {
    const base = djangoRewriteBase();
    return DJANGO_PROXY_PREFIXES.flatMap((prefix) => [
      { source: `/${prefix}`, destination: `${base}/${prefix}/` },
      { source: `/${prefix}/:path*`, destination: `${base}/${prefix}/:path*` },
    ]);
  },
};

export default nextConfig;
