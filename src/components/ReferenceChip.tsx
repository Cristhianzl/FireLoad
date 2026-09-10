import { getReference } from "@/lib/norms/references";
import { common } from "@/locales/pt-BR";

export function ReferenceChip({ refId }: { refId: string }) {
  const ref = getReference(refId);
  return (
    <a
      href={ref.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${ref.code} — ${ref.title}`}
      className="border-base-300 bg-base-100 text-base-content/70 hover:border-primary/40 hover:text-primary inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors"
    >
      <span className="text-base-content/50">{common.reference}:</span>
      {ref.code}
    </a>
  );
}

export function ReferenceList({ refIds }: { refIds: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {refIds.map((id) => (
        <ReferenceChip key={id} refId={id} />
      ))}
    </div>
  );
}
