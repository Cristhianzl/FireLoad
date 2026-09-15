import { CONTENT_UPDATED_AT, ROUTES, type RoutePath } from "@/lib/config";
import { seo } from "@/locales/pt-BR";

export type PageInfo = {
  path: RoutePath;
  title: string;
  description: string;
  updatedAt: string;
};

const SEO_BY_PATH: Record<RoutePath, { title: string; description: string }> = {
  [ROUTES.home]: seo.home,
  [ROUTES.extinguishers]: seo.extinguishers,
  [ROUTES.storage]: seo.storage,
  [ROUTES.trrf]: seo.trrf,
  [ROUTES.exits]: seo.exits,
  [ROUTES.tables]: seo.tables,
  [ROUTES.tableHeat]: seo.tableHeat,
  [ROUTES.tableOccupancy]: seo.tableOccupancy,
  [ROUTES.tableStorage]: seo.tableStorage,
  [ROUTES.tableTrrf]: seo.tableTrrf,
  [ROUTES.tableExits]: seo.tableExits,
  [ROUTES.methodology]: seo.methodology,
  [ROUTES.norms]: seo.norms,
  [ROUTES.about]: seo.about,
  [ROUTES.terms]: seo.terms,
  [ROUTES.privacy]: seo.privacy,
};

export const CALCULATOR_PATHS: RoutePath[] = [
  ROUTES.home,
  ROUTES.storage,
  ROUTES.extinguishers,
  ROUTES.trrf,
  ROUTES.exits,
];

export const TABLE_PATHS: RoutePath[] = [
  ROUTES.tableHeat,
  ROUTES.tableOccupancy,
  ROUTES.tableStorage,
  ROUTES.tableTrrf,
  ROUTES.tableExits,
];

export const REFERENCE_PATHS: RoutePath[] = [
  ROUTES.tables,
  ROUTES.methodology,
  ROUTES.norms,
  ROUTES.about,
];

export const ALL_PATHS = Object.keys(CONTENT_UPDATED_AT) as RoutePath[];

export function pageInfo(path: RoutePath): PageInfo {
  return { path, ...SEO_BY_PATH[path], updatedAt: CONTENT_UPDATED_AT[path] };
}
