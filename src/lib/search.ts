export function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function matchesQuery(haystack: string, query: string): boolean {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const target = normalize(haystack);
  return terms.every((term) => target.includes(term));
}
