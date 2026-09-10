type Block = { title: string; text: string };

export function LegalArticle({
  updated,
  blocks,
}: {
  updated: string;
  blocks: Block[];
}) {
  return (
    <div className="mx-auto mt-8 max-w-3xl">
      <p className="text-base-content/55 text-sm">{updated}</p>
      <div className="mt-6 space-y-7">
        {blocks.map((block) => (
          <section key={block.title}>
            <h2 className="font-display text-lg font-bold">{block.title}</h2>
            <p className="text-base-content/80 mt-2 text-sm leading-relaxed">
              {block.text}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
