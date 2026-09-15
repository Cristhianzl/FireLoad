import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/app/_og/renderOgImage";
import { seo } from "@/locales/pt-BR";

export const alt = seo.tableHeat.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: seo.tableHeat.title,
    subtitle: seo.tableHeat.description,
    refIds: ["it14"],
  });
}
