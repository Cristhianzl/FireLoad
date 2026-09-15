import { ReferenceList } from "@/components/ReferenceChip";
import { common } from "@/locales/pt-BR";

export function PageHeader({
  title,
  intro,
  refIds,
  updatedAt,
}: {
  title: string;
  intro?: string;
  refIds?: string[];
  updatedAt?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {intro && (
        <p className="text-base-content/70 mx-auto mt-4 max-w-2xl text-base leading-relaxed">
          {intro}
        </p>
      )}
      {updatedAt && (
        <p className="text-base-content/55 mt-3 text-sm">
          <time dateTime={updatedAt}>{common.updatedOn(updatedAt)}</time>
        </p>
      )}
      {refIds && refIds.length > 0 && (
        <div className="mt-5 flex justify-center">
          <ReferenceList refIds={refIds} />
        </div>
      )}
    </header>
  );
}
