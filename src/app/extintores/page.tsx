import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { OccupancyCalculator } from "@/components/OccupancyCalculator";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { breadcrumbSchema, webAppSchema } from "@/lib/schema";
import { nav, occupancy, seo } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.extinguishers.title,
  description: seo.extinguishers.description,
  alternates: { canonical: ROUTES.extinguishers },
};

export default function ExtinguishersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema(
          "Estimativa de extintores por ocupação",
          metadata.description as string,
          ROUTES.extinguishers,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: nav.extinguishers, path: ROUTES.extinguishers },
        ])}
      />
      <PageHeader
        title={occupancy.h1}
        intro={occupancy.intro}
        refIds={["it14", "nbr12693"]}
      />
      <div className="mt-10">
        <OccupancyCalculator />
      </div>
    </div>
  );
}
