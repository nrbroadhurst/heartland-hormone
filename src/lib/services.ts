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
};

export const SERVICES: Service[] = [
  {
    slug: "mens-hormone-therapy",
    title: "Men's Hormone Therapy",
    shortTitle: "Men's Hormone Care",
    href: "/services/mens-hormone-therapy",
    description:
      "Evaluation and treatment for low testosterone, fatigue, decreased strength, reduced libido, changes in body composition and other symptoms that may be associated with testosterone deficiency.",
    heroDescriptor:
      "Testosterone evaluation and replacement for appropriately selected men, with laboratory monitoring and follow-up in the Kansas City area or by telehealth.",
    highlights: [
      "Testosterone replacement therapy",
      "Ongoing laboratory monitoring",
      "Sexual wellness",
      "Tadalafil when appropriate",
      "In-person and telehealth follow-up",
    ],
    ctaLabel: "Explore Men's Hormone Care",
    primary: true,
    icon: "user",
    seoTitle: "Testosterone Replacement Therapy in Overland Park, KS",
    seoDescription:
      "TRT and men's hormone care in Overland Park and the Kansas City area, with telehealth throughout Kansas. Evaluation, monitoring and follow-up from Heartland Hormone.",
    whatItIs:
      "Men's hormone therapy at Heartland starts with a clinical evaluation for symptoms that may be related to testosterone deficiency. Testosterone replacement may be considered after history, examination when appropriate and laboratory review.",
    whoItsFor: [
      "Men with low energy, reduced libido or changes in strength and body composition.",
      "Men who want a structured evaluation rather than a one-size-fits-all protocol.",
      "Men who prefer local Kansas City-area care with telehealth follow-up when appropriate.",
    ],
    whatToExpect: [
      "Schedule a men's hormone consultation.",
      "Complete evaluation and baseline laboratory review.",
      "Discuss whether treatment is appropriate, including testosterone cypionate or other formulations.",
      "Begin follow-up, monitoring and medication adjustments if treatment is started.",
    ],
    safetyCallout:
      "Symptoms of low testosterone can have many causes. Laboratory testing and clinical evaluation are required before treatment. Testosterone is prescribed only when clinically appropriate.",
  },
  {
    slug: "womens-hormone-therapy",
    title: "Women's Hormone Therapy",
    shortTitle: "Women's Hormone Care",
    href: "/services/womens-hormone-therapy",
    description:
      "Personalized care for women experiencing perimenopause, menopause and hormone-related symptoms.",
    heroDescriptor:
      "Menopause and perimenopause care with estradiol, progesterone, vaginal estrogen and, when appropriate, testosterone.",
    highlights: [
      "Estradiol",
      "Progesterone",
      "Vaginal estrogen",
      "Testosterone when appropriate",
      "Customized treatment options",
      "Ongoing follow-up and medication adjustments",
    ],
    ctaLabel: "Explore Women's Hormone Care",
    primary: true,
    icon: "heart",
    seoTitle: "Menopause & Women's Hormone Therapy in Overland Park, KS",
    seoDescription:
      "Menopause and perimenopause care in Overland Park and Kansas City. Individualized hormone therapy with follow-up from Heartland Hormone.",
    whatItIs:
      "Women's hormone care is based on symptoms, medical history, risk factors and each patient's goals. Treatment may include FDA-approved therapies and, when an individualized need cannot be met by commercial products, customized compounded formulations.",
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
  },
  {
    slug: "weight-management",
    title: "Medical Weight Management",
    shortTitle: "Weight Management",
    href: "/services/weight-management",
    description:
      "Provider-guided medical weight management using evidence-based treatment, ongoing monitoring and prescription medication when appropriate.",
    heroDescriptor:
      "Medical weight-management care with GLP-1 and GIP/GLP-1 options when clinically appropriate, plus dose management and follow-up.",
    highlights: [
      "GLP-1 and GIP/GLP-1 treatment",
      "Semaglutide",
      "Tirzepatide",
      "Dose management",
      "Side-effect monitoring",
      "Ongoing follow-up",
    ],
    ctaLabel: "Explore Weight Management",
    primary: true,
    icon: "scale",
    seoTitle: "Medical Weight Loss in Overland Park, KS",
    seoDescription:
      "Medical weight management in Overland Park and Kansas City, including GLP-1 and GIP/GLP-1 treatment when appropriate. Semaglutide and tirzepatide options with clinical follow-up.",
    whatItIs:
      "Medical weight management combines evaluation, lifestyle guidance and prescription medication when clinically appropriate. Medication selection depends on health history, goals, contraindications, availability, cost and preference.",
    whoItsFor: [
      "Adults who may benefit from prescription weight-management treatment and ongoing monitoring.",
      "Patients who want dose titration and side-effect support rather than a one-time prescription.",
      "Kansas City-area patients who want in-person or telehealth follow-up.",
    ],
    whatToExpect: [
      "Schedule a weight-management consultation.",
      "Review medical history, prior weight-loss attempts and medications.",
      "Discuss branded or, when legally and clinically appropriate, patient-specific compounded options.",
      "Follow up for titration, side-effect management and weight tracking.",
    ],
    safetyCallout:
      "Prescription weight-loss medication is not appropriate for every patient. We do not guarantee a specific amount of weight loss. Compounded products are not equivalent to FDA-approved branded medications.",
  },
  {
    slug: "peptide-therapy",
    title: "Peptide Therapy",
    shortTitle: "Peptide Therapy",
    href: "/services/peptide-therapy",
    description:
      "Selected peptide protocols for patients whose history, goals and clinical picture support a cautious, monitored approach.",
    heroDescriptor:
      "Peptide therapy may be considered for selected patients. It is a secondary service, not a first-line offering.",
    highlights: [
      "Considered only after clinical evaluation",
      "Not appropriate for every patient",
      "Monitored over time",
    ],
    ctaLabel: "Explore Peptide Therapy",
    primary: false,
    icon: "dna",
    seoTitle: "Peptide Therapy in Overland Park, KS",
    seoDescription:
      "Peptide therapy may be considered for selected patients at Heartland Hormone in the Kansas City area. Evidence, history and clinical appropriateness guide decisions.",
    whatItIs:
      "Peptide therapy may be considered for selected patients based on individual goals, available evidence, medical history and clinical appropriateness. Some compounded peptide preparations are not FDA-approved medications and have not been reviewed by the FDA for safety, effectiveness or quality.",
    whoItsFor: [
      "Patients already established in hormone or metabolic care who want to discuss whether a peptide protocol is appropriate.",
      "Patients who understand that evidence varies by product and that peptides are not a substitute for foundational care.",
    ],
    whatToExpect: [
      "Consultation to review goals, history and whether a peptide is appropriate.",
      "Discussion of evidence, uncertainties and alternatives.",
      "Monitoring if a protocol is started.",
    ],
    safetyCallout:
      "Peptides are not portrayed here as proven treatments for every condition. Candidacy is never assumed from marketing copy.",
    extraDisclosure:
      "Some compounded peptide preparations are not FDA-approved medications and have not been reviewed by the FDA for safety, effectiveness or quality. Your provider will discuss specifics during consultation.",
  },
  {
    slug: "sexual-wellness",
    title: "Sexual Wellness",
    shortTitle: "Sexual Wellness",
    href: "/services/sexual-wellness",
    description:
      "Evaluation and treatment for sexual health concerns in men and women, including erectile function and menopause-related symptoms.",
    heroDescriptor:
      "Sexual wellness care as part of men's and women's hormone programs, not a standalone promise of results.",
    highlights: [
      "Erectile function evaluation",
      "Tadalafil when appropriate",
      "Menopause-related sexual symptoms",
    ],
    ctaLabel: "Explore Sexual Wellness",
    primary: false,
    icon: "heartPulse",
    seoTitle: "Sexual Wellness Care in Overland Park, KS",
    seoDescription:
      "Sexual wellness evaluation for men and women in Overland Park and Kansas City, including erectile function and menopause-related symptoms when clinically appropriate.",
    whatItIs:
      "Sexual wellness can be evaluated as part of men's health and women's hormone care. Erectile dysfunction has many potential causes and is not always related to testosterone. For women, vaginal estrogen and other therapies may be considered for genitourinary symptoms.",
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
      "Sexual-wellness medications are prescribed only when clinically appropriate. We do not imply that testosterone always explains erectile dysfunction.",
  },
  {
    slug: "wellness-healthy-aging",
    title: "Wellness & Healthy Aging",
    shortTitle: "Healthy Aging",
    href: "/services/wellness-healthy-aging",
    description:
      "Support for metabolic health, strength, sleep, body composition and hormone-related symptoms as you age. Aging is not reversed here.",
    heroDescriptor:
      "Practical support for healthspan: risk evaluation, metabolic health, sleep, strength and sustainable habits.",
    highlights: [
      "Metabolic health",
      "Sleep and strength",
      "Hormone-related symptoms",
      "Preventive care coordination",
    ],
    ctaLabel: "Explore Wellness Care",
    primary: false,
    icon: "leaf",
    seoTitle: "Wellness & Healthy Aging in Overland Park, KS",
    seoDescription:
      "Healthy aging support in Overland Park and Kansas City: metabolic health, sleep, strength, body composition and hormone-related symptoms.",
    whatItIs:
      "Wellness and healthy-aging visits focus on health risk evaluation, metabolic health, sleep, strength, body composition, hormone-related symptoms, preventive care coordination and sustainable lifestyle changes. This is not an anti-aging program and does not claim to reverse aging.",
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
  },
];

export const PRIMARY_SERVICES = SERVICES.filter((s) => s.primary);
export const SECONDARY_SERVICES = SERVICES.filter((s) => !s.primary);

export const NAV_SERVICES = SERVICES.filter((s) =>
  [
    "mens-hormone-therapy",
    "womens-hormone-therapy",
    "weight-management",
    "peptide-therapy",
    "sexual-wellness",
  ].includes(s.slug),
);

export const DEDICATED_SERVICE_SLUGS: ServiceSlug[] = [
  "mens-hormone-therapy",
  "womens-hormone-therapy",
  "weight-management",
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
