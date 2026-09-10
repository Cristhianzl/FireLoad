import aliasesData from "@/data/occupancy-aliases.json";
import occupanciesData from "@/data/occupancies.json";
import { matchesQuery, normalize } from "@/lib/search";

export type Occupancy = {
  descricao: string;
  grupo: string;
  divisao: string;
  carga: number;
};

type Alias = { terms: string[]; match?: string; matchGroup?: string };

export const OCCUPANCIES: Occupancy[] = occupanciesData as Occupancy[];

const ALIASES = aliasesData as Alias[];

function aliasTermsFor(item: Occupancy): string {
  const descricao = normalize(item.descricao);
  const grupo = normalize(item.grupo);
  const extra: string[] = [];
  for (const alias of ALIASES) {
    const byName = alias.match && descricao.includes(normalize(alias.match));
    const byGroup =
      alias.matchGroup && grupo.includes(normalize(alias.matchGroup));
    if (byName || byGroup) extra.push(...alias.terms);
  }
  return extra.join(" ");
}

const INDEX = OCCUPANCIES.map((item) => ({
  item,
  text: `${item.descricao} ${item.grupo} ${item.divisao} ${aliasTermsFor(item)}`,
}));

export const OCCUPANCY_GROUPS: string[] = [
  ...new Set(OCCUPANCIES.map((item) => item.grupo)),
].sort((a, b) => a.localeCompare(b, "pt-BR"));

export function searchOccupancies(query: string, limit = 20): Occupancy[] {
  if (!query.trim()) return [];
  return INDEX.filter((entry) => matchesQuery(entry.text, query))
    .slice(0, limit)
    .map((entry) => entry.item);
}
