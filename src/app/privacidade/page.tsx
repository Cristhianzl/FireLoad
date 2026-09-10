import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalArticle } from "@/components/LegalArticle";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/schema";
import { footer, nav, privacy, seo } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.privacy.title,
  description: seo.privacy.description,
  alternates: { canonical: ROUTES.privacy },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: footer.privacy, path: ROUTES.privacy },
        ])}
      />
      <PageHeader title={privacy.h1} />
      <LegalArticle updated={privacy.updated} blocks={privacy.blocks} />
    </div>
  );
}
