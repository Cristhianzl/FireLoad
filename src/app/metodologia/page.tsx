import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RiskBadge } from "@/components/RiskBadge";
import { ROUTES } from "@/lib/config";
import { CLASS_A, CLASS_B, RISK_ORDER } from "@/lib/norms/tables";
import { HEIGHT_CLASSES } from "@/lib/trrf";
import { breadcrumbSchema } from "@/lib/schema";
import { methodology, methodologyTable, nav, risk, seo } from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.methodology.title,
  description: seo.methodology.description,
  alternates: { canonical: ROUTES.methodology },
};

function Formula({ children }: { children: string }) {
  return (
    <p className="rounded-box border-base-300 bg-base-200 readout-value my-4 overflow-x-auto border px-5 py-4 text-center text-lg">
      {children}
    </p>
  );
}

function Legend({ items }: { items: string[] }) {
  return (
    <ul className="text-base-content/75 mt-3 space-y-1.5 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <JsonLd
        data={breadcrumbSchema([
          { name: nav.home, path: ROUTES.home },
          { name: nav.methodology, path: ROUTES.methodology },
        ])}
      />
      <PageHeader
        title={methodology.h1}
        intro={methodology.intro}
        refIds={["it14", "it21", "it08", "it11", "nbr12693", "nbr14432", "tcc"]}
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-12">
        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.section1Title}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.section1Body}
          </p>
          <Formula>{methodology.section1Formula}</Formula>
          <Legend items={methodology.section1Legend} />
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.section2Title}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.section2Body}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {RISK_ORDER.map((level) => (
              <div
                key={level}
                className="rounded-box border-base-300 bg-base-100 flex-1 border p-4"
              >
                <RiskBadge risk={level} />
                <p className="text-base-content/70 mt-2 text-sm">
                  {risk[level].range}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.section3Title}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.section3Body}
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>{methodologyTable.fireClass}</th>
                  <th>{methodologyTable.low}</th>
                  <th>{methodologyTable.medium}</th>
                  <th>{methodologyTable.high}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{methodologyTable.classA}</td>
                  {RISK_ORDER.map((level) => (
                    <td key={level}>
                      {CLASS_A[level].capacity} ·{" "}
                      {CLASS_A[level].travelDistanceM} m
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>{methodologyTable.classB}</td>
                  {RISK_ORDER.map((level) => (
                    <td key={level}>
                      {CLASS_B[level].capacity} ·{" "}
                      {CLASS_B[level].travelDistanceM} m
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.section4Title}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.section4Body}
          </p>
          <Formula>{methodology.section4Formula}</Formula>
          <Legend items={methodology.section4Legend} />
          <p className="rounded-box border-warning/30 bg-warning/10 text-base-content/80 mt-4 border p-4 text-sm leading-relaxed">
            {methodology.section4Note}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.trrfTitle}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.trrfBody}
          </p>
          <p className="text-base-content mt-4 text-sm font-semibold">
            {methodology.trrfClassesTitle}
          </p>
          <ul className="text-base-content/75 mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
            {HEIGHT_CLASSES.map((c) => (
              <li key={c.key} className="flex gap-2">
                <span className="text-base-content font-semibold">
                  {c.label}
                </span>
                <span>{c.range}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-box border-warning/30 bg-warning/10 text-base-content/80 mt-4 border p-4 text-sm leading-relaxed">
            {methodology.trrfNote}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.exitsTitle}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.exitsBody}
          </p>
          <Formula>{methodology.exitsFormula}</Formula>
          <Legend items={methodology.exitsLegend} />
          <p className="rounded-box border-warning/30 bg-warning/10 text-base-content/80 mt-4 border p-4 text-sm leading-relaxed">
            {methodology.exitsNote}
          </p>
        </section>
      </div>
    </div>
  );
}
