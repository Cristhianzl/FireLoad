import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/app/_og/renderOgImage";
import { seo } from "@/locales/pt-BR";

export const alt = seo.norms.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    title: seo.norms.title,
    subtitle: seo.norms.description,
    refIds: ["it14", "it21", "it08", "it11", "nbr12693", "nbr14432"],
  });
}
