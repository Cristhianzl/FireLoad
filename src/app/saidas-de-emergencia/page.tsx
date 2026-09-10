import type { Metadata } from "next";
import { ExitsCalculator } from "@/components/ExitsCalculator";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { breadcrumbSchema, webAppSchema } from "@/lib/schema";
import { exits, nav, seo } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.exits.title,
  description: seo.exits.description,
  alternates: { canonical: ROUTES.exits },
};

export default function ExitsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema(
          seo.exits.title,
          seo.exits.description,
          ROUTES.exits,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: nav.exits, path: ROUTES.exits },
        ])}
      />
      <PageHeader title={exits.h1} intro={exits.intro} refIds={["it11"]} />
      <div className="mt-10">
        <ExitsCalculator />
      </div>
    </div>
  );
}
