import type { Metadata } from "next";
import Link from "next/link";
import { AnswerBlock } from "@/components/AnswerBlock";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageLinks } from "@/components/PageLinks";
import { SpecificLoadCalculator } from "@/components/SpecificLoadCalculator";
import { WorkedExample } from "@/components/WorkedExample";
import { ROUTES } from "@/lib/config";
import { pageInfo, TABLE_PATHS } from "@/lib/pages";
import { faqSchema, webAppSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import {
  common,
  example,
  glossary,
  home,
  methodology,
  site,
  specific,
} from "@/locales/pt-BR";

const PAGE = pageInfo(ROUTES.home);
const STEPS = methodology.section1Legend;

// The root layout title template does not apply to its own page, so the brand is appended here.
export const metadata: Metadata = {
  ...pageMetadata(PAGE),
  title: { absolute: `${PAGE.title} · ${site.name}` },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webAppSchema({
          name: home.h1,
          description: PAGE.description,
          path: PAGE.path,
          refIds: ["it14", "it21", "nbr12693", "nbr14432"],
          dateModified: PAGE.updatedAt,
        })}
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
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {home.answersTitle}
          </h2>
          <div className="mt-10 space-y-12">
            {home.answers.map((answer) => (
              <AnswerBlock key={answer.id} answer={answer} headingLevel="h3" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
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
      </section>

      <section className="border-base-300 bg-base-200/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <PageLinks
            title={home.featuresTitle}
            intro={home.featuresSub}
            paths={[
              ROUTES.storage,
              ROUTES.extinguishers,
              ROUTES.trrf,
              ROUTES.exits,
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <WorkedExample content={example} />
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

        <div className="rounded-box border-base-300 bg-secondary text-secondary-content mt-12 border p-8">
          <h2 className="font-display text-2xl font-bold">
            {home.openSourceTitle}
          </h2>
          <p className="text-secondary-content/80 mt-3 max-w-3xl leading-relaxed">
            {home.openSourceText}
          </p>
        </div>
      </section>

      <section className="border-base-300 bg-base-200/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <PageLinks
            title={home.tablesTitle}
            intro={home.tablesSub}
            paths={TABLE_PATHS}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <Faq />
      </section>
    </>
  );
}
