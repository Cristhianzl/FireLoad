import type { RiskLevel } from "@/lib/norms/tables";
import { risk as riskCopy } from "@/locales/pt-BR";

const STYLES: Record<RiskLevel, string> = {
  low: "bg-success/12 text-success border-success/30",
  medium: "bg-warning/12 text-warning border-warning/30",
  high: "bg-error/12 text-error border-error/30",
};

const DOT: Record<RiskLevel, string> = {
  low: "bg-success",
  medium: "bg-warning",
  high: "bg-error",
};

export function RiskBadge({
  risk,
  showRange = false,
}: {
  risk: RiskLevel;
  showRange?: boolean;
}) {
  const copy = riskCopy[risk];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${STYLES[risk]}`}
    >
      <span className={`size-2 rounded-full ${DOT[risk]}`} aria-hidden="true" />
      {copy.label}
      {showRange && (
        <span className="font-normal opacity-70">· {copy.range}</span>
      )}
    </span>
  );
}
