import referencesData from "@/data/references.json";

export type NormReference = {
  id: string;
  code: string;
  title: string;
  org: string;
  year: number;
  url: string;
};

export const REFERENCES = referencesData as Record<string, NormReference>;

export function getReference(id: string): NormReference {
  const ref = REFERENCES[id];
  if (!ref) {
    throw new Error(`Unknown normative reference: ${id}`);
  }
  return ref;
}
