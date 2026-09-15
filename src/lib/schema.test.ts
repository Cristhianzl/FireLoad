import { describe, expect, it } from "vitest";
import { faq } from "@/locales/pt-BR";
import {
  breadcrumbSchema,
  datasetSchema,
  faqSchema,
  organizationSchema,
  personSchema,
  webAppSchema,
  websiteSchema,
} from "@/lib/schema";

const PAGE = {
  name: "Test",
  description: "Description",
  path: "/extintores",
  refIds: ["it14", "nbr12693"],
  dateModified: "2026-09-15",
};

describe("schema builders", () => {
  it("should link the organization to its founder", () => {
    const organization = organizationSchema();
    expect(organization["@type"]).toBe("Organization");
    expect(organization.founder["@id"]).toBe(personSchema()["@id"]);
  });

  it("should describe the author with verifiable profiles", () => {
    const person = personSchema();
    expect(person["@type"]).toBe("Person");
    expect(person.sameAs.every((url) => url.startsWith("https://"))).toBe(true);
  });

  it("should build a WebSite node in Portuguese", () => {
    expect(websiteSchema().inLanguage).toBe("pt-BR");
  });

  it("should build a free WebApplication node citing its norms", () => {
    const node = webAppSchema(PAGE);
    expect(node["@type"]).toBe("WebApplication");
    expect(node.isAccessibleForFree).toBe(true);
    expect(node.url).toContain("/extintores");
    expect(node.isBasedOn).toHaveLength(2);
    expect(node.isBasedOn[0].name).toContain("IT 14/2025");
  });

  it("should credit the norm publisher as dataset creator", () => {
    const node = datasetSchema({ ...PAGE, variables: ["Material"] });
    expect(node["@type"]).toBe("Dataset");
    expect(node.creator.name).toContain("Corpo de Bombeiros");
    expect(node.variableMeasured).toEqual(["Material"]);
  });

  it("should throw when a dataset cites an unknown norm", () => {
    expect(() =>
      datasetSchema({ ...PAGE, refIds: ["nope"], variables: [] }),
    ).toThrow();
  });

  it("should number breadcrumb positions from one", () => {
    const node = breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Extinguishers", path: "/extintores" },
    ]);
    expect(node.itemListElement).toHaveLength(2);
    expect(node.itemListElement[1].position).toBe(2);
    expect(node.itemListElement[0].item.endsWith("/")).toBe(true);
  });

  it("should map every FAQ item into the schema", () => {
    expect(faqSchema().mainEntity).toHaveLength(faq.items.length);
  });

  it("should accept a page-specific FAQ list", () => {
    expect(faqSchema([{ q: "Q", a: "A" }]).mainEntity).toHaveLength(1);
  });
});
