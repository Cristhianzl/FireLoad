import { describe, expect, it } from "vitest";
import { matchesQuery, normalize } from "@/lib/search";

describe("normalize", () => {
  it("should strip accents and lowercase", () => {
    expect(normalize("Incêndio")).toBe("incendio");
    expect(normalize("ÁLCOOL Etílico")).toBe("alcool etilico");
  });
});

describe("matchesQuery", () => {
  it("should match ignoring accents and case", () => {
    expect(matchesQuery("Álcool etílico", "alcool")).toBe(true);
    expect(matchesQuery("Papel", "PAPEL")).toBe(true);
  });

  it("should require every term to be present", () => {
    expect(matchesQuery("Comércio de peças", "comercio peca")).toBe(true);
    expect(matchesQuery("Comércio de peças", "comercio aviao")).toBe(false);
  });

  it("should not match unrelated text", () => {
    expect(matchesQuery("Madeira", "etanol")).toBe(false);
  });
});
