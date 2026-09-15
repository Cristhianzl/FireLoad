import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorGuide } from "@/components/CalculatorGuide";
import { JsonLd } from "@/components/JsonLd";
import { OccupancyCalculator } from "@/components/OccupancyCalculator";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { extinguisherExample } from "@/lib/examples";
import { pageInfo } from "@/lib/pages";
import { webAppSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { extinguishersGuide, nav, occupancy } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.extinguishers);
const REF_IDS = ["it14", "it21", "nbr12693"];

export const metadata: Metadata = pageMetadata(PAGE);

export default function ExtinguishersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema({
          name: occupancy.h1,
          description: PAGE.description,
          path: PAGE.path,
          refIds: REF_IDS,
          dateModified: PAGE.updatedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.extinguishers, path: PAGE.path },
        ]}
      />
      <PageHeader
        title={occupancy.h1}
        intro={occupancy.intro}
        refIds={REF_IDS}
        updatedAt={PAGE.updatedAt}
      />
      <div className="mt-10">
        <OccupancyCalculator />
      </div>
      <CalculatorGuide
        steps={extinguishersGuide.steps}
        answers={extinguishersGuide.answers}
        example={extinguishersGuide.example(extinguisherExample())}
        faq={extinguishersGuide.faq}
        related={[
          ROUTES.storage,
          ROUTES.tableOccupancy,
          ROUTES.home,
          ROUTES.exits,
          ROUTES.trrf,
          ROUTES.methodology,
        ]}
      />
    </div>
  );
}
