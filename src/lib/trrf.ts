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
// Same column order as the official Annex B table: deepest basement first.
export const TRRF_TABLE_CLASSES: HeightClass[] = [
  ...[...SUBSOLO_CLASSES].reverse(),
  ...HEIGHT_CLASSES,
];

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

export type TrrfCellValue =
  | { kind: "minutes"; minutes: number }
  | { kind: "see-item"; item: string }
  | { kind: "na" };

export function describeTrrfCell(cell: TrrfCell | undefined): TrrfCellValue {
  if (typeof cell === "number") return { kind: "minutes", minutes: cell };
  if (typeof cell === "string" && cell.startsWith("ver:")) {
    return { kind: "see-item", item: cell.slice(4) };
  }
  return { kind: "na" };
}

export function lookupTrrf(
  row: TrrfRow,
  placement: Placement,
  meters: number,
): TrrfResult {
  if (!(meters > 0)) return { status: "out-of-range" };
  const cls = classifyPlacement(placement, meters);
  if (!cls) return { status: "out-of-range" };
  const value = describeTrrfCell(row.trrf[cls.key]);
  const classInfo = { classKey: cls.key, classLabel: cls.label };
  if (value.kind === "minutes") {
    return { status: "ok", minutes: value.minutes, ...classInfo };
  }
  if (value.kind === "see-item") {
    return { status: "see-item", item: value.item, ...classInfo };
  }
  return { status: "na", ...classInfo };
}

export function findRowByCode(code: string): TrrfRow | undefined {
  return TRRF_ROWS.find((row) => row.codes.includes(code));
}
