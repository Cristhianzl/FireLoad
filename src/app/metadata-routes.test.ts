import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { ALL_PATHS } from "@/lib/pages";

describe("sitemap", () => {
  it("should list every page exactly once", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toHaveLength(ALL_PATHS.length);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("robots", () => {
  it("should allow AI answer engines explicitly", () => {
    const rules = [robots().rules].flat();
    const agents = rules.flatMap((rule) => [rule.userAgent].flat());
    expect(agents).toEqual(
      expect.arrayContaining([
        "*",
        "OAI-SearchBot",
        "ClaudeBot",
        "PerplexityBot",
      ]),
    );
    expect(rules.every((rule) => rule.allow === "/")).toBe(true);
  });
});
