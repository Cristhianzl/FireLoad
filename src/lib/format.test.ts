import { describe, expect, it } from "vitest";
import { formatLoad, formatNumber, parseDecimal } from "@/lib/format";

describe("formatNumber", () => {
  it("should format integers with no decimals by default", () => {
    expect(formatNumber(1256)).toBe("1.256");
  });

  it("should keep the requested number of decimals", () => {
    expect(formatNumber(680.5, 1)).toBe("680,5");
  });
});

describe("formatLoad", () => {
  it("should append the fire load unit with one decimal", () => {
    expect(formatLoad(2080)).toBe("2.080,0 MJ/m²");
  });
});

describe("parseDecimal", () => {
  it("should accept dot and comma decimals", () => {
    expect(parseDecimal("446.24")).toBeCloseTo(446.24, 2);
    expect(parseDecimal("446,24")).toBeCloseTo(446.24, 2);
  });

  it("should ignore surrounding spaces", () => {
    expect(parseDecimal("  750 ")).toBe(750);
  });

  it("should return NaN for an empty string", () => {
    expect(Number.isNaN(parseDecimal(""))).toBe(true);
  });
});
