import type { NormQuote as NormQuoteContent } from "@/lib/content-types";
import { common } from "@/locales/pt-BR";

export function NormQuote({ quote }: { quote: NormQuoteContent }) {
  return (
    <figure className="rounded-box border-base-300 bg-base-200/60 mt-5 border p-5">
      <blockquote className="text-base-content/85 text-sm leading-relaxed">
        <p>“{quote.text}”</p>
      </blockquote>
      <figcaption className="text-base-content/60 mt-3 text-xs font-medium">
        {common.quoteSource(quote.source)}
      </figcaption>
    </figure>
  );
}
