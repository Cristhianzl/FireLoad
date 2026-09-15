import { BulletList } from "@/components/BulletList";
import { NormQuote } from "@/components/NormQuote";
import { SimpleTable } from "@/components/SimpleTable";
import type { GuideAnswer } from "@/lib/content-types";

export function AnswerBlock({
  answer,
  headingLevel = "h2",
}: {
  answer: GuideAnswer;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const titleId = `${answer.id}-titulo`;
  return (
    <section id={answer.id} aria-labelledby={titleId} className="scroll-mt-20">
      <Heading
        id={titleId}
        className={`font-display font-bold ${headingLevel === "h2" ? "text-2xl" : "text-xl"}`}
      >
        {answer.question}
      </Heading>
      <p className="text-base-content/80 mt-3 leading-relaxed">
        {answer.answer}
      </p>
      {answer.points && <BulletList items={answer.points} className="mt-4" />}
      {answer.table && <SimpleTable table={answer.table} />}
      {answer.quote && <NormQuote quote={answer.quote} />}
    </section>
  );
}
