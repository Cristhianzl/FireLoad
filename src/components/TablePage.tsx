import Link from "next/link";
import type { ReactNode } from "react";
import { AnswerBlock } from "@/components/AnswerBlock";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PageLinks } from "@/components/PageLinks";
import { ROUTES, type RoutePath } from "@/lib/config";
import type { GuideAnswer } from "@/lib/content-types";
import { pageInfo } from "@/lib/pages";
import { datasetSchema } from "@/lib/schema";
import { common, nav, tablesHub } from "@/locales/pt-BR";

export function TablePage({
  path,
  title,
  intro,
  breadcrumb,
  refIds,
  variables,
  answer,
  cta,
  related,
  children,
}: {
  path: RoutePath;
  title: string;
  intro: string;
  breadcrumb: string;
  refIds: string[];
  variables: string[];
  answer: GuideAnswer;
  cta: { href: RoutePath; label: string };
  related: RoutePath[];
  children: ReactNode;
}) {
  const page = pageInfo(path);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={datasetSchema({
          name: title,
          description: page.description,
          path,
          refIds,
          dateModified: page.updatedAt,
          variables,
        })}
      />
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.tables, path: ROUTES.tables },
          { name: breadcrumb, path },
        ]}
      />
      <PageHeader
        title={title}
        intro={intro}
        refIds={refIds}
        updatedAt={page.updatedAt}
      />

      <div className="mx-auto mt-12 max-w-3xl">
        <AnswerBlock answer={answer} />
        <Link href={cta.href} className="btn btn-primary mt-6">
          {cta.label}
        </Link>
      </div>

      <div className="mt-14">{children}</div>

      <p className="text-base-content/55 mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed">
        {tablesHub.sourceNote}
      </p>

      <div className="border-base-300 mt-16 border-t pt-14">
        <PageLinks title={common.relatedTitle} paths={related} />
      </div>
    </div>
  );
}
