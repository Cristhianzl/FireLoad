import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorGuide } from "@/components/CalculatorGuide";
import { ExitsCalculator } from "@/components/ExitsCalculator";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { exitsExample } from "@/lib/examples";
import { pageInfo } from "@/lib/pages";
import { webAppSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { exits, exitsGuide, nav } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.exits);
const REF_IDS = ["it11"];

export const metadata: Metadata = pageMetadata(PAGE);

export default function ExitsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema({
          name: exits.h1,
          description: PAGE.description,
          path: PAGE.path,
          refIds: REF_IDS,
          dateModified: PAGE.updatedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.exits, path: PAGE.path },
        ]}
      />
      <PageHeader
        title={exits.h1}
        intro={exits.intro}
        refIds={REF_IDS}
        updatedAt={PAGE.updatedAt}
      />
      <div className="mt-10">
        <ExitsCalculator />
      </div>
      <CalculatorGuide
        steps={exitsGuide.steps}
        answers={exitsGuide.answers}
        example={exitsGuide.example(exitsExample())}
        faq={exitsGuide.faq}
        related={[
          ROUTES.tableExits,
          ROUTES.trrf,
          ROUTES.home,
          ROUTES.extinguishers,
          ROUTES.storage,
          ROUTES.norms,
        ]}
      />
    </div>
  );
}
