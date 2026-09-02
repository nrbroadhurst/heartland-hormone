export const clinic = {
  name: "Heartland Hormone & Wellness Clinic",
  shortName: "Heartland Hormone",
  legalName: "Heartland Hormone & Wellness Clinic LLC",
  tagline: "Thoughtful hormone care in Overland Park.",
  phoneDisplay: "(913) 915-4569",
  phoneHref: "tel:+19139154569",
  addressLine1: "14400 Metcalf Ave, Floor 1",
  addressLine2: "Overland Park, KS 66223",
  mapsUrl:
    "https://maps.google.com/?q=14400+Metcalf+Ave+Overland+Park+KS+66223",
  hours: "Visits by appointment",
  owner: {
    name: "Sherry L. Broadhurst",
    credential: "NP, AGACNP-BC",
    title: "Owner & Nurse Practitioner",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const visitReasons = [
  { value: "womens-hormones", label: "Women’s hormone health" },
  { value: "mens-hormones", label: "Men’s hormone health" },
  { value: "thyroid", label: "Thyroid or metabolic concerns" },
  { value: "fatigue", label: "Fatigue, sleep, or mood" },
  { value: "follow-up", label: "Follow-up or labs" },
  { value: "other", label: "Something else" },
] as const;

export const services = [
  {
    slug: "womens-hormones",
    title: "Women’s hormone health",
    summary:
      "Perimenopause, menopause, and cycle changes that leave you tired, foggy, or not quite yourself.",
    details:
      "We start with a full conversation and labs, then talk through options such as bioidentical hormone replacement when it is medically appropriate. The goal is relief you can feel — sleep, mood, energy, and comfort — without rushing a prescription.",
  },
  {
    slug: "mens-hormones",
    title: "Men’s hormone health",
    summary:
      "Low energy, slower recovery, and changes in drive that may point to testosterone or related hormones.",
    details:
      "A careful evaluation looks at symptoms, exam findings, and laboratory data together. If treatment is indicated, we build a plan you can follow and adjust over time, with follow-up that is actually scheduled.",
  },
  {
    slug: "thyroid-metabolic",
    title: "Thyroid & metabolic support",
    summary:
      "Weight that will not budge, cold intolerance, or labs that were called “normal” while you still feel off.",
    details:
      "Thyroid, insulin, and related markers are reviewed in context — not as isolated numbers. We explain what the results mean and what is worth treating, watching, or leaving alone.",
  },
  {
    slug: "labs",
    title: "Labs that actually get reviewed",
    summary:
      "A workup ordered with a plan in mind, then a visit dedicated to walking through the results with you.",
    details:
      "Hormone care without labs is guessing. We order what the visit indicates, review the results with you, and keep copies so the next visit starts from a shared record — not a stack of unread printouts.",
  },
] as const;

export const faqs = [
  {
    question: "Who is this clinic for?",
    answer:
      "Adults who want unhurried hormone and wellness care in the Kansas City area. Many patients come in during perimenopause or menopause, after “normal” labs that still left them unwell, or when energy, sleep, mood, or libido have changed.",
  },
  {
    question: "Who will I see?",
    answer:
      "Sherry Broadhurst, NP, AGACNP-BC owns and sees patients at Heartland Hormone & Wellness Clinic. She is a board-certified Adult-Gerontology Acute Care Nurse Practitioner.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No referral is required to request a visit. Call the clinic or use the form on this site. We will let you know what to bring and whether labs should be drawn before you come in.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "Coverage varies by plan and visit type. Call (913) 915-4569 before your appointment so we can talk through payment, HSA/FSA use, and what your plan may or may not cover. Do not assume a visit is billed the same way as a hospital or primary-care appointment.",
  },
  {
    question: "Where are you located?",
    answer:
      "14400 Metcalf Ave, Floor 1, Overland Park, KS 66223. Visits are by appointment. Parking and suite details are confirmed when you schedule.",
  },
] as const;
