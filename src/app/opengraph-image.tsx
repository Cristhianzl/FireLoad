import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/app/_og/renderOgImage";
import { home, site } from "@/locales/pt-BR";

export const alt = `${site.name} — ${site.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: home.h1,
    subtitle: site.domainAction,
    refIds: ["it14", "it21", "nbr12693", "nbr14432"],
  });
}
