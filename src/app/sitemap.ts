import type { MetadataRoute } from "next";
import { ALL_PATHS, pageInfo } from "@/lib/pages";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: pageInfo(path).updatedAt,
  }));
}
