import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorGuide } from "@/components/CalculatorGuide";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { StorageCalculator } from "@/components/StorageCalculator";
import { ROUTES } from "@/lib/config";
import { storageExample } from "@/lib/examples";
import { pageInfo } from "@/lib/pages";
import { webAppSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { nav, storage, storageGuide } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.storage);
const REF_IDS = ["it14", "it21", "nbr12693"];

export const metadata: Metadata = pageMetadata(PAGE);

export default function StoragePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={webAppSchema({
          name: storage.h1,
          description: PAGE.description,
          path: PAGE.path,
          refIds: REF_IDS,
          dateModified: PAGE.updatedAt,
        })}
      />
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.storage, path: PAGE.path },
        ]}
      />
      <PageHeader
        title={storage.h1}
        intro={storage.intro}
        refIds={REF_IDS}
        updatedAt={PAGE.updatedAt}
      />
      <div className="mt-10">
        <StorageCalculator />
      </div>
      <CalculatorGuide
        steps={storageGuide.steps}
        answers={storageGuide.answers}
        example={storageGuide.example(storageExample())}
        faq={storageGuide.faq}
        related={[
          ROUTES.tableStorage,
          ROUTES.home,
          ROUTES.extinguishers,
          ROUTES.tableOccupancy,
          ROUTES.trrf,
          ROUTES.methodology,
        ]}
      />
    </div>
  );
}
