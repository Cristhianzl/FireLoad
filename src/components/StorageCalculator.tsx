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
import type { RiskLevel } from "@/lib/norms/tables";
import {
  searchStorage,
  STORAGE_HEIGHTS_M,
  storageLoad,
  type StorageRow,
} from "@/lib/storage";
import { results, storage } from "@/locales/pt-BR";

type Result = {
  load: number;
  risk: RiskLevel;
  note: string;
  estimate: ExtinguisherEstimate;
};

type Outcome = { error: string } | { result: Result };

function evaluate(
  selected: StorageRow | null,
  heightInput: string,
  areaInput: string,
): Outcome {
  if (!selected) return { error: storage.errorSelect };
  const height = parseDecimal(heightInput);
  const lookup = storageLoad(selected, height);
  if (lookup.status !== "ok") return { error: storage.errorHeight };
  const area = parseDecimal(areaInput);
  if (!(area > 0)) return { error: storage.errorArea };
  const risk = classifyRisk(lookup.load);
  const note = lookup.interpolated
    ? storage.interpolatedNote(formatNumber(height, 1))
    : storage.exactNote;
  return {
    result: {
      load: lookup.load,
      risk,
      note,
      estimate: estimateExtinguishers(area, risk),
    },
  };
}

export function StorageCalculator() {
  const searchFieldId = useId();
  const heightFieldId = useId();
  const heightHelpId = useId();
  const areaFieldId = useId();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<StorageRow | null>(null);
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const suggestions = useMemo(() => searchStorage(query, 20), [query]);

  function choose(row: StorageRow) {
    setSelected(row);
    setQuery("");
    setResult(null);
  }

  function reset() {
    setQuery("");
    setSelected(null);
    setHeight("");
    setArea("");
    setError(null);
    setResult(null);
  }

  function calculate() {
    const outcome = evaluate(selected, height, area);
    if ("error" in outcome) {
      setError(outcome.error);
      setResult(null);
      return;
    }
    setError(null);
    setResult(outcome.result);
    track("calc_deposito", { risk: outcome.result.risk });
  }

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
          <span className="text-base-content/70 text-sm">{storage.hint}</span>
          <ReferenceList refIds={["it14"]} />
        </div>

        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          <div className="relative sm:col-span-3">
            <label
              htmlFor={searchFieldId}
              className="block text-sm font-medium"
            >
              {storage.searchLabel}
            </label>
            <input
              id={searchFieldId}
              type="search"
              autoComplete="off"
              className="input input-bordered mt-1.5 w-full"
              placeholder={storage.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query.trim() !== "" && (
              <ul className="rounded-box border-base-300 bg-base-100 absolute inset-x-0 top-full z-30 mt-1 max-h-72 overflow-y-auto border shadow-lg">
                {suggestions.length === 0 && (
                  <li className="text-base-content/60 px-3 py-3 text-sm">
                    {storage.noResults}
                  </li>
                )}
                {suggestions.map((row) => (
                  <li key={row.material}>
                    <button
                      type="button"
                      className="hover:bg-base-200 flex min-h-11 w-full items-center px-3 py-2 text-left text-sm"
                      onClick={() => choose(row)}
                    >
                      {row.material}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label
              htmlFor={heightFieldId}
              className="block text-sm font-medium"
            >
              {storage.heightLabel} ({storage.heightUnit})
            </label>
            <input
              id={heightFieldId}
              inputMode="decimal"
              aria-describedby={heightHelpId}
              className="input input-bordered mt-1.5 w-full"
              placeholder={storage.heightPlaceholder}
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
            <p id={heightHelpId} className="text-base-content/55 mt-1 text-xs">
              {storage.heightHelp}
            </p>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={areaFieldId} className="block text-sm font-medium">
              {storage.areaLabel} ({storage.areaUnit})
            </label>
            <input
              id={areaFieldId}
              inputMode="decimal"
              className="input input-bordered mt-1.5 w-full"
              placeholder={storage.areaPlaceholder}
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </div>
        </div>

        {selected && (
          <div className="rounded-box border-primary/25 bg-primary/5 mt-4 border p-4">
            <p className="text-sm font-semibold">{storage.selectedLabel}</p>
            <p className="mt-1 text-sm">{selected.material}</p>
            <p className="text-base-content/55 mt-3 text-xs">
              {storage.tableValuesLabel}
            </p>
            <dl className="mt-1 grid grid-cols-3 gap-2 text-xs sm:grid-cols-6">
              {STORAGE_HEIGHTS_M.map((meters, index) => (
                <div key={meters}>
                  <dt className="text-base-content/55">{meters} m</dt>
                  <dd className="readout-value font-semibold">
                    {formatNumber(selected.loads[index])}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {error && (
          <p role="alert" className="text-error mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary flex-1 sm:flex-none">
            {storage.calculate}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset}>
            {storage.reset}
          </button>
        </div>
      </form>

      {result ? (
        <div className="space-y-6">
          <ResultReadout
            label={storage.resultLabel}
            load={result.load}
            risk={result.risk}
          />
          <p className="text-base-content/65 text-sm">{result.note}</p>
          <EstimateResult estimate={result.estimate} />
        </div>
      ) : (
        <div className="rounded-box border-base-300 bg-base-200/40 text-base-content/60 flex min-h-40 items-center justify-center border border-dashed p-8 text-center text-sm">
          {results.placeholder}
        </div>
      )}
    </div>
  );
}
