import { ReferenceList } from "@/components/ReferenceChip";
import type { ClassEstimate, ExtinguisherEstimate } from "@/lib/engine";
import { formatNumber } from "@/lib/format";
import { OBSTACLE_ORDER } from "@/lib/norms/tables";
import { fireClass, obstacle, results } from "@/locales/pt-BR";

function ClassCard({ estimate }: { estimate: ClassEstimate }) {
  const isA = estimate.fireClass === "A";
  return (
    <div className="rounded-box border-base-300 bg-base-100 border p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="font-display text-lg font-semibold">
            {isA ? fireClass.a : fireClass.b}
          </h4>
          <p className="text-base-content/60 mt-0.5 text-sm">
            {isA ? fireClass.aHelp : fireClass.bHelp}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-base-content/60 text-xs">
            {results.capacityLabel}
          </p>
          <p className="font-display text-primary text-xl font-bold">
            {estimate.capacity}
          </p>
        </div>
      </div>

      <p className="text-base-content/70 mt-3 text-sm">
        {results.distanceLabel}:{" "}
        <span className="text-base-content font-semibold">
          {estimate.travelDistanceM} m
        </span>
      </p>

      <p className="text-base-content/55 mt-4 text-xs font-semibold tracking-wide uppercase">
        {results.estimatedQuantity}
      </p>
      <ul className="divide-base-200 rounded-field border-base-200 mt-2 divide-y overflow-hidden border">
        {OBSTACLE_ORDER.map((level) => (
          <li
            key={level}
            className="bg-base-200/40 flex items-center justify-between gap-3 px-3 py-2.5"
          >
            <span className="text-base-content/75 min-w-0 text-sm">
              {obstacle[level].label}
            </span>
            <span className="readout-value text-base-content shrink-0 text-xl font-bold">
              {formatNumber(estimate.count[level])}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EstimateResult({
  estimate,
}: {
  estimate: ExtinguisherEstimate;
}) {
  return (
    <section className="rounded-box border-base-300 bg-base-200/50 @container border p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-xl font-bold">
          {results.estimateTitle}
        </h3>
        <ReferenceList refIds={["nbr12693", "it21", "tcc"]} />
      </div>
      <p className="text-base-content/70 mt-1 text-sm">
        {results.estimateSubtitle}
      </p>

      <div className="mt-5 grid gap-4 @xl:grid-cols-2">
        <ClassCard estimate={estimate.classA} />
        <ClassCard estimate={estimate.classB} />
      </div>

      <div
        role="note"
        className="rounded-box border-warning/30 bg-warning/10 text-base-content/80 mt-5 border p-4 text-sm leading-relaxed"
      >
        {results.estimateWarning}
      </div>

      <div className="mt-5">
        <h4 className="text-base-content text-sm font-semibold">
          {results.minRuleTitle}
        </h4>
        <ul className="text-base-content/75 mt-2 space-y-2 text-sm">
          <li className="flex gap-2">
            <Dot />
            {estimate.singleUnitAllowed
              ? results.minRuleSingle
              : results.minRule2}
          </li>
          <li className="flex gap-2">
            <Dot />
            {results.mandatoryExit}
          </li>
          <li className="flex gap-2">
            <Dot />
            {results.abcNote}
          </li>
        </ul>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span
      className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
      aria-hidden="true"
    />
  );
}
