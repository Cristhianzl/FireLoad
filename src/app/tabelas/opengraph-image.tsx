import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/app/_og/renderOgImage";
import { seo } from "@/locales/pt-BR";

export const alt = seo.tables.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: seo.tables.title,
    subtitle: seo.tables.description,
    refIds: ["it14", "it08", "it11"],
  });
}
