import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { nav } from "@/locales/pt-BR";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const lastIndex = items.length - 1;
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav
        aria-label={nav.breadcrumbLabel}
        className="breadcrumbs text-base-content/60 mx-auto mb-6 max-w-3xl py-0 text-sm"
      >
        <ol>
          {items.map((item, index) => (
            <li key={item.path}>
              {index === lastIndex ? (
                <span aria-current="page" className="text-base-content/80">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="link link-hover">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
