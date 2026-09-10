import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/schema";
import { about, nav, seo, site } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  alternates: { canonical: ROUTES.about },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: nav.about, path: ROUTES.about },
        ])}
      />
      <PageHeader title={about.h1} />

      <div className="text-base-content/80 mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed">
        <p>{about.body1}</p>
        <p>{about.body2}</p>
        <p>{about.body3}</p>
        <p className="text-base-content/60 text-sm">{about.author}</p>
      </div>

      <div className="rounded-box border-base-300 bg-base-200/60 mx-auto mt-10 max-w-3xl border p-6">
        <h2 className="font-display text-xl font-bold">{about.tccTitle}</h2>
        <p className="text-base-content/75 mt-2 text-sm leading-relaxed">
          {about.tccText}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={site.tccUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            {about.tccLink}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            GitHub
          </a>
          <a
            href={site.buymeacoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            Buy me a coffee
          </a>
        </div>
      </div>
    </div>
  );
}
