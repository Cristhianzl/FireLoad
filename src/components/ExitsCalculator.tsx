"use client";

import { track } from "@vercel/analytics";
import { useId, useMemo, useState } from "react";
import { ReferenceList } from "@/components/ReferenceChip";
import {
  COMPONENTS,
  computeExits,
  EXITS_ROWS,
  populationFromArea,
  type Component,
  type ExitsResult,
  type ExitsRow,
} from "@/lib/exits";
import { keywordsForGrupo } from "@/lib/division-keywords";
import { formatNumber, parseDecimal } from "@/lib/format";
import { matchesQuery } from "@/lib/search";
import { exits } from "@/locales/pt-BR";

const COMPONENT_LABEL: Record<Component, string> = {
  acessos: exits.componentAcessos,
  escadas: exits.componentEscadas,
  portas: exits.componentPortas,
};

export function ExitsCalculator() {
  const searchFieldId = useId();
  const valueFieldId = useId();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ExitsRow | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ExitsResult | null>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return EXITS_ROWS.filter((row) =>
      matchesQuery(
        `${row.divisao} ${row.grupoLabel} ${row.codes.join(" ")} ${keywordsForGrupo(row.grupo)}`,
        query,
      ),
    ).slice(0, 12);
  }, [query]);

  const byArea = selected ? Boolean(selected.density) : true;

  function choose(row: ExitsRow) {
    setSelected(row);
    setQuery("");
    setValue("");
    setResult(null);
  }

  function reset() {
    setQuery("");
    setSelected(null);
    setValue("");
    setError(null);
    setResult(null);
  }

  function dimension() {
    if (!selected) {
      setError(exits.errorDivision);
      setResult(null);
      return;
    }
    const parsed = parseDecimal(value);
    if (!(parsed > 0)) {
      setError(byArea ? exits.errorArea : exits.errorPopulation);
      setResult(null);
      return;
    }
    const population = selected.density
      ? populationFromArea(selected.density, parsed)
      : Math.ceil(parsed);
    setError(null);
    setResult(computeExits(selected, population));
    track("calc_saidas", { grupo: selected.grupo });
  }

  return (
    <div className="space-y-6">
      <form
        className="rounded-box border-base-300 bg-base-100 border p-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          dimension();
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-base-content/70 text-sm">IT 11, Tabela 1</span>
          <ReferenceList refIds={["it11"]} />
        </div>

        <div className="relative mt-4">
          <label htmlFor={searchFieldId} className="block text-sm font-medium">
            {exits.divisionLabel}
          </label>
          <input
            id={searchFieldId}
            type="search"
            autoComplete="off"
            className="input input-bordered mt-1.5 w-full"
            placeholder={exits.divisionPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query.trim() !== "" && (
            <ul className="rounded-box border-base-300 bg-base-100 absolute inset-x-0 top-full z-30 mt-1 max-h-72 overflow-y-auto border shadow-lg">
              {suggestions.length === 0 && (
                <li className="text-base-content/60 px-3 py-3 text-sm">
                  {exits.noResults}
                </li>
              )}
              {suggestions.map((row) => (
                <li key={`${row.grupo}-${row.divisao}`}>
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
            <p>
              <span className="font-semibold">{selected.grupoLabel}</span>
              <span className="text-base-content/60">
                {" "}
                · {selected.divisao}
              </span>
            </p>
            <p className="text-base-content/70 mt-1">
              {exits.popRuleLabel}: {selected.popRule}
            </p>
          </div>
        )}

        <div className="mt-4">
          <label htmlFor={valueFieldId} className="block text-sm font-medium">
            {byArea
              ? `${exits.areaLabel} (m²)`
              : `${exits.populationLabel} (${exits.unitPeople})`}
          </label>
          <input
            id={valueFieldId}
            inputMode="decimal"
            className="input input-bordered mt-1.5 w-full"
            placeholder={
              byArea ? exits.areaPlaceholder : exits.populationPlaceholder
            }
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <p className="text-base-content/60 mt-1 text-xs">
            {byArea ? exits.areaHelp : exits.populationHelp}
          </p>
        </div>

        {error && (
          <p role="alert" className="text-error mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary flex-1 sm:flex-none">
            {exits.calculate}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset}>
            {exits.reset}
          </button>
        </div>
      </form>

      {result && selected ? (
        <div className="space-y-6">
          <div className="rounded-box border-base-300 bg-secondary text-secondary-content flex flex-col gap-4 border p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-secondary-content/60 text-sm font-medium tracking-wide uppercase">
                {exits.populationResult}
              </p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                <span className="readout-value font-display text-5xl font-bold sm:text-6xl">
                  {formatNumber(result.population)}
                </span>
                <span className="text-secondary-content/70 text-xl font-medium">
                  {exits.unitPeople}
                </span>
              </div>
            </div>
          </div>

          <section className="rounded-box border-base-300 bg-base-200/50 border p-5 sm:p-6">
            <div className="@container grid gap-4 sm:grid-cols-3">
              {COMPONENTS.map((component) => (
                <div
                  key={component}
                  className="rounded-box border-base-300 bg-base-100 border p-4"
                >
                  <p className="text-sm font-semibold">
                    {COMPONENT_LABEL[component]}
                  </p>
                  <p className="text-base-content/60 mt-1 text-xs">
                    {exits.capacityLabel}: {selected.cap[component]}
                  </p>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className="readout-value font-display text-base-content text-3xl font-bold">
                      {result.components[component].widthM.toLocaleString(
                        "pt-BR",
                        {
                          minimumFractionDigits: 2,
                        },
                      )}
                    </span>
                    <span className="text-base-content/60 text-sm">m</span>
                  </p>
                  <p className="text-base-content/60 mt-1 text-xs">
                    {result.components[component].units} {exits.unitsLabel}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base-content/60 mt-4 text-xs">
              {exits.unitWidthNote}
            </p>
            <div
              role="note"
              className="rounded-box border-warning/30 bg-warning/10 text-base-content/80 mt-4 border p-4 text-sm leading-relaxed"
            >
              {exits.warning}
            </div>
          </section>
        </div>
      ) : (
        <div className="rounded-box border-base-300 bg-base-200/40 text-base-content/60 flex min-h-40 items-center justify-center border border-dashed p-8 text-center text-sm">
          {exits.placeholder}
        </div>
      )}
    </div>
  );
}
