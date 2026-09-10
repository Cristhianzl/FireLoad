import keywordsData from "@/data/division-keywords.json";

type KeywordGroup = { grupos: string[]; terms: string[] };

const GROUPS = keywordsData as KeywordGroup[];

export function keywordsForGrupo(grupo: string): string {
  return GROUPS.filter((entry) => entry.grupos.includes(grupo))
    .flatMap((entry) => entry.terms)
    .join(" ");
}
