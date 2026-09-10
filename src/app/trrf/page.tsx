import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { TrrfCalculator } from "@/components/TrrfCalculator";
import { ROUTES } from "@/lib/config";
import { breadcrumbSchema, webAppSchema } from "@/lib/schema";
import { nav, seo, trrf } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.trrf.title,
  description: seo.trrf.description,
  alternates: { canonical: ROUTES.trrf },
};

export default function TrrfPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema(seo.trrf.title, seo.trrf.description, ROUTES.trrf)}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: nav.trrf, path: ROUTES.trrf },
        ])}
      />
      <PageHeader
        title={trrf.h1}
        intro={trrf.intro}
        refIds={["it08", "nbr14432"]}
      />
      <div className="mt-10">
        <TrrfCalculator />
      </div>
    </div>
  );
}
