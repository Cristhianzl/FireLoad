import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ROUTES } from "@/lib/config";
import { footer, nav, site } from "@/locales/pt-BR";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-base-300 bg-base-200 mt-auto border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="text-base-content/70 mt-4 max-w-sm text-sm leading-relaxed">
              {footer.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                {footer.sourceCode}
              </a>
              <a
                href={site.buymeacoffee}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                {footer.supportLabel}
              </a>
            </div>
          </div>

          <FooterLinks
            label={nav.footerLabel}
            title={footer.navigate}
            links={[
              { href: ROUTES.fireLoad, label: nav.fireLoad },
              { href: ROUTES.storage, label: nav.storage },
              { href: ROUTES.extinguishers, label: nav.extinguishers },
              { href: ROUTES.trrf, label: nav.trrf },
              { href: ROUTES.exits, label: nav.exits },
            ]}
          />

          <FooterLinks
            title={footer.reference}
            links={[
              { href: ROUTES.tables, label: nav.tables },
              { href: ROUTES.methodology, label: nav.methodology },
              { href: ROUTES.norms, label: nav.norms },
              { href: ROUTES.about, label: nav.about },
            ]}
          />

          <div>
            <h2 className="text-base-content text-sm font-semibold">
              {footer.legal}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={ROUTES.terms}
                  className="link link-hover text-base-content/70"
                >
                  {footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.privacy}
                  className="link link-hover text-base-content/70"
                >
                  {footer.privacy}
                </Link>
              </li>
            </ul>
            <h2 className="text-base-content mt-6 text-sm font-semibold">
              {footer.contact}
            </h2>
            <ul className="text-base-content/70 mt-3 space-y-1 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="link link-hover">
                  {site.email}
                </a>
              </li>
              <li>CNPJ {site.cnpj}</li>
              <li>{site.city}</li>
            </ul>
          </div>
        </div>

        <div className="border-base-300 text-base-content/60 mt-10 border-t pt-6 text-xs leading-relaxed">
          <p>{footer.disclaimerShort}</p>
          <p className="mt-2">
            © {year} {site.name}. {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  label,
  links,
}: {
  title: string;
  label?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={label ?? title}>
      <h2 className="text-base-content text-sm font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link link-hover text-base-content/70"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
