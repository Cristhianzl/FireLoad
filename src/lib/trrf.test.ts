import { describe, expect, it } from "vitest";
import {
  classifyPlacement,
  findRowByCode,
  HEIGHT_CLASSES,
  lookupTrrf,
  SUBSOLO_CLASSES,
  TRRF_ROWS,
  type TrrfRow,
} from "@/lib/trrf";

const ALLOWED = new Set([30, 60, 90, 120, 150, 180]);

function row(code: string): TrrfRow {
  const found = findRowByCode(code);
  if (!found) throw new Error(`missing row ${code}`);
  return found;
}

describe("classifyPlacement", () => {
  it("should map building heights to the right P class at the boundaries", () => {
    expect(classifyPlacement("above", 6)?.key).toBe("p1");
    expect(classifyPlacement("above", 6.01)?.key).toBe("p2");
    expect(classifyPlacement("above", 23)?.key).toBe("p3");
    expect(classifyPlacement("above", 30)?.key).toBe("p4");
    expect(classifyPlacement("above", 80)?.key).toBe("p5");
    expect(classifyPlacement("above", 250)?.key).toBe("p8");
  });

  it("should map basement depth to S classes at the boundary", () => {
    expect(classifyPlacement("subsolo", 10)?.key).toBe("s1");
    expect(classifyPlacement("subsolo", 10.01)?.key).toBe("s2");
  });

  it("should return undefined above the tabulated range", () => {
    expect(classifyPlacement("above", 250.01)).toBeUndefined();
  });
});

describe("lookupTrrf", () => {
  it("should return the tabulated minutes for a residential building", () => {
    expect(lookupTrrf(row("A-1"), "above", 5)).toMatchObject({
      status: "ok",
      minutes: 30,
    });
    expect(lookupTrrf(row("A-1"), "above", 100)).toMatchObject({
      status: "ok",
      minutes: 120,
    });
  });

  it("should return the basement values", () => {
    expect(lookupTrrf(row("A-1"), "subsolo", 5)).toMatchObject({
      status: "ok",
      minutes: 60,
    });
    expect(lookupTrrf(row("A-1"), "subsolo", 15)).toMatchObject({
      status: "ok",
      minutes: 90,
    });
  });

  it("should flag cells that refer to a specific item", () => {
    expect(lookupTrrf(row("F-3"), "above", 5)).toMatchObject({
      status: "see-item",
      item: "A.2.3.3",
    });
    expect(lookupTrrf(row("J-1"), "above", 5)).toMatchObject({
      status: "see-item",
      item: "A.2.3.4",
    });
  });

  it("should report not-applicable for blank cells", () => {
    expect(lookupTrrf(row("I-1"), "above", 100).status).toBe("na");
    expect(lookupTrrf(row("L-1"), "above", 10).status).toBe("na");
  });

  it("should reject non-positive or out-of-range heights", () => {
    expect(lookupTrrf(row("A-1"), "above", 0).status).toBe("out-of-range");
    expect(lookupTrrf(row("A-1"), "above", -3).status).toBe("out-of-range");
    expect(lookupTrrf(row("A-1"), "above", 300).status).toBe("out-of-range");
  });
});

describe("TRRF dataset integrity", () => {
  it("should expose the expected number of classes", () => {
    expect(HEIGHT_CLASSES).toHaveLength(8);
    expect(SUBSOLO_CLASSES).toHaveLength(2);
  });

  it("should only contain allowed values in every cell", () => {
    for (const r of TRRF_ROWS) {
      const keys = Object.keys(r.trrf);
      expect(keys).toHaveLength(10);
      for (const cell of Object.values(r.trrf)) {
        if (typeof cell === "number") {
          expect(ALLOWED.has(cell)).toBe(true);
        } else if (typeof cell === "string") {
          expect(cell.startsWith("ver:")).toBe(true);
        } else {
          expect(cell).toBeNull();
        }
      }
    }
  });

  it("should never throw across every row and class combination", () => {
    for (const r of TRRF_ROWS) {
      for (const cls of HEIGHT_CLASSES) {
        expect(() =>
          lookupTrrf(r, "above", (cls.min + cls.max) / 2),
        ).not.toThrow();
      }
      for (const cls of SUBSOLO_CLASSES) {
        const meters = cls.max > 100 ? cls.min + 5 : (cls.min + cls.max) / 2;
        expect(() => lookupTrrf(r, "subsolo", meters)).not.toThrow();
      }
    }
  });

  it("should give every division a unique lookup by code", () => {
    const codes = TRRF_ROWS.flatMap((r) => r.codes);
    expect(new Set(codes).size).toBe(codes.length);
  });
});
