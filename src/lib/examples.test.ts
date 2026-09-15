import { describe, expect, it } from "vitest";
import {
  exitsExample,
  extinguisherExample,
  required,
  storageExample,
  trrfExample,
} from "@/lib/examples";

describe("worked examples", () => {
  it("should estimate extinguishers for the office example", () => {
    const example = extinguisherExample();
    expect(example.occupancy.carga).toBe(700);
    expect(example.risk).toBe("medium");
    expect(example.estimate.classA.count).toEqual({ free: 1, few: 1, many: 4 });
    expect(example.estimate.classB.count).toEqual({ free: 1, few: 2, many: 7 });
  });

  it("should interpolate the paper warehouse example", () => {
    const example = storageExample();
    expect(example.lower).toEqual({ heightM: 2, load: 7560 });
    expect(example.upper).toEqual({ heightM: 4, load: 15120 });
    expect(example.load).toBe(11340);
    expect(example.risk).toBe("high");
    expect(example.estimate.classA.count).toEqual({
      free: 3,
      few: 5,
      many: 22,
    });
  });

  it("should resolve the office TRRF example to class P3", () => {
    const example = trrfExample();
    expect(example.heightClass.key).toBe("p3");
    expect(example.minutes).toBe(60);
  });

  it("should size the shop exits example", () => {
    const example = exitsExample();
    expect(example.population).toBe(200);
    expect(example.components.acessos).toEqual({ units: 2, widthM: 1.1 });
    expect(example.components.escadas).toEqual({ units: 3, widthM: 1.65 });
    expect(example.components.portas).toEqual({ units: 2, widthM: 1.1 });
    expect(example.minWidthM).toBe(1.2);
  });

  it("should throw when example data is missing", () => {
    expect(() => required(undefined, "row")).toThrow("row");
  });

  it("should return present example data unchanged", () => {
    expect(required(0, "zero")).toBe(0);
  });
});
