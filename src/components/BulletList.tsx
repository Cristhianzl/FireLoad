export function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`text-base-content/75 space-y-1.5 text-sm ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
