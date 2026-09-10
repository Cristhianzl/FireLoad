import { faq } from "@/locales/pt-BR";

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-center text-2xl font-bold sm:text-3xl">
        {faq.title}
      </h2>
      <div className="mt-8 space-y-3">
        {faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-box border-base-300 bg-base-100 border p-0"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium">
              <span>{item.q}</span>
              <span
                className="text-base-content/50 transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                <PlusIcon />
              </span>
            </summary>
            <p className="text-base-content/75 px-5 pb-5 text-sm leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
