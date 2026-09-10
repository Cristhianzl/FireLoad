import { describe, expect, it } from "vitest";
import {
  classifyRisk,
  coverageAreaM2,
  estimateCount,
  estimateExtinguishers,
  specificFireLoad,
} from "@/lib/engine";

describe("classifyRisk", () => {
  it("should return low when load is at or below 300", () => {
    expect(classifyRisk(0)).toBe("low");
    expect(classifyRisk(300)).toBe("low");
  });

  it("should return medium when load is above 300 and up to 1200", () => {
    expect(classifyRisk(300.01)).toBe("medium");
    expect(classifyRisk(680)).toBe("medium");
    expect(classifyRisk(1200)).toBe("medium");
  });

  it("should return high when load is above 1200", () => {
    expect(classifyRisk(1200.01)).toBe("high");
    expect(classifyRisk(2080)).toBe("high");
  });
});

describe("specificFireLoad", () => {
  it("should reproduce the paper-warehouse example from the reference thesis", () => {
    const load = specificFireLoad([{ hi: 17, massKg: 60000 }], 1500);
    expect(load).toBeCloseTo(680, 6);
  });

  it("should sum every material contribution over the floor area", () => {
    const load = specificFireLoad(
      [
        { hi: 17, massKg: 1000 },
        { hi: 43, massKg: 500 },
      ],
      100,
    );
    expect(load).toBeCloseTo((17 * 1000 + 43 * 500) / 100, 6);
  });

  it("should treat negative mass as zero", () => {
    const load = specificFireLoad([{ hi: 50, massKg: -10 }], 100);
    expect(load).toBe(0);
  });

  it("should throw when the area is not positive", () => {
    expect(() => specificFireLoad([{ hi: 17, massKg: 10 }], 0)).toThrow();
    expect(() => specificFireLoad([{ hi: 17, massKg: 10 }], -5)).toThrow();
  });
});

describe("coverageAreaM2", () => {
  it("should equal the full circle area for free access", () => {
    expect(coverageAreaM2(20, "free")).toBeCloseTo(Math.PI * 400, 6);
  });

  it("should reduce the area to half for few obstacles and a tenth for many", () => {
    expect(coverageAreaM2(20, "few")).toBeCloseTo(Math.PI * 400 * 0.5, 6);
    expect(coverageAreaM2(20, "many")).toBeCloseTo(Math.PI * 400 * 0.1, 6);
  });
});

describe("estimateCount", () => {
  it("should round up the area divided by the covered area", () => {
    expect(estimateCount(446.24, 25, "free")).toBe(1);
    expect(estimateCount(446.24, 25, "few")).toBe(1);
    expect(estimateCount(446.24, 25, "many")).toBe(3);
  });

  it("should never return fewer than one extinguisher", () => {
    expect(estimateCount(1, 25, "free")).toBe(1);
  });
});

describe("estimateExtinguishers", () => {
  it("should select capacities and distances for the medium risk band", () => {
    const result = estimateExtinguishers(1500, classifyRisk(680));
    expect(result.risk).toBe("medium");
    expect(result.classA.capacity).toBe("3-A");
    expect(result.classA.travelDistanceM).toBe(20);
    expect(result.classB.capacity).toBe("40-B");
    expect(result.classB.travelDistanceM).toBe(15);
    expect(result.classA.count.free).toBe(2);
  });

  it("should allow a single unit only below the area limit", () => {
    expect(estimateExtinguishers(80, "low").singleUnitAllowed).toBe(true);
    expect(estimateExtinguishers(100, "low").singleUnitAllowed).toBe(false);
  });

  it("should throw when the area is not positive", () => {
    expect(() => estimateExtinguishers(0, "low")).toThrow();
  });
});
