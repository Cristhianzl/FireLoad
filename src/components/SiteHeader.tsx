"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ROUTES } from "@/lib/config";
import { nav } from "@/locales/pt-BR";

const LINKS = [
  { href: ROUTES.fireLoad, label: nav.fireLoad },
  { href: ROUTES.extinguishers, label: nav.extinguishers },
  { href: ROUTES.methodology, label: nav.methodology },
  { href: ROUTES.norms, label: nav.norms },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-base-300 bg-base-100/95 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={ROUTES.home} aria-label="ExtinFire" className="shrink-0">
          <Logo />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 md:flex"
        >
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-field px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-base-200 text-base-content"
                    : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`${ROUTES.fireLoad}#calculadora`}
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            {nav.primaryCta}
          </Link>
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-square md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-base-300 bg-base-100 border-t md:hidden"
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3"
        >
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-field px-3 py-3 text-base font-medium ${
                  active ? "bg-base-200" : "text-base-content/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={`${ROUTES.fireLoad}#calculadora`}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-2"
          >
            {nav.primaryCta}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
