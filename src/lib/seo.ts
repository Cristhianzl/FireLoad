import type { Metadata } from "next";
import { SITE_URL } from "@/lib/config";
import { site } from "@/locales/pt-BR";

export type PageSeo = { title: string; description: string; path: string };

export function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: absoluteUrl(path),
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
