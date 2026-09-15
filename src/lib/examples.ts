import { classifyRisk, estimateExtinguishers } from "@/lib/engine";
import {
  computeExits,
  findExitsRowByCode,
  GENERAL_MIN_WIDTH_M,
  populationFromArea,
} from "@/lib/exits";
import { OCCUPANCIES } from "@/lib/occupancies";
import { findStorageRow, storageLoad } from "@/lib/storage";
import { classifyPlacement, findRowByCode, lookupTrrf } from "@/lib/trrf";

// Worked examples are computed by the same engine the calculators use, so the
// published numbers can never drift from the tool's real output.

export function required<T>(value: T | undefined, label: string): T {
  if (value === undefined) {
    throw new Error(`Worked example data is missing: ${label}`);
  }
  return value;
}

export function extinguisherExample() {
  const description =
    "Serviços combinados de escritório e apoio administrativo"; // i18n-ok: dataset key
  const occupancy = required(
    OCCUPANCIES.find((item) => item.descricao === description),
    description,
  );
  const areaM2 = 450;
  const risk = classifyRisk(occupancy.carga);
  return {
    occupancy,
    areaM2,
    risk,
    estimate: estimateExtinguishers(areaM2, risk),
  };
}

export function storageExample() {
  const row = required(findStorageRow("Papel"), "Papel");
  const heightM = 3;
  const areaM2 = 1500;
  const result = storageLoad(row, heightM);
  if (result.status !== "ok") {
    throw new Error("Storage example height must be inside the table.");
  }
  const lowerIndex = 1;
  const risk = classifyRisk(result.load);
  return {
    row,
    heightM,
    areaM2,
    lower: { heightM: 2, load: row.loads[lowerIndex] },
    upper: { heightM: 4, load: row.loads[lowerIndex + 1] },
    load: result.load,
    risk,
    estimate: estimateExtinguishers(areaM2, risk),
  };
}

export function trrfExample() {
  const row = required(findRowByCode("D-1"), "D-1");
  const heightM = 18;
  const heightClass = required(classifyPlacement("above", heightM), "class");
  const result = lookupTrrf(row, "above", heightM);
  if (result.status !== "ok") {
    throw new Error("TRRF example must resolve to a tabulated value.");
  }
  return { row, heightM, heightClass, minutes: result.minutes };
}

export function exitsExample() {
  const row = required(findExitsRowByCode("C-2"), "C-2");
  const areaM2 = 1000;
  const density = required(row.density ?? undefined, "C-2 density");
  const population = populationFromArea(density, areaM2);
  return {
    row,
    areaM2,
    density,
    minWidthM: GENERAL_MIN_WIDTH_M,
    ...computeExits(row, population),
  };
}

export type ExtinguisherExample = ReturnType<typeof extinguisherExample>;
export type StorageExample = ReturnType<typeof storageExample>;
export type TrrfExample = ReturnType<typeof trrfExample>;
export type ExitsExample = ReturnType<typeof exitsExample>;
