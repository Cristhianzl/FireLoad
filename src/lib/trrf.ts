import trrfData from "@/data/trrf.json";

export type TrrfCell = number | null | string;

export type TrrfRow = {
  grupo: string;
  grupoLabel: string;
  divisao: string;
  codes: string[];
  trrf: Record<string, TrrfCell>;
};

export type HeightClass = {
  key: string;
  label: string;
  range: string;
  min: number;
  max: number;
};

export const TRRF_ROWS = trrfData.rows as TrrfRow[];
export const HEIGHT_CLASSES = trrfData.heightClasses as HeightClass[];
export const SUBSOLO_CLASSES = trrfData.subsoloClasses as HeightClass[];
export const TRRF_SOURCE = trrfData.source as string;

export type Placement = "above" | "subsolo";

export type TrrfResult =
  | { status: "ok"; minutes: number; classKey: string; classLabel: string }
  | { status: "na"; classKey: string; classLabel: string }
  | { status: "see-item"; item: string; classKey: string; classLabel: string }
  | { status: "out-of-range" };

function classForHeight(h: number): HeightClass | undefined {
  return HEIGHT_CLASSES.find((c) => h > c.min && h <= c.max);
}

function classForSubsolo(hs: number): HeightClass | undefined {
  return SUBSOLO_CLASSES.find((c) => hs > c.min && hs <= c.max);
}

export function classifyPlacement(
  placement: Placement,
  meters: number,
): HeightClass | undefined {
  return placement === "subsolo"
    ? classForSubsolo(meters)
    : classForHeight(meters);
}

export function lookupTrrf(
  row: TrrfRow,
  placement: Placement,
  meters: number,
): TrrfResult {
  if (!(meters > 0)) return { status: "out-of-range" };
  const cls = classifyPlacement(placement, meters);
  if (!cls) return { status: "out-of-range" };
  const cell = row.trrf[cls.key];
  if (typeof cell === "number") {
    return {
      status: "ok",
      minutes: cell,
      classKey: cls.key,
      classLabel: cls.label,
    };
  }
  if (typeof cell === "string" && cell.startsWith("ver:")) {
    return {
      status: "see-item",
      item: cell.slice(4),
      classKey: cls.key,
      classLabel: cls.label,
    };
  }
  return { status: "na", classKey: cls.key, classLabel: cls.label };
}

export function findRowByCode(code: string): TrrfRow | undefined {
  return TRRF_ROWS.find((row) => row.codes.includes(code));
}
