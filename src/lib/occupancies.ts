import occupanciesData from "@/data/occupancies.json";
import { matchesQuery } from "@/lib/search";

export type Occupancy = {
  descricao: string;
  grupo: string;
  divisao: string;
  carga: number;
};

export const OCCUPANCIES: Occupancy[] = occupanciesData as Occupancy[];

export const OCCUPANCY_GROUPS: string[] = [
  ...new Set(OCCUPANCIES.map((item) => item.grupo)),
].sort((a, b) => a.localeCompare(b, "pt-BR"));

export function searchOccupancies(query: string, limit = 20): Occupancy[] {
  if (!query.trim()) return [];
  return OCCUPANCIES.filter((item) =>
    matchesQuery(`${item.descricao} ${item.grupo} ${item.divisao}`, query),
  ).slice(0, limit);
}
