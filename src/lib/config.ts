export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://fireload.com.br";

export const ROUTES = {
  home: "/",
  fireLoad: "/",
  extinguishers: "/extintores",
  trrf: "/trrf",
  exits: "/saidas-de-emergencia",
  methodology: "/metodologia",
  norms: "/normas",
  about: "/sobre",
  terms: "/termos",
  privacy: "/privacidade",
} as const;
