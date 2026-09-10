import { describe, expect, it } from "vitest";
import { findMaterial, MATERIALS, searchMaterials } from "@/lib/materials";
import {
  OCCUPANCIES,
  OCCUPANCY_GROUPS,
  searchOccupancies,
} from "@/lib/occupancies";

describe("materials dataset", () => {
  it("should contain every material from the reference table", () => {
    expect(MATERIALS.length).toBe(112);
  });

  it("should have a positive calorific value for every material", () => {
    expect(MATERIALS.every((material) => material.hi > 0)).toBe(true);
  });

  it("should expose the official value for hydrogen", () => {
    expect(findMaterial("Hidrogênio")?.hi).toBe(143);
  });

  it("should find materials by accent-insensitive search", () => {
    const names = searchMaterials("alcool").map((m) => m.name);
    expect(names.some((name) => name.startsWith("Álcool"))).toBe(true);
  });

  it("should return a capped list for an empty query", () => {
    const list = searchMaterials("");
    expect(list.length).toBe(12);
  });

  it("should return undefined for an unknown material", () => {
    expect(findMaterial("Vibranium")).toBeUndefined();
  });
});

describe("occupancies dataset", () => {
  it("should contain every occupancy row from the reference annex", () => {
    expect(OCCUPANCIES.length).toBe(809);
  });

  it("should have a positive fire load for every occupancy", () => {
    expect(OCCUPANCIES.every((item) => item.carga > 0)).toBe(true);
  });

  it("should group occupancies by the occupancy group", () => {
    expect(OCCUPANCY_GROUPS.length).toBeGreaterThan(5);
  });

  it("should return matches for a common search term", () => {
    expect(searchOccupancies("apartamento").length).toBeGreaterThan(0);
  });

  it("should return nothing for an empty query", () => {
    expect(searchOccupancies("")).toEqual([]);
  });

  it("should resolve common lay terms through aliases", () => {
    const igreja = searchOccupancies("igreja");
    expect(igreja.length).toBeGreaterThan(0);
    expect(
      igreja.some((item) => item.descricao.toLowerCase().includes("religios")),
    ).toBe(true);

    expect(searchOccupancies("hotel").length).toBeGreaterThan(0);
    expect(searchOccupancies("hospital").length).toBeGreaterThan(0);
    expect(searchOccupancies("escola").length).toBeGreaterThan(0);
  });
});
