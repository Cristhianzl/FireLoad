import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LegalArticle } from "@/components/LegalArticle";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { footer, nav, terms } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.terms));

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: footer.terms, path: ROUTES.terms },
        ]}
      />
      <PageHeader title={terms.h1} />
      <LegalArticle updated={terms.updated} blocks={terms.blocks} />
    </div>
  );
}
