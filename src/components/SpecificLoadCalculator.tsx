"use client";

import { track } from "@vercel/analytics";
import { useId, useMemo, useRef, useState } from "react";
import { EstimateResult } from "@/components/EstimateResult";
import { ReferenceList } from "@/components/ReferenceChip";
import { ResultReadout } from "@/components/ResultReadout";
import {
  classifyRisk,
  estimateExtinguishers,
  specificFireLoad,
  type ExtinguisherEstimate,
  type LoadItem,
} from "@/lib/engine";
import { formatNumber, parseDecimal } from "@/lib/format";
import { searchMaterials, type Material } from "@/lib/materials";
import type { RiskLevel } from "@/lib/norms/tables";
import { results, specific } from "@/locales/pt-BR";

type Row = { id: string; material: Material; mass: string };
type Result = { load: number; risk: RiskLevel; estimate: ExtinguisherEstimate };

export function SpecificLoadCalculator() {
  const areaFieldId = useId();
  const searchFieldId = useId();
  const nextRowId = useRef(0);
  const [area, setArea] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const chosen = new Set(rows.map((row) => row.material.name));
    return searchMaterials(query, 8).filter((m) => !chosen.has(m.name));
  }, [query, rows]);

  function addMaterial(material: Material) {
    nextRowId.current += 1;
    const id = `row-${nextRowId.current}`;
    setRows((prev) => [...prev, { id, material, mass: "" }]);
    setQuery("");
  }

  function updateMass(id: string, mass: string) {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, mass } : row)),
    );
  }

  function removeRow(id: string) {
    setRows((prev) => prev.filter((row) => row.id !== id));
  }

  function reset() {
    setArea("");
    setRows([]);
    setQuery("");
    setError(null);
    setResult(null);
  }

  function calculate() {
    const areaValue = parseDecimal(area);
    if (!(areaValue > 0)) {
      setError(specific.errorArea);
      setResult(null);
      return;
    }
    const items: LoadItem[] = rows
      .map((row) => ({ hi: row.material.hi, massKg: parseDecimal(row.mass) }))
      .filter((item) => item.massKg > 0);
    if (items.length === 0) {
      setError(specific.errorMaterials);
      setResult(null);
      return;
    }
    const load = specificFireLoad(items, areaValue);
    const risk = classifyRisk(load);
    setError(null);
    setResult({ load, risk, estimate: estimateExtinguishers(areaValue, risk) });
    track("calc_carga_especifica", { risk });
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
          <span className="rounded-field readout-value bg-base-200 text-base-content/80 px-3 py-1 text-sm">
            {specific.formula}
          </span>
          <ReferenceList refIds={["it14"]} />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={areaFieldId} className="block text-sm font-medium">
              {specific.areaLabel} ({specific.areaUnit})
            </label>
            <input
              id={areaFieldId}
              inputMode="decimal"
              className="input input-bordered mt-1.5 w-full"
              placeholder={specific.areaPlaceholder}
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
            <p className="text-base-content/60 mt-1 text-xs">
              {specific.areaHelp}
            </p>
          </div>

          <div className="relative">
            <label
              htmlFor={searchFieldId}
              className="block text-sm font-medium"
            >
              {specific.addMaterialLabel}
            </label>
            <input
              id={searchFieldId}
              type="search"
              autoComplete="off"
              className="input input-bordered mt-1.5 w-full"
              placeholder={specific.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query.trim() !== "" && (
              <ul className="rounded-box border-base-300 bg-base-100 absolute inset-x-0 top-full z-30 mt-1 max-h-64 overflow-y-auto border shadow-lg">
                {suggestions.length === 0 && (
                  <li className="text-base-content/60 px-3 py-3 text-sm">
                    {specific.noResults}
                  </li>
                )}
                {suggestions.map((material) => (
                  <li key={material.name}>
                    <button
                      type="button"
                      className="hover:bg-base-200 flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm"
                      onClick={() => addMaterial(material)}
                    >
                      <span>{material.name}</span>
                      <span className="readout-value text-base-content/60 shrink-0 text-xs">
                        {formatNumber(material.hi, material.hi % 1 ? 1 : 0)}{" "}
                        {specific.hiUnit}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-2">
          {rows.length === 0 ? (
            <p className="rounded-box border-base-300 text-base-content/60 border border-dashed px-4 py-6 text-center text-sm">
              {specific.emptyMaterials}
            </p>
          ) : (
            rows.map((row) => (
              <div
                key={row.id}
                className="rounded-box border-base-200 bg-base-200/40 flex items-center gap-3 border p-2 pl-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {row.material.name}
                  </p>
                  <p className="readout-value text-base-content/60 text-xs">
                    Hi{" "}
                    {formatNumber(row.material.hi, row.material.hi % 1 ? 1 : 0)}{" "}
                    {specific.hiUnit}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <input
                    inputMode="decimal"
                    aria-label={`${specific.massLabel} — ${row.material.name}`}
                    className="input input-bordered input-sm w-28"
                    placeholder={specific.massPlaceholder}
                    value={row.mass}
                    onChange={(event) => updateMass(row.id, event.target.value)}
                  />
                  <span className="text-base-content/60 text-xs">
                    {specific.massUnit}
                  </span>
                </div>
                <button
                  type="button"
                  aria-label={`${specific.remove} ${row.material.name}`}
                  className="btn btn-ghost btn-sm btn-square shrink-0"
                  onClick={() => removeRow(row.id)}
                >
                  <RemoveIcon />
                </button>
              </div>
            ))
          )}
        </div>

        {error && (
          <p role="alert" className="text-error mt-4 text-sm font-medium">
            {error}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="btn btn-primary flex-1 sm:flex-none">
            {specific.calculate}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset}>
            {specific.reset}
          </button>
        </div>
      </form>

      {result ? (
        <div className="space-y-6">
          <ResultReadout
            label={specific.resultTitle}
            load={result.load}
            risk={result.risk}
          />
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

function RemoveIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
