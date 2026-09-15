import type { WorkedExampleContent } from "@/lib/content-types";

export function WorkedExample({
  content,
  headingLevel = "h2",
}: {
  content: WorkedExampleContent;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <section>
      <Heading className="font-display text-2xl font-bold sm:text-3xl">
        {content.title}
      </Heading>
      <p className="text-base-content/70 mt-2">{content.intro}</p>
      <div className="rounded-box border-base-300 bg-base-100 mt-6 border p-5">
        <p className="text-sm font-medium">{content.scenario}</p>
        <ol className="mt-4 space-y-2">
          {content.steps.map((step, index) => (
            <li key={step} className="text-base-content/80 flex gap-3 text-sm">
              <span className="readout-value font-display text-primary/70 font-bold">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="rounded-field bg-primary/10 text-primary mt-4 px-4 py-2 text-sm font-semibold">
          {content.result}
        </p>
        {content.note && (
          <p className="text-base-content/55 mt-3 text-xs">{content.note}</p>
        )}
      </div>
    </section>
  );
}
