import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { pageInfo } from "@/lib/pages";
import { personSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { about, nav, site } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.about);

export const metadata: Metadata = pageMetadata(PAGE);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd data={personSchema()} />
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.about, path: PAGE.path },
        ]}
      />
      <PageHeader title={about.h1} updatedAt={PAGE.updatedAt} />

      <div className="text-base-content/80 mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed">
        <p>{about.body1}</p>
        <p>{about.body2}</p>
        <p>{about.body3}</p>
      </div>

      <section
        id="autor"
        className="rounded-box border-base-300 bg-base-100 mx-auto mt-10 max-w-3xl scroll-mt-20 border p-6"
      >
        <h2 className="font-display text-xl font-bold">{about.authorTitle}</h2>
        <p className="text-base-content/75 mt-2 text-sm leading-relaxed">
          {about.author}
        </p>
        <a
          href={site.authorGithub}
          target="_blank"
          rel="noopener noreferrer me"
          className="link link-primary mt-3 inline-block text-sm font-medium"
        >
          {about.authorProfile}
        </a>
        <h2 className="font-display mt-6 text-xl font-bold">
          {about.updatesTitle}
        </h2>
        <p className="text-base-content/75 mt-2 text-sm leading-relaxed">
          {about.updatesText}
        </p>
      </section>

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
