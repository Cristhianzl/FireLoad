import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorGuide } from "@/components/CalculatorGuide";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { TrrfCalculator } from "@/components/TrrfCalculator";
import { ROUTES } from "@/lib/config";
import { trrfExample } from "@/lib/examples";
import { pageInfo } from "@/lib/pages";
import { webAppSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { nav, trrf, trrfGuide } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.trrf);
const REF_IDS = ["it08", "nbr14432"];

export const metadata: Metadata = pageMetadata(PAGE);

export default function TrrfPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema({
          name: trrf.h1,
          description: PAGE.description,
          path: PAGE.path,
          refIds: REF_IDS,
          dateModified: PAGE.updatedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.trrf, path: PAGE.path },
        ]}
      />
      <PageHeader
        title={trrf.h1}
        intro={trrf.intro}
        refIds={REF_IDS}
        updatedAt={PAGE.updatedAt}
      />
      <div className="mt-10">
        <TrrfCalculator />
      </div>
      <CalculatorGuide
        steps={trrfGuide.steps}
        answers={trrfGuide.answers}
        example={trrfGuide.example(trrfExample())}
        faq={trrfGuide.faq}
        related={[
          ROUTES.tableTrrf,
          ROUTES.exits,
          ROUTES.home,
          ROUTES.extinguishers,
          ROUTES.storage,
          ROUTES.norms,
        ]}
      />
    </div>
  );
}
