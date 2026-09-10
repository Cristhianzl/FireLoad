"use client";

import { track } from "@vercel/analytics";
import { useId, useMemo, useState } from "react";
import { ReferenceList } from "@/components/ReferenceChip";
import { parseDecimal } from "@/lib/format";
import { matchesQuery } from "@/lib/search";
import {
  lookupTrrf,
  TRRF_ROWS,
  type Placement,
  type TrrfResult,
  type TrrfRow,
} from "@/lib/trrf";
import { trrf } from "@/locales/pt-BR";

export function TrrfCalculator() {
  const searchFieldId = useId();
  const heightFieldId = useId();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<TrrfRow | null>(null);
  const [placement, setPlacement] = useState<Placement>("above");
  const [meters, setMeters] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TrrfResult | null>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return TRRF_ROWS.filter((row) =>
      matchesQuery(
        `${row.divisao} ${row.grupoLabel} ${row.codes.join(" ")}`,
        query,
      ),
    ).slice(0, 12);
  }, [query]);

  function choose(row: TrrfRow) {
    setSelected(row);
    setQuery("");
    setResult(null);
  }

  function reset() {
    setQuery("");
    setSelected(null);
    setPlacement("above");
    setMeters("");
    setError(null);
    setResult(null);
  }

  function calculate() {
    if (!selected) {
      setError(trrf.errorDivision);
      setResult(null);
      return;
    }
    const value = parseDecimal(meters);
    if (!(value > 0)) {
      setError(trrf.errorHeight);
      setResult(null);
      return;
    }
    setError(null);
    const outcome = lookupTrrf(selected, placement, value);
    setResult(outcome);
    track("calc_trrf", { grupo: selected.grupo, placement });
  }

  const label =
    placement === "subsolo"
      ? {
          text: trrf.subsoloLabel,
          help: trrf.subsoloHelp,
          ph: trrf.subsoloPlaceholder,
        }
      : {
          text: trrf.heightLabel,
          help: trrf.heightHelp,
          ph: trrf.heightPlaceholder,
        };

  return (
    <div className="space-y-6">
      <form
        className="rounded-box border-base-300 bg-base-100 border p-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          calculate();
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-base-content/70 text-sm">IT 08, Anexo B</span>
          <ReferenceList refIds={["it08", "nbr14432"]} />
        </div>

        <div className="relative mt-4">
          <label htmlFor={searchFieldId} className="block text-sm font-medium">
            {trrf.divisionLabel}
          </label>
          <input
            id={searchFieldId}
            type="search"
            autoComplete="off"
            className="input input-bordered mt-1.5 w-full"
            placeholder={trrf.divisionPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query.trim() !== "" && (
            <ul className="rounded-box border-base-300 bg-base-100 absolute inset-x-0 top-full z-30 mt-1 max-h-72 overflow-y-auto border shadow-lg">
              {suggestions.length === 0 && (
                <li className="text-base-content/60 px-3 py-3 text-sm">
                  {trrf.errorDivision}
                </li>
              )}
              {suggestions.map((row) => (
                <li key={row.divisao}>
                  <button
                    type="button"
                    className="hover:bg-base-200 flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm"
                    onClick={() => choose(row)}
                  >
                    <span className="min-w-0">
                      <span className="block truncate">{row.grupoLabel}</span>
                      <span className="text-base-content/55 block text-xs">
                        {row.divisao}
                      </span>
                    </span>
                    <span className="readout-value text-base-content/60 shrink-0 text-xs">
                      {row.grupo}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selected && (
          <div className="rounded-box border-primary/25 bg-primary/5 mt-4 border p-4 text-sm">
            <span className="font-semibold">{selected.grupoLabel}</span>
            <span className="text-base-content/60"> · {selected.divisao}</span>
          </div>
        )}

        <fieldset className="mt-4">
          <legend className="block text-sm font-medium">
            {trrf.placementLabel}
          </legend>
          <div className="mt-1.5 flex gap-2">
            {(
              [
                ["above", trrf.placementAbove],
                ["subsolo", trrf.placementSubsolo],
              ] as const
            ).map(([value, text]) => (
              <button
                key={value}
                type="button"
                aria-pressed={placement === value}
                onClick={() => setPlacement(value)}
                className={`btn btn-sm ${placement === value ? "btn-primary" : "btn-outline"}`}
              >
                {text}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-4">
          <label htmlFor={heightFieldId} className="block text-sm font-medium">
            {label.text} (m)
          </label>
          <input
            id={heightFieldId}
            inputMode="decimal"
            className="input input-bordered mt-1.5 w-full"
            placeholder={label.ph}
            value={meters}
            onChange={(event) => setMeters(event.target.value)}
          />
          <p className="text-base-content/60 mt-1 text-xs">{label.help}</p>
        </div>

        {error && (
          <p role="alert" className="text-error mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary flex-1 sm:flex-none">
            {trrf.calculate}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset}>
            {trrf.reset}
          </button>
        </div>
      </form>

      {result ? (
        <TrrfResultView result={result} />
      ) : (
        <div className="rounded-box border-base-300 bg-base-200/40 text-base-content/60 flex min-h-40 items-center justify-center border border-dashed p-8 text-center text-sm">
          {trrf.placeholder}
        </div>
      )}
    </div>
  );
}

function TrrfResultView({ result }: { result: TrrfResult }) {
  if (result.status === "ok") {
    return (
      <div className="space-y-4">
        <div className="rounded-box border-base-300 bg-secondary text-secondary-content flex flex-col gap-4 border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-secondary-content/60 text-sm font-medium tracking-wide uppercase">
              {trrf.resultTitle}
            </p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
              <span className="readout-value font-display text-5xl font-bold sm:text-6xl">
                {result.minutes}
              </span>
              <span className="text-secondary-content/70 text-xl font-medium">
                {trrf.resultUnit}
              </span>
            </div>
          </div>
          <span className="border-secondary-content/25 rounded-full border px-3 py-1 text-sm">
            {trrf.classLabel}: {result.classLabel}
          </span>
        </div>
        <NoteBox tone="warning">{trrf.warning}</NoteBox>
      </div>
    );
  }
  if (result.status === "see-item") {
    return (
      <NoteBox tone="info" title={trrf.seeItemTitle}>
        {trrf.seeItemText(result.item)}
      </NoteBox>
    );
  }
  if (result.status === "na") {
    return (
      <NoteBox tone="info" title={trrf.naTitle}>
        {trrf.naText}
      </NoteBox>
    );
  }
  return (
    <NoteBox tone="info" title={trrf.outOfRangeTitle}>
      {trrf.outOfRangeText}
    </NoteBox>
  );
}

function NoteBox({
  tone,
  title,
  children,
}: {
  tone: "warning" | "info";
  title?: string;
  children: React.ReactNode;
}) {
  const cls =
    tone === "warning"
      ? "border-warning/30 bg-warning/10"
      : "border-base-300 bg-base-200/60";
  return (
    <div
      role="note"
      className={`rounded-box text-base-content/80 border p-4 text-sm leading-relaxed ${cls}`}
    >
      {title && <p className="text-base-content font-semibold">{title}</p>}
      <p className={title ? "mt-1" : ""}>{children}</p>
    </div>
  );
}
