import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/app/_og/renderOgImage";
import { seo } from "@/locales/pt-BR";

export const alt = seo.tableOccupancy.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: seo.tableOccupancy.title,
    subtitle: seo.tableOccupancy.description,
    refIds: ["it14"],
  });
}
