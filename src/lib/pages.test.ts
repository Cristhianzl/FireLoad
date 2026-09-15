import { describe, expect, it } from "vitest";
import { ROUTES } from "@/lib/config";
import { buildLlmsTxt } from "@/lib/llms";
import {
  ALL_PATHS,
  CALCULATOR_PATHS,
  pageInfo,
  REFERENCE_PATHS,
  TABLE_PATHS,
} from "@/lib/pages";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

describe("page registry", () => {
  it("should register every route with a content date", () => {
    const routes = new Set(Object.values(ROUTES));
    expect(new Set(ALL_PATHS)).toEqual(routes);
  });

  it("should give every page a unique title and description", () => {
    const pages = ALL_PATHS.map(pageInfo);
    expect(new Set(pages.map((p) => p.title)).size).toBe(pages.length);
    expect(pages.every((p) => p.description.length >= 70)).toBe(true);
    expect(pages.every((p) => p.description.length <= 170)).toBe(true);
  });

  it("should keep dates in ISO format", () => {
    expect(
      ALL_PATHS.every((p) => /^\d{4}-\d{2}-\d{2}$/.test(pageInfo(p).updatedAt)),
    ).toBe(true);
  });

  it("should only group registered paths", () => {
    const all = new Set(ALL_PATHS);
    const grouped = [...CALCULATOR_PATHS, ...TABLE_PATHS, ...REFERENCE_PATHS];
    expect(grouped.every((path) => all.has(path))).toBe(true);
  });
});

describe("seo helpers", () => {
  it("should keep the trailing slash on the home URL", () => {
    expect(absoluteUrl("/")).toMatch(/\/$/);
    expect(absoluteUrl("/trrf")).toMatch(/\/trrf$/);
  });

  it("should build canonical and Open Graph data for a page", () => {
    const metadata = pageMetadata({
      title: "T",
      description: "D",
      path: "/trrf",
    });
    expect(metadata.alternates?.canonical).toBe("/trrf");
    expect(metadata.openGraph?.url).toBe(absoluteUrl("/trrf"));
  });
});

describe("llms.txt", () => {
  const text = buildLlmsTxt();

  it("should open with the site name and a summary blockquote", () => {
    expect(text.startsWith("# FireLoad\n\n> ")).toBe(true);
  });

  it("should link every calculator and table with absolute URLs", () => {
    for (const path of [...CALCULATOR_PATHS, ...TABLE_PATHS]) {
      expect(text).toContain(`](${absoluteUrl(path)})`);
    }
  });
});
