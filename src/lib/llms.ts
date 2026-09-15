import {
  CALCULATOR_PATHS,
  pageInfo,
  REFERENCE_PATHS,
  TABLE_PATHS,
  type PageInfo,
} from "@/lib/pages";
import type { RoutePath } from "@/lib/config";
import { absoluteUrl } from "@/lib/seo";
import { llms, site } from "@/locales/pt-BR";

function linkLine(page: PageInfo): string {
  return `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`;
}

function section(title: string, paths: RoutePath[]): string {
  return [`## ${title}`, "", ...paths.map((p) => linkLine(pageInfo(p)))].join(
    "\n",
  );
}

// Follows the llms.txt proposal (llmstxt.org): H1, blockquote summary, then link lists.
export function buildLlmsTxt(): string {
  return [
    `# ${site.name}`,
    "",
    `> ${llms.summary}`,
    "",
    ...llms.facts.map((fact) => `- ${fact}`),
    "",
    section(llms.calculatorsTitle, CALCULATOR_PATHS),
    "",
    section(llms.tablesTitle, TABLE_PATHS),
    "",
    section(llms.referenceTitle, REFERENCE_PATHS),
    "",
  ].join("\n");
}
