import storageData from "@/data/storage.json";
import { matchesQuery } from "@/lib/search";

export type StorageRow = { material: string; loads: number[] };

export type StorageLoadResult =
  | { status: "ok"; load: number; interpolated: boolean }
  | { status: "out-of-range" };

export const STORAGE_HEIGHTS_M = storageData.heightsM as number[];
export const STORAGE_SOURCE = storageData.source as string;
export const STORAGE_ROWS: StorageRow[] = [
  ...(storageData.rows as StorageRow[]),
].sort((a, b) => a.material.localeCompare(b.material, "pt-BR"));

export const STORAGE_MIN_HEIGHT_M = STORAGE_HEIGHTS_M[0];
export const STORAGE_MAX_HEIGHT_M =
  STORAGE_HEIGHTS_M[STORAGE_HEIGHTS_M.length - 1];

// IT 14/2025 Anexo B allows linear interpolation between tabulated heights,
// but gives no value below the first or above the last column.
export function storageLoad(
  row: StorageRow,
  heightM: number,
): StorageLoadResult {
  if (!(heightM >= STORAGE_MIN_HEIGHT_M) || heightM > STORAGE_MAX_HEIGHT_M) {
    return { status: "out-of-range" };
  }
  const exact = STORAGE_HEIGHTS_M.indexOf(heightM);
  if (exact >= 0) {
    return { status: "ok", load: row.loads[exact], interpolated: false };
  }
  const upper = STORAGE_HEIGHTS_M.findIndex((h) => h > heightM);
  const lower = upper - 1;
  const span = STORAGE_HEIGHTS_M[upper] - STORAGE_HEIGHTS_M[lower];
  const ratio = (heightM - STORAGE_HEIGHTS_M[lower]) / span;
  const load = row.loads[lower] + ratio * (row.loads[upper] - row.loads[lower]);
  return { status: "ok", load, interpolated: true };
}

export function findStorageRow(material: string): StorageRow | undefined {
  return STORAGE_ROWS.find((row) => row.material === material);
}

export function searchStorage(query: string, limit = 12): StorageRow[] {
  if (!query.trim()) return STORAGE_ROWS.slice(0, limit);
  return STORAGE_ROWS.filter((row) => matchesQuery(row.material, query)).slice(
    0,
    limit,
  );
}
