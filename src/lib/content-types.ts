export type NormQuote = { text: string; source: string };

export type SimpleTable = {
  caption: string;
  head: string[];
  rows: string[][];
};

export type GuideAnswer = {
  id: string;
  question: string;
  answer: string;
  points?: string[];
  table?: SimpleTable;
  quote?: NormQuote;
};

export type FaqItem = { q: string; a: string };

export type WorkedExampleContent = {
  title: string;
  intro: string;
  scenario: string;
  steps: string[];
  result: string;
  note?: string;
};
