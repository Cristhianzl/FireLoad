import materialsData from "@/data/materials.json";
import { matchesQuery, normalize } from "@/lib/search";

export type Material = { name: string; hi: number };

export const MATERIALS: Material[] = [...(materialsData as Material[])].sort(
  (a, b) => a.name.localeCompare(b.name, "pt-BR"),
);

export function findMaterial(name: string): Material | undefined {
  const target = normalize(name);
  return MATERIALS.find((material) => normalize(material.name) === target);
}

export function searchMaterials(query: string, limit = 12): Material[] {
  if (!query.trim()) return MATERIALS.slice(0, limit);
  return MATERIALS.filter((material) =>
    matchesQuery(material.name, query),
  ).slice(0, limit);
}
