import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: {
    path: string;
    priority: number;
    changeFrequency: "monthly" | "yearly";
  }[] = [
    { path: ROUTES.home, priority: 1, changeFrequency: "monthly" },
    { path: ROUTES.extinguishers, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.trrf, priority: 0.9, changeFrequency: "monthly" },
    { path: ROUTES.methodology, priority: 0.7, changeFrequency: "monthly" },
    { path: ROUTES.norms, priority: 0.6, changeFrequency: "monthly" },
    { path: ROUTES.about, priority: 0.4, changeFrequency: "yearly" },
    { path: ROUTES.terms, priority: 0.3, changeFrequency: "yearly" },
    { path: ROUTES.privacy, priority: 0.3, changeFrequency: "yearly" },
  ];
  return entries.map((entry) => ({
    url: `${SITE_URL}${entry.path === "/" ? "" : entry.path}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
