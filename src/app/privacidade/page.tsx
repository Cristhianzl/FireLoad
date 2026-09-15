import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LegalArticle } from "@/components/LegalArticle";
import { PageHeader } from "@/components/PageHeader";
import { ROUTES } from "@/lib/config";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { footer, nav, privacy } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.privacy));

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: footer.privacy, path: ROUTES.privacy },
        ]}
      />
      <PageHeader title={privacy.h1} />
      <LegalArticle updated={privacy.updated} blocks={privacy.blocks} />
    </div>
  );
}
