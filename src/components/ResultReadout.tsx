import { RiskBadge } from "@/components/RiskBadge";
import { formatNumber } from "@/lib/format";
import type { RiskLevel } from "@/lib/norms/tables";

export function ResultReadout({
  label,
  load,
  risk,
}: {
  label: string;
  load: number;
  risk: RiskLevel;
}) {
  return (
    <div className="rounded-box border-base-300 bg-secondary text-secondary-content flex flex-col gap-4 border p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-secondary-content/60 text-sm font-medium tracking-wide uppercase">
          {label}
        </p>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
          <span className="readout-value font-display text-5xl font-bold sm:text-6xl">
            {formatNumber(load, load < 100 ? 1 : 0)}
          </span>
          <span className="text-secondary-content/70 text-xl font-medium">
            MJ/m²
          </span>
        </div>
      </div>
      <div className="shrink-0">
        <RiskBadge risk={risk} showRange />
      </div>
    </div>
  );
}
