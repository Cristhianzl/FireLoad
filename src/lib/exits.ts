import exitsData from "@/data/exits.json";

export type Density = { people: number; perM2: number };
export type Capacity = { acessos: number; escadas: number; portas: number };

export type ExitsRow = {
  grupo: string;
  grupoLabel: string;
  divisao: string;
  codes: string[];
  popRule: string;
  density: Density | null;
  cap: Capacity;
};

export const EXITS_ROWS = exitsData.rows as ExitsRow[];
export const UNIT_WIDTH_M = exitsData.unitWidthM as number;
export const EXITS_SOURCE = exitsData.source as string;

export type Component = "acessos" | "escadas" | "portas";
export const COMPONENTS: Component[] = ["acessos", "escadas", "portas"];

export type ComponentResult = { units: number; widthM: number };
export type ExitsResult = {
  population: number;
  components: Record<Component, ComponentResult>;
};

export function populationFromArea(density: Density, areaM2: number): number {
  if (!(areaM2 > 0)) throw new Error("Area must be greater than zero.");
  return Math.ceil((areaM2 * density.people) / density.perM2);
}

export function unitsOfPassage(population: number, capacity: number): number {
  if (!(population > 0)) return 0;
  return Math.ceil(population / capacity);
}

export function widthMeters(units: number): number {
  return Math.round(units * UNIT_WIDTH_M * 100) / 100;
}

export function computeExits(row: ExitsRow, population: number): ExitsResult {
  if (!(population > 0)) {
    throw new Error("Population must be greater than zero.");
  }
  const components = {} as Record<Component, ComponentResult>;
  for (const component of COMPONENTS) {
    const units = unitsOfPassage(population, row.cap[component]);
    components[component] = { units, widthM: widthMeters(units) };
  }
  return { population, components };
}

export function findExitsRowByCode(code: string): ExitsRow | undefined {
  return EXITS_ROWS.find((row) => row.codes.includes(code));
}
