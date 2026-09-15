import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { PageLinks } from "@/components/PageLinks";
import { ROUTES } from "@/lib/config";
import { CALCULATOR_PATHS, pageInfo, TABLE_PATHS } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { home, nav, tablesHub } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.tables);

export const metadata: Metadata = pageMetadata(PAGE);

export default function TablesHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.tables, path: PAGE.path },
        ]}
      />
      <PageHeader
        title={tablesHub.h1}
        intro={tablesHub.intro}
        refIds={["it14", "it08", "it11"]}
        updatedAt={PAGE.updatedAt}
      />
      <div className="mt-12">
        <PageLinks title={tablesHub.listTitle} paths={TABLE_PATHS} />
      </div>
      <p className="text-base-content/55 mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed">
        {tablesHub.sourceNote}
      </p>
      <div className="border-base-300 mt-16 border-t pt-14">
        <PageLinks title={home.featuresTitle} paths={CALCULATOR_PATHS} />
      </div>
    </div>
  );
}
