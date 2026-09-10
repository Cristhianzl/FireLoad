import { describe, expect, it } from "vitest";
import {
  COMPONENTS,
  computeExits,
  EXITS_ROWS,
  findExitsRowByCode,
  populationFromArea,
  unitsOfPassage,
  UNIT_WIDTH_M,
  widthMeters,
  type ExitsRow,
} from "@/lib/exits";

function row(code: string): ExitsRow {
  const found = findExitsRowByCode(code);
  if (!found) throw new Error(`missing row ${code}`);
  return found;
}

describe("populationFromArea", () => {
  it("should apply one-person-per-N-square-meters densities", () => {
    expect(populationFromArea({ people: 1, perM2: 5 }, 1000)).toBe(200);
    expect(populationFromArea({ people: 1, perM2: 7 }, 700)).toBe(100);
  });

  it("should apply multiple-people-per-square-meter densities", () => {
    expect(populationFromArea({ people: 2, perM2: 1 }, 50)).toBe(100);
    expect(populationFromArea({ people: 3, perM2: 1 }, 10)).toBe(30);
    expect(populationFromArea({ people: 1, perM2: 1.5 }, 30)).toBe(20);
  });

  it("should round the population up", () => {
    expect(populationFromArea({ people: 1, perM2: 5 }, 101)).toBe(21);
  });

  it("should reject a non-positive area", () => {
    expect(() => populationFromArea({ people: 1, perM2: 5 }, 0)).toThrow();
  });
});

describe("unitsOfPassage and width", () => {
  it("should round the units of passage up", () => {
    expect(unitsOfPassage(200, 100)).toBe(2);
    expect(unitsOfPassage(201, 100)).toBe(3);
    expect(unitsOfPassage(20, 100)).toBe(1);
  });

  it("should return zero units for zero population", () => {
    expect(unitsOfPassage(0, 100)).toBe(0);
  });

  it("should convert units to metres at 0.55 m each", () => {
    expect(widthMeters(2)).toBe(1.1);
    expect(widthMeters(3)).toBeCloseTo(1.65, 2);
  });
});

describe("computeExits", () => {
  it("should size every egress component for a commercial floor", () => {
    const result = computeExits(row("C-1"), 200);
    expect(result.components.acessos).toEqual({ units: 2, widthM: 1.1 });
    expect(result.components.escadas).toEqual({ units: 3, widthM: 1.65 });
    expect(result.components.portas).toEqual({ units: 2, widthM: 1.1 });
  });

  it("should reject a non-positive population", () => {
    expect(() => computeExits(row("C-1"), 0)).toThrow();
  });
});

describe("exits dataset integrity", () => {
  it("should use the normative unit width", () => {
    expect(UNIT_WIDTH_M).toBe(0.55);
  });

  it("should give every row three positive capacities", () => {
    for (const r of EXITS_ROWS) {
      for (const component of COMPONENTS) {
        expect(r.cap[component]).toBeGreaterThan(0);
        expect(Number.isInteger(r.cap[component])).toBe(true);
      }
    }
  });

  it("should compute without throwing for every area-based row", () => {
    for (const r of EXITS_ROWS) {
      if (!r.density) continue;
      const population = populationFromArea(r.density, 500);
      expect(() => computeExits(r, population)).not.toThrow();
      expect(population).toBeGreaterThan(0);
    }
  });

  it("should expose unique division codes", () => {
    const codes = EXITS_ROWS.flatMap((r) => r.codes);
    expect(new Set(codes).size).toBe(codes.length);
  });
});
