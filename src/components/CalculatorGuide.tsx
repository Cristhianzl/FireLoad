import { AnswerBlock } from "@/components/AnswerBlock";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageLinks } from "@/components/PageLinks";
import { WorkedExample } from "@/components/WorkedExample";
import type { RoutePath } from "@/lib/config";
import type {
  FaqItem,
  GuideAnswer,
  WorkedExampleContent,
} from "@/lib/content-types";
import { faqSchema } from "@/lib/schema";
import { common } from "@/locales/pt-BR";

export function CalculatorGuide({
  steps,
  answers,
  example,
  faq,
  related,
}: {
  steps: string[];
  answers: GuideAnswer[];
  example: WorkedExampleContent;
  faq: FaqItem[];
  related: RoutePath[];
}) {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <div className="mx-auto mt-16 max-w-3xl space-y-14">
        <section aria-labelledby="como-usar-titulo">
          <h2 id="como-usar-titulo" className="font-display text-2xl font-bold">
            {common.howToTitle}
          </h2>
          <ol className="mt-5 space-y-3">
            {steps.map((step, index) => (
              <li
                key={step}
                className="rounded-box border-base-300 bg-base-100 text-base-content/80 flex gap-4 border p-4 text-sm leading-relaxed"
              >
                <span className="readout-value font-display text-primary/70 text-lg font-bold">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
        {answers.map((answer) => (
          <AnswerBlock key={answer.id} answer={answer} />
        ))}
        <WorkedExample content={example} />
      </div>
      <div className="border-base-300 mt-16 border-t pt-14">
        <Faq title={common.faqTitle} items={faq} />
      </div>
      <div className="border-base-300 mt-16 border-t pt-14">
        <PageLinks title={common.relatedTitle} paths={related} />
      </div>
    </>
  );
}
