import type { Metadata } from "next";
import { BulletList } from "@/components/BulletList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { RiskBadge } from "@/components/RiskBadge";
import { ROUTES } from "@/lib/config";
import { CLASS_A, CLASS_B, RISK_ORDER } from "@/lib/norms/tables";
import { HEIGHT_CLASSES } from "@/lib/trrf";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { methodology, methodologyTable, nav, risk } from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.methodology);

export const metadata: Metadata = pageMetadata(PAGE);

function Formula({ children }: { children: string }) {
  return (
    <p className="rounded-box border-base-300 bg-base-200 readout-value my-4 overflow-x-auto border px-5 py-4 text-center text-lg">
      {children}
    </p>
  );
}

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { name: nav.home, path: ROUTES.home },
          { name: nav.methodology, path: PAGE.path },
        ]}
      />
      <PageHeader
        title={methodology.h1}
        intro={methodology.intro}
        refIds={["it14", "it21", "it08", "it11", "nbr12693", "nbr14432", "tcc"]}
        updatedAt={PAGE.updatedAt}
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
          <BulletList items={methodology.section1Legend} className="mt-3" />
          <p className="rounded-box border-base-300 bg-base-200/60 text-base-content/80 mt-4 border p-4 text-sm leading-relaxed">
            {methodology.section1Note}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold">
            {methodology.storageTitle}
          </h2>
          <p className="text-base-content/80 mt-3 leading-relaxed">
            {methodology.storageBody}
          </p>
          <Formula>{methodology.storageFormula}</Formula>
          <BulletList items={methodology.storageLegend} className="mt-3" />
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
          <BulletList items={methodology.section4Legend} className="mt-3" />
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
          <BulletList items={methodology.exitsLegend} className="mt-3" />
          <p className="rounded-box border-warning/30 bg-warning/10 text-base-content/80 mt-4 border p-4 text-sm leading-relaxed">
            {methodology.exitsNote}
          </p>
        </section>
      </div>
    </div>
  );
}
