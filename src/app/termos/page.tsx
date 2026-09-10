import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalArticle } from "@/components/LegalArticle";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/schema";
import { footer, nav, seo, terms } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.terms.title,
  description: seo.terms.description,
  alternates: { canonical: ROUTES.terms },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: footer.terms, path: ROUTES.terms },
        ])}
      />
      <PageHeader title={terms.h1} />
      <LegalArticle updated={terms.updated} blocks={terms.blocks} />
    </div>
  );
}
