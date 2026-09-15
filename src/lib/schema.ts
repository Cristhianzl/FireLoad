import { SITE_URL } from "@/lib/config";
import { getReference } from "@/lib/norms/references";
import { absoluteUrl } from "@/lib/seo";
import { about, faq, site } from "@/locales/pt-BR";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/sobre#autor`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type PageNode = {
  name: string;
  description: string;
  path: string;
  refIds: string[];
  dateModified: string;
};

function normReferences(refIds: string[]) {
  return refIds.map((id) => {
    const ref = getReference(id);
    return {
      "@type": "CreativeWork",
      name: `${ref.code} — ${ref.title}`,
      url: ref.url,
      publisher: { "@type": "Organization", name: ref.org },
    };
  });
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: site.email,
    taxID: site.cnpj,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: "BR",
    },
    founder: { "@id": PERSON_ID },
    sameAs: [site.github],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.author,
    jobTitle: site.authorJobTitle,
    url: absoluteUrl("/sobre"),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.authorSchool,
      url: site.authorSchoolUrl,
    },
    knowsAbout: about.knowsAbout,
    sameAs: [site.authorGithub, site.tccUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: SITE_URL,
    inLanguage: "pt-BR",
    description: site.domainAction,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function webAppSchema({
  name,
  description,
  path,
  refIds,
  dateModified,
}: PageNode) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    dateModified,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
    isBasedOn: normReferences(refIds),
  };
}

export function datasetSchema({
  name,
  description,
  path,
  refIds,
  dateModified,
  variables,
}: PageNode & { variables: string[] }) {
  const source = getReference(refIds[0]);
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    dateModified,
    creator: { "@type": "Organization", name: source.org },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
    isBasedOn: normReferences(refIds),
    variableMeasured: variables,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[] = faq.items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
