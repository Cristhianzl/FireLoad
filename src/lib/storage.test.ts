import { describe, expect, it } from "vitest";
import {
  findStorageRow,
  searchStorage,
  STORAGE_HEIGHTS_M,
  STORAGE_ROWS,
  storageLoad,
} from "@/lib/storage";

function row(material: string) {
  const found = findStorageRow(material);
  if (!found) throw new Error(`Missing ${material}`);
  return found;
}

describe("storage load table (IT 14/2025 Annex B)", () => {
  it("should contain every material row of the annex", () => {
    expect(STORAGE_ROWS).toHaveLength(90);
  });

  it("should tabulate the six official storage heights", () => {
    expect(STORAGE_HEIGHTS_M).toEqual([1, 2, 4, 6, 8, 10]);
  });

  it("should keep every row proportional to height within rounding", () => {
    for (const item of STORAGE_ROWS) {
      const perMeter = item.loads[item.loads.length - 1] / 10;
      STORAGE_HEIGHTS_M.forEach((height, index) => {
        expect(
          Math.abs(item.loads[index] - perMeter * height),
        ).toBeLessThanOrEqual(1);
      });
    }
  });

  it("should read an exact height straight from the table", () => {
    expect(storageLoad(row("Açúcar"), 1)).toEqual({
      status: "ok",
      load: 3780,
      interpolated: false,
    });
  });

  it("should interpolate linearly between neighbouring heights", () => {
    expect(storageLoad(row("Papel"), 3)).toEqual({
      status: "ok",
      load: 11340,
      interpolated: true,
    });
  });

  it("should accept the last tabulated height", () => {
    expect(storageLoad(row("Pneus"), 10)).toMatchObject({ load: 8100 });
  });

  it.each([0.5, 10.5, Number.NaN, -1])(
    "should refuse height %s outside the table",
    (height) => {
      expect(storageLoad(row("Papel"), height)).toEqual({
        status: "out-of-range",
      });
    },
  );

  it("should find materials by accent-insensitive search", () => {
    const names = searchStorage("papel").map((item) => item.material);
    expect(names).toEqual(
      expect.arrayContaining(["Papel", "Papel prensado", "Sacos de papel"]),
    );
  });

  it("should return a capped list for an empty query", () => {
    expect(searchStorage("")).toHaveLength(12);
  });

  it("should return undefined for an unknown material", () => {
    expect(findStorageRow("Vibranium")).toBeUndefined();
  });
});
