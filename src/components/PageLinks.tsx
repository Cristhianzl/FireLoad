import Link from "next/link";
import type { RoutePath } from "@/lib/config";
import { pageInfo } from "@/lib/pages";

export function PageLinks({
  title,
  intro,
  paths,
}: {
  title: string;
  intro?: string;
  paths: RoutePath[];
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
      {intro && <p className="text-base-content/70 mt-2 max-w-2xl">{intro}</p>}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          const page = pageInfo(path);
          return (
            <li key={path}>
              <Link
                href={path}
                className="group rounded-box border-base-300 bg-base-100 hover:border-primary/40 flex h-full flex-col border p-5 transition-colors"
              >
                <span className="font-display group-hover:text-primary font-semibold">
                  {page.title}
                </span>
                <span className="text-base-content/70 mt-2 text-sm leading-relaxed">
                  {page.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
