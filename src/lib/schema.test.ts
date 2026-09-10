import { describe, expect, it } from "vitest";
import { faq } from "@/locales/pt-BR";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  webAppSchema,
  websiteSchema,
} from "@/lib/schema";

describe("schema builders", () => {
  it("should build an Organization node", () => {
    expect(organizationSchema()["@type"]).toBe("Organization");
  });

  it("should build a WebSite node in Portuguese", () => {
    expect(websiteSchema().inLanguage).toBe("pt-BR");
  });

  it("should build a free WebApplication node with the given path", () => {
    const node = webAppSchema("Test", "Description", "/extintores");
    expect(node["@type"]).toBe("WebApplication");
    expect(node.isAccessibleForFree).toBe(true);
    expect(String(node.url)).toContain("/extintores");
  });

  it("should number breadcrumb positions from one", () => {
    const node = breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Extinguishers", path: "/extintores" },
    ]);
    expect(node.itemListElement).toHaveLength(2);
    expect(node.itemListElement[1].position).toBe(2);
  });

  it("should map every FAQ item into the schema", () => {
    expect(faqSchema().mainEntity).toHaveLength(faq.items.length);
  });
});
