import { features } from "@/lib/features";

export type ServiceSlug =
  | "mens-hormone-therapy"
  | "womens-hormone-therapy"
  | "weight-management"
  | "peptide-therapy"
  | "sexual-wellness"
  | "wellness-healthy-aging";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  heroDescriptor: string;
  highlights: string[];
  ctaLabel: string;
  primary: boolean;
  icon: "user" | "heart" | "scale" | "dna" | "heartPulse" | "leaf";
  seoTitle: string;
  seoDescription: string;
  whatItIs: string;
  whoItsFor: string[];
  whatToExpect: string[];
  safetyCallout: string;
  extraDisclosure?: string;
  publiclyMarketable: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "mens-hormone-therapy",
    title: "Men's Hormone Care",
    shortTitle: "Men's Hormone Care",
    href: "/services/mens-hormone-therapy",
    description:
      "Evaluation and treatment for low energy, decreased libido, decreased strength, changes in body composition, mood changes and other symptoms that may be associated with hormone deficiency.",
    heroDescriptor:
      "Individualized men's hormone evaluation and treatment with laboratory monitoring and ongoing clinical follow-up from a local Kansas provider.",
    highlights: [
      "Clinical evaluation for hormone-related symptoms",
      "Appropriate laboratory testing",
      "Individualized treatment when clinically appropriate",
      "Ongoing medical monitoring",
      "Sexual wellness evaluation when appropriate",
    ],
    ctaLabel: "Explore Men's Hormone Care",
    primary: true,
    icon: "user",
    seoTitle: "Men's Hormone Care in Overland Park, KS",
    seoDescription:
      "Men's hormone care and hormone replacement evaluation in Overland Park and the Kansas City area. Clinical evaluation, monitoring and follow-up from Heartland Hormone.",
    whatItIs:
      "Men's hormone care at Heartland starts with a clinical evaluation for symptoms that may be related to hormone deficiency. Treatment may be considered after history, examination when appropriate and laboratory review.",
    whoItsFor: [
      "Men with low energy, reduced libido or changes in strength and body composition.",
      "Men who want a structured evaluation rather than a one-size-fits-all protocol.",
      "Men who prefer a local Kansas City-area clinic with follow-up options when appropriate.",
    ],
    whatToExpect: [
      "Schedule a men's hormone consultation.",
      "Complete evaluation and baseline laboratory review.",
      "Discuss whether treatment is appropriate based on clinical findings.",
      "Begin follow-up, monitoring and medication adjustments if treatment is started.",
    ],
    safetyCallout:
      "Hormone-related symptoms can have many causes. Laboratory testing and clinical evaluation are required before treatment. Prescription treatment is provided only when clinically appropriate.",
    publiclyMarketable: true,
  },
  {
    slug: "womens-hormone-therapy",
    title: "Women's Hormone & Menopause Care",
    shortTitle: "Women's Hormone Care",
    href: "/services/womens-hormone-therapy",
    description:
      "Personalized care for women experiencing perimenopause, menopause, hot flashes, night sweats, disrupted sleep, mood changes, fatigue, libido concerns and other hormone-related symptoms.",
    heroDescriptor:
      "Individualized perimenopause and menopause care with customized hormone treatment, laboratory evaluation and ongoing clinical monitoring.",
    highlights: [
      "Perimenopause and menopause care",
      "Hot flashes, night sweats and sleep changes",
      "Individualized hormone treatment",
      "Ongoing clinical management",
      "Sexual wellness support when appropriate",
    ],
    ctaLabel: "Explore Women's Hormone Care",
    primary: true,
    icon: "heart",
    seoTitle: "Menopause & Women's Hormone Care in Overland Park, KS",
    seoDescription:
      "Menopause and perimenopause care in Overland Park and Kansas City. Individualized women's hormone care with clinical follow-up from Heartland Hormone.",
    whatItIs:
      "Women's hormone and menopause care is based on symptoms, medical history, risk factors and each patient's goals. Customized prescription formulations may be considered when clinically appropriate and legally available.",
    whoItsFor: [
      "Women in perimenopause or menopause with hot flashes, sleep changes, low energy or related symptoms.",
      "Women with vaginal dryness, painful intercourse or other genitourinary symptoms.",
      "Women who want ongoing follow-up rather than a one-time prescription.",
    ],
    whatToExpect: [
      "Schedule a women's hormone consultation.",
      "Review history, symptoms, prior labs and risk factors.",
      "Discuss treatment options if therapy is appropriate.",
      "Follow up for dose adjustments, symptom tracking and refill management.",
    ],
    safetyCallout:
      "Hormone therapy is not appropriate for every woman. Decisions consider uterine status, bleeding history, breast history, cardiovascular and thromboembolic risk, family history and treatment goals.",
    publiclyMarketable: true,
  },
  {
    slug: "weight-management",
    title: "Medical Weight Management",
    shortTitle: "Weight Management",
    href: "/services/weight-management",
    description:
      "Medical evaluation and individualized treatment for weight-related health concerns, with prescription treatment when clinically appropriate, dose management and ongoing follow-up.",
    heroDescriptor:
      "Medical weight-management care with clinical evaluation, monitoring and prescription treatment when appropriate.",
    highlights: [
      "Medical evaluation",
      "Prescription treatment when clinically appropriate",
      "Dose management and side-effect monitoring",
      "Nutrition and activity guidance",
      "Ongoing medical follow-up",
    ],
    ctaLabel: "Explore Weight Management",
    primary: true,
    icon: "scale",
    seoTitle: "Medical Weight Management in Overland Park, KS",
    seoDescription:
      "Medical weight management in Overland Park and Kansas City. Clinical evaluation, monitoring and prescription treatment when appropriate.",
    whatItIs:
      "Medical weight management combines evaluation, lifestyle guidance and prescription medication when clinically appropriate. Medication selection depends on health history, goals, contraindications, availability, cost and preference.",
    whoItsFor: [
      "Adults who may benefit from prescription weight-management treatment and ongoing monitoring.",
      "Patients who want dose titration and side-effect support rather than a one-time prescription.",
      "Kansas City-area patients who want in-person evaluation with follow-up options when appropriate.",
    ],
    whatToExpect: [
      "Schedule a weight-management consultation.",
      "Review medical history, prior weight-loss attempts and medications.",
      "Discuss treatment options if clinically appropriate.",
      "Follow up for titration, side-effect management and progress tracking.",
    ],
    safetyCallout:
      "Prescription weight-management treatment is not appropriate for every patient. We do not guarantee a specific amount of weight loss. Customized prescription formulations are not FDA-approved products.",
    publiclyMarketable: true,
  },
  {
    slug: "peptide-therapy",
    title: "Peptide Therapy",
    shortTitle: "Peptide Therapy",
    href: "/services/peptide-therapy",
    description:
      "Peptide therapy is not currently offered as a public service. Content is preserved for future launch after compliance review.",
    heroDescriptor:
      "Peptide therapy is not currently offered as a public service.",
    highlights: [
      "Not currently publicly offered",
      "Considered only after clinical evaluation when available",
      "Not a first-line offering",
    ],
    ctaLabel: "Contact Heartland",
    primary: false,
    icon: "dna",
    seoTitle: "Peptide Therapy | Heartland Hormone",
    seoDescription:
      "Peptide therapy is not currently offered as a public service at Heartland Hormone.",
    whatItIs:
      "Peptide therapy is not currently offered as a public service. When offered in the future, it may be considered for selected patients based on individual goals, available evidence, medical history and clinical appropriateness.",
    whoItsFor: [
      "This service is not currently publicly marketed.",
    ],
    whatToExpect: [
      "Contact the clinic with general questions if you are an existing patient.",
      "Peptide protocols would be discussed only after a clinical evaluation when the service becomes available.",
    ],
    safetyCallout:
      "Peptide therapy is not currently offered as a public service on this website.",
    extraDisclosure:
      "Some compounded peptide preparations are not FDA-approved medications and have not been reviewed by the FDA for safety, effectiveness or quality.",
    publiclyMarketable: false,
  },
  {
    slug: "sexual-wellness",
    title: "Sexual Wellness",
    shortTitle: "Sexual Wellness",
    href: "/services/sexual-wellness",
    description:
      "Evaluation and treatment for sexual health concerns in men and women, including erectile function and menopause-related symptoms.",
    heroDescriptor:
      "Sexual wellness care as part of men's and women's hormone programs, evaluated individually rather than promised as a standalone result.",
    highlights: [
      "Erectile function evaluation",
      "Prescription treatment when clinically appropriate",
      "Menopause-related sexual symptoms",
    ],
    ctaLabel: "Explore Sexual Wellness",
    primary: false,
    icon: "heartPulse",
    seoTitle: "Sexual Wellness Care in Overland Park, KS",
    seoDescription:
      "Sexual wellness evaluation for men and women in Overland Park and Kansas City when clinically appropriate.",
    whatItIs:
      "Sexual wellness can be evaluated as part of men's health and women's hormone care. Contributing factors are reviewed and treatment options may be discussed when clinically appropriate.",
    whoItsFor: [
      "Men with erectile changes who want a clinical evaluation.",
      "Women with low libido, vaginal dryness or discomfort during intercourse.",
    ],
    whatToExpect: [
      "Discuss symptoms in the context of a hormone or general consultation.",
      "Review contributing factors and medication options when appropriate.",
      "Follow up on response and side effects.",
    ],
    safetyCallout:
      "Sexual-wellness medications are prescribed only when clinically appropriate. Hormone changes do not explain every case of sexual dysfunction.",
    publiclyMarketable: true,
  },
  {
    slug: "wellness-healthy-aging",
    title: "Healthy Aging & Wellness",
    shortTitle: "Healthy Aging",
    href: "/services/wellness-healthy-aging",
    description:
      "Support for metabolic wellness, strength, sleep, body composition and hormone-related symptoms as you age.",
    heroDescriptor:
      "Practical support for metabolic health, sleep, strength and sustainable habits.",
    highlights: [
      "Metabolic wellness",
      "Sleep and strength",
      "Hormone-related symptoms",
      "Preventive care coordination",
    ],
    ctaLabel: "Explore Wellness Care",
    primary: false,
    icon: "leaf",
    seoTitle: "Healthy Aging & Wellness in Overland Park, KS",
    seoDescription:
      "Healthy aging support in Overland Park and Kansas City: metabolic wellness, sleep, strength, body composition and hormone-related symptoms.",
    whatItIs:
      "Wellness and healthy-aging visits focus on health risk evaluation, metabolic wellness, sleep, strength, body composition, hormone-related symptoms, preventive care coordination and sustainable lifestyle changes.",
    whoItsFor: [
      "Adults who want a practical plan around energy, body composition and long-term health habits.",
      "Patients already in hormone or weight-management care who want broader lifestyle support.",
    ],
    whatToExpect: [
      "Review of history, symptoms and relevant labs.",
      "Discussion of realistic goals and follow-up.",
      "Coordination with hormone therapy or weight management when those are part of care.",
    ],
    safetyCallout:
      "We do not claim that aging can be reversed. Plans are individualized and measured against clinical findings, not marketing claims.",
    publiclyMarketable: true,
  },
];

export const PRIMARY_SERVICES = SERVICES.filter((s) => s.primary);

export function getSecondaryServices() {
  return SERVICES.filter(
    (s) =>
      !s.primary &&
      s.publiclyMarketable &&
      (s.slug !== "peptide-therapy" || features.publicPeptideMarketing),
  );
}

export function getNavServices() {
  return SERVICES.filter(
    (s) =>
      s.publiclyMarketable &&
      (s.slug !== "peptide-therapy" || features.publicPeptideMarketing) &&
      [
        "mens-hormone-therapy",
        "womens-hormone-therapy",
        "weight-management",
        "sexual-wellness",
        ...(features.publicPeptideMarketing ? (["peptide-therapy"] as const) : []),
      ].includes(s.slug),
  );
}

export function getPublicServices() {
  return SERVICES.filter(
    (s) =>
      s.publiclyMarketable &&
      (s.slug !== "peptide-therapy" || features.publicPeptideMarketing),
  );
}

/** @deprecated Use getNavServices() for navigation */
export const NAV_SERVICES = getNavServices();

export const SECONDARY_SERVICES = getSecondaryServices();

export const DEDICATED_SERVICE_SLUGS: ServiceSlug[] = [
  "mens-hormone-therapy",
  "womens-hormone-therapy",
  "weight-management",
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function isServicePubliclyMarketable(slug: string): boolean {
  const service = getService(slug);
  if (!service) return false;
  if (service.slug === "peptide-therapy" && !features.publicPeptideMarketing) {
    return false;
  }
  return service.publiclyMarketable;
}
