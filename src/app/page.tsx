import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { SpecificLoadCalculator } from "@/components/SpecificLoadCalculator";
import { ROUTES } from "@/lib/config";
import { faqSchema, webAppSchema } from "@/lib/schema";
import {
  common,
  example,
  glossary,
  home,
  methodology,
  occupancy,
  seo,
  specific,
} from "@/locales/pt-BR";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: { canonical: "/" },
};

const STEPS = methodology.section1Legend;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webAppSchema(
          "Calculadora de carga de incêndio",
          metadata.description as string,
          "/",
        )}
      />
      <JsonLd data={faqSchema()} />

      <section className="border-base-300 bg-base-200/50 border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase">
            {home.eyebrow}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            {home.h1}
          </h1>
          <p className="text-base-content/75 mt-5 max-w-2xl text-lg leading-relaxed">
            {home.sub}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#calculadora" className="btn btn-primary">
              {home.ctaPrimary}
            </Link>
            <Link href={ROUTES.extinguishers} className="btn btn-outline">
              {home.ctaSecondary}
            </Link>
          </div>
          <p className="text-base-content/60 mt-5 text-sm">{home.trustLine}</p>
        </div>
      </section>

      <section id="calculadora" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {specific.h1}
          </h2>
          <p className="text-base-content/70 mt-2 max-w-2xl">
            {specific.intro}
          </p>
          <div className="mt-8">
            <SpecificLoadCalculator />
          </div>
        </div>
      </section>

      <section className="border-base-300 bg-base-200/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {home.howTitle}
          </h2>
          <p className="text-base-content/70 mt-2 max-w-2xl">{home.howSub}</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li
                key={step}
                className="rounded-box border-base-300 bg-base-100 border p-5"
              >
                <span className="font-display text-primary/70 text-2xl font-bold">
                  {index + 1}
                </span>
                <p className="text-base-content/75 mt-2 text-sm leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Link
              href={ROUTES.methodology}
              className="link link-primary font-medium"
            >
              {common.seeMethodology}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {home.featuresTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-box border-base-300 bg-base-100 border p-6">
            <h3 className="font-display text-xl font-semibold">
              {home.feature1Title}
            </h3>
            <p className="text-base-content/75 mt-2 text-sm leading-relaxed">
              {home.feature1Text}
            </p>
            <Link
              href="#calculadora"
              className="link link-primary mt-4 inline-block text-sm font-medium"
            >
              {specific.calculate}
            </Link>
          </article>
          <article className="rounded-box border-base-300 bg-base-100 border p-6">
            <h3 className="font-display text-xl font-semibold">
              {home.feature2Title}
            </h3>
            <p className="text-base-content/75 mt-2 text-sm leading-relaxed">
              {home.feature2Text}
            </p>
            <Link
              href={ROUTES.extinguishers}
              className="link link-primary mt-4 inline-block text-sm font-medium"
            >
              {occupancy.calculate}
            </Link>
          </article>
        </div>

        <div className="rounded-box border-base-300 bg-secondary text-secondary-content mt-12 border p-8">
          <h2 className="font-display text-2xl font-bold">
            {home.openSourceTitle}
          </h2>
          <p className="text-secondary-content/80 mt-3 max-w-3xl leading-relaxed">
            {home.openSourceText}
          </p>
        </div>
      </section>

      <section className="border-base-300 bg-base-200/40 border-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {example.title}
            </h2>
            <p className="text-base-content/70 mt-2">{example.intro}</p>
            <div className="rounded-box border-base-300 bg-base-100 mt-6 border p-5">
              <p className="text-sm font-medium">{example.scenario}</p>
              <ol className="mt-4 space-y-2">
                {example.steps.map((step, index) => (
                  <li
                    key={step}
                    className="text-base-content/80 flex gap-3 text-sm"
                  >
                    <span className="readout-value font-display text-primary/70 font-bold">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="rounded-field bg-primary/10 text-primary mt-4 px-4 py-2 text-sm font-semibold">
                {example.result}
              </p>
              <p className="text-base-content/55 mt-3 text-xs">
                {example.note}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {glossary.title}
            </h2>
            <p className="text-base-content/70 mt-2">{glossary.intro}</p>
            <dl className="mt-6 space-y-4">
              {glossary.items.map((item) => (
                <div key={item.term}>
                  <dt className="text-base-content text-sm font-semibold">
                    {item.term}
                  </dt>
                  <dd className="text-base-content/70 mt-0.5 text-sm">
                    {item.def}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-base-300 bg-base-200/40 border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Faq />
        </div>
      </section>
    </>
  );
}
