import { SITE, providerCredentialLine, formattedAddress } from "@/lib/site";
import { FAQ_ENTRIES } from "@/lib/faq";
import { SERVICES } from "@/lib/services";

export function clinicJsonLd() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: SITE.country,
  };
  if (SITE.streetAddress) address.streetAddress = SITE.streetAddress;
  if (SITE.zip) address.postalCode = SITE.zip;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness", "Organization"],
    name: SITE.name,
    url: SITE.siteUrl,
    description:
    "Men's hormone care, women's menopause care and medical weight management in Overland Park and the Kansas City area. Local Kansas clinic with individualized treatment.",
    areaServed: [
      { "@type": "City", name: SITE.city },
      { "@type": "City", name: SITE.region },
      { "@type": "AdministrativeArea", name: SITE.county },
      { "@type": "State", name: "Kansas" },
      { "@type": "State", name: "Missouri" },
    ],
    address,
    slogan: SITE.tagline,
    availableService: SERVICES.filter((s) => s.primary).map((s) => ({
      "@type": "MedicalTherapy",
      name: s.title,
      url: `${SITE.siteUrl}${s.href}`,
    })),
  };

  if (SITE.phoneTel) data.telephone = SITE.phoneTel;
  else if (SITE.phone) data.telephone = SITE.phone;
  if (SITE.email) data.email = SITE.email;

  return data;
}

export function personJsonLd() {
  const person: Record<string, unknown> = {
    "@type": "Person",
    jobTitle: SITE.providerTitle,
    hasCredential: SITE.providerCredential,
    worksFor: {
      "@type": "MedicalClinic",
      name: SITE.name,
    },
    description: providerCredentialLine(),
  };
  if (SITE.providerName) person.name = SITE.providerName;
  return person;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ENTRIES.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name,
    description,
    url: `${SITE.siteUrl}${path}`,
    provider: {
      "@type": "MedicalClinic",
      name: SITE.name,
      address: formattedAddress() ?? `${SITE.city}, ${SITE.state}`,
    },
  };
}
