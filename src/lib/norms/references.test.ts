import { describe, expect, it } from "vitest";
import { getReference, REFERENCES } from "@/lib/norms/references";

describe("references", () => {
  it("should expose every normative source used by the calculators", () => {
    for (const id of ["it14", "it21", "nbr12693", "nbr14432", "tcc"]) {
      expect(REFERENCES[id]).toBeDefined();
      expect(REFERENCES[id].url).toMatch(/^https?:\/\//);
    }
  });

  it("should return a known reference by id", () => {
    expect(getReference("nbr12693").code).toContain("12693");
  });

  it("should throw for an unknown reference", () => {
    expect(() => getReference("unknown")).toThrow();
  });
});
