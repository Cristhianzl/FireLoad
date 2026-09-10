"use client";

import { track } from "@vercel/analytics";
import { useId, useMemo, useState } from "react";
import { EstimateResult } from "@/components/EstimateResult";
import { ReferenceList } from "@/components/ReferenceChip";
import { ResultReadout } from "@/components/ResultReadout";
import {
  classifyRisk,
  estimateExtinguishers,
  type ExtinguisherEstimate,
} from "@/lib/engine";
import { formatNumber, parseDecimal } from "@/lib/format";
import { searchOccupancies, type Occupancy } from "@/lib/occupancies";
import type { RiskLevel } from "@/lib/norms/tables";
import { occupancy, results } from "@/locales/pt-BR";

type Result = { load: number; risk: RiskLevel; estimate: ExtinguisherEstimate };

export function OccupancyCalculator() {
  const searchFieldId = useId();
  const areaFieldId = useId();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Occupancy | null>(null);
  const [area, setArea] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const suggestions = useMemo(() => searchOccupancies(query, 20), [query]);

  function choose(item: Occupancy) {
    setSelected(item);
    setQuery("");
    setResult(null);
  }

  function reset() {
    setQuery("");
    setSelected(null);
    setArea("");
    setError(null);
    setResult(null);
  }

  function calculate() {
    if (!selected) {
      setError(occupancy.errorSelect);
      setResult(null);
      return;
    }
    const areaValue = parseDecimal(area);
    if (!(areaValue > 0)) {
      setError(occupancy.errorArea);
      setResult(null);
      return;
    }
    const load = selected.carga;
    const risk = classifyRisk(load);
    setError(null);
    setResult({ load, risk, estimate: estimateExtinguishers(areaValue, risk) });
    track("calc_ocupacao", { risk, division: selected.divisao });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <form
        className="rounded-box border-base-300 bg-base-100 border p-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          calculate();
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-base-content/70 text-sm">{occupancy.hint}</span>
          <ReferenceList refIds={["it14"]} />
        </div>

        <div className="mt-4">
          <label htmlFor={searchFieldId} className="block text-sm font-medium">
            {occupancy.searchLabel}
          </label>
          <input
            id={searchFieldId}
            type="search"
            autoComplete="off"
            className="input input-bordered mt-1.5 w-full"
            placeholder={occupancy.searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query.trim() !== "" && (
            <ul className="rounded-box border-base-300 mt-2 max-h-64 overflow-y-auto border">
              {suggestions.length === 0 && (
                <li className="text-base-content/60 px-3 py-3 text-sm">
                  {occupancy.noResults}
                </li>
              )}
              {suggestions.map((item, index) => (
                <li key={`${item.divisao}-${item.descricao}-${index}`}>
                  <button
                    type="button"
                    className="hover:bg-base-200 flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm"
                    onClick={() => choose(item)}
                  >
                    <span className="min-w-0">
                      <span className="block truncate">{item.descricao}</span>
                      <span className="text-base-content/55 block text-xs">
                        {item.grupo} · {item.divisao}
                      </span>
                    </span>
                    <span className="readout-value text-base-content/60 shrink-0 text-xs">
                      {formatNumber(item.carga)} MJ/m²
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selected && (
          <div className="rounded-box border-primary/25 bg-primary/5 mt-4 border p-4">
            <p className="text-sm font-semibold">{occupancy.selectedLabel}</p>
            <p className="mt-1 text-sm">{selected.descricao}</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
              <span>
                <span className="text-base-content/55 block">
                  {occupancy.groupLabel}
                </span>
                {selected.grupo}
              </span>
              <span>
                <span className="text-base-content/55 block">
                  {occupancy.divisionLabel}
                </span>
                {selected.divisao}
              </span>
              <span>
                <span className="text-base-content/55 block">
                  {occupancy.loadLabel}
                </span>
                <span className="readout-value font-semibold">
                  {formatNumber(selected.carga)} MJ/m²
                </span>
              </span>
            </div>
          </div>
        )}

        <div className="mt-4">
          <label htmlFor={areaFieldId} className="block text-sm font-medium">
            {occupancy.areaLabel} ({occupancy.areaUnit})
          </label>
          <input
            id={areaFieldId}
            inputMode="decimal"
            className="input input-bordered mt-1.5 w-full"
            placeholder={occupancy.areaPlaceholder}
            value={area}
            onChange={(event) => setArea(event.target.value)}
          />
        </div>

        {error && (
          <p role="alert" className="text-error mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary flex-1 sm:flex-none">
            {occupancy.calculate}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset}>
            {occupancy.reset}
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {result ? (
          <>
            <ResultReadout
              label={occupancy.loadLabel}
              load={result.load}
              risk={result.risk}
            />
            <EstimateResult estimate={result.estimate} />
          </>
        ) : (
          <div className="rounded-box border-base-300 bg-base-200/40 text-base-content/60 flex h-full min-h-64 items-center justify-center border border-dashed p-8 text-center text-sm">
            {results.placeholder}
          </div>
        )}
      </div>
    </div>
  );
}
