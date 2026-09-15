import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { REFERENCES } from "@/lib/norms/references";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { nav, norms } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.norms);

export const metadata: Metadata = pageMetadata(PAGE);

const ORDER = [
  "it14",
  "it21",
  "it08",
  "it11",
  "nbr12693",
  "nbr14432",
  "tcc",
] as const;

export default function NormsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.norms, path: PAGE.path },
        ]}
      />
      <PageHeader title={norms.h1} intro={norms.intro} />
      <p className="text-base-content/60 mt-4 text-center text-sm">
        {norms.updatedAt}
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {ORDER.map((id) => {
          const ref = REFERENCES[id];
          const usage = norms.usage[id];
          return (
            <article
              key={id}
              className="rounded-box border-base-300 bg-base-100 border p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-primary text-lg font-bold">
                  {ref.code}
                </h2>
                <span className="text-base-content/55 text-xs">{ref.year}</span>
              </div>
              <p className="mt-1 font-medium">{ref.title}</p>
              <p className="text-base-content/60 mt-0.5 text-sm">{ref.org}</p>
              <p className="text-base-content/80 mt-3 text-sm leading-relaxed">
                {usage}
              </p>
              {norms.publication[id] && (
                <p className="text-base-content/60 mt-2 text-xs">
                  {norms.publicationLabel}: {norms.publication[id]}
                </p>
              )}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary mt-3 inline-block text-sm font-medium break-all"
              >
                {ref.url}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
