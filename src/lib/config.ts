export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://fireload.com.br";

export const ROUTES = {
  home: "/",
  fireLoad: "/",
  extinguishers: "/extintores",
  storage: "/carga-de-incendio-deposito",
  trrf: "/trrf",
  exits: "/saidas-de-emergencia",
  tables: "/tabelas",
  tableHeat: "/tabelas/potencial-calorifico",
  tableOccupancy: "/tabelas/carga-de-incendio-por-ocupacao",
  tableStorage: "/tabelas/carga-de-incendio-depositos",
  tableTrrf: "/tabelas/trrf",
  tableExits: "/tabelas/lotacao-saidas-de-emergencia",
  methodology: "/metodologia",
  norms: "/normas",
  about: "/sobre",
  terms: "/termos",
  privacy: "/privacidade",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

// Real content revision dates, so the sitemap never claims freshness a page does not have.
export const CONTENT_UPDATED_AT: Record<RoutePath, string> = {
  "/": "2026-09-15",
  "/extintores": "2026-09-15",
  "/carga-de-incendio-deposito": "2026-09-15",
  "/trrf": "2026-09-15",
  "/saidas-de-emergencia": "2026-09-15",
  "/tabelas": "2026-09-15",
  "/tabelas/potencial-calorifico": "2026-09-15",
  "/tabelas/carga-de-incendio-por-ocupacao": "2026-09-15",
  "/tabelas/carga-de-incendio-depositos": "2026-09-15",
  "/tabelas/trrf": "2026-09-15",
  "/tabelas/lotacao-saidas-de-emergencia": "2026-09-15",
  "/metodologia": "2026-09-15",
  "/normas": "2026-09-15",
  "/sobre": "2026-09-15",
  "/termos": "2026-09-10",
  "/privacidade": "2026-09-10",
};
