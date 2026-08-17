/**
 * Clinic fee schedule. Pages and homepage teasers read from this file.
 */
export const pricing = {
  initialEvaluation: {
    id: "initial-evaluation",
    name: "Initial Evaluation",
    href: "/contact",
    price: 200,
    cadence: "one-time" as const,
    display: "$200 one-time",
    teaserDisplay: "$200 one-time",
    confirmed: true,
    summary:
      "One-time consultation and comprehensive medical assessment. Initial lab panels must be completed before the first appointment so baseline levels can be reviewed and an initial treatment plan can be discussed.",
    includes: [
      "One-time consultation",
      "Comprehensive medical assessment",
      "Review of required baseline labs",
      "Discussion of an initial treatment plan when clinically appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Monthly membership",
      "Medication and supplies",
    ],
  },
  mensInjections: {
    id: "mens-injections",
    name: "Male HRT Tier 1: Base Injections",
    href: "/services/mens-hormone-therapy",
    price: 199,
    cadence: "month" as const,
    medicationIncluded: true,
    display: "$199/month",
    teaserDisplay: "From $199/month",
    confirmed: true,
    summary:
      "Testosterone cypionate injections, supplies, shipping, lab interpretation, dose changes and ongoing provider care.",
    includes: [
      "Testosterone cypionate (subcutaneous or intramuscular) when clinically appropriate",
      "Vials, syringes, needles and alcohol pads",
      "Monthly shipping",
      "Routine lab interpretation",
      "Dose titration management",
      "Ongoing provider care by telehealth or in office",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies outside the core testosterone protocol listed below",
    ],
  },
  mensTransdermal: {
    id: "mens-transdermal",
    name: "Male HRT Tier 2: Transdermal Cream or Troche",
    href: "/services/mens-hormone-therapy",
    price: 229,
    cadence: "month" as const,
    medicationIncluded: true,
    display: "$229/month",
    confirmed: true,
    summary:
      "Compounded scrotal testosterone cream or sublingual testosterone troches, with shipping, lab interpretation and ongoing provider care.",
    includes: [
      "Compounded scrotal testosterone cream (20%) in a Topi-CLICK dispenser, or sublingual testosterone troches (typically twice daily), when clinically appropriate",
      "Monthly pharmacy supplies",
      "Shipping",
      "Routine lab interpretation",
      "Dose titration management",
      "Ongoing provider care by telehealth or in office",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies outside the core testosterone protocol listed below",
    ],
  },
  womensTriple: {
    id: "womens-triple",
    name: "Female HRT Tier 1: Standard Triple Therapy",
    href: "/services/womens-hormone-therapy",
    price: 199,
    cadence: "month" as const,
    medicationIncluded: true,
    display: "$199/month",
    teaserDisplay: "From $199/month",
    confirmed: true,
    summary:
      "Daily topical estradiol cream, bedtime oral micronized progesterone capsules and daily topical testosterone cream, plus shipping, lab interpretation and ongoing provider care.",
    includes: [
      "Daily topical estradiol cream when clinically appropriate",
      "Daily bedtime oral micronized progesterone capsules when clinically appropriate",
      "Daily topical testosterone cream (0.5% to 1%) when clinically appropriate",
      "Monthly supplies for these three baseline medications",
      "Shipping",
      "Routine lab interpretation",
      "Ratio adjustments",
      "Ongoing provider care by telehealth or in office",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Intravaginal estradiol and other therapies listed as exclusions below",
    ],
  },
  womensAdvanced: {
    id: "womens-advanced",
    name: "Female HRT Tier 2: Advanced Formulations",
    href: "/services/womens-hormone-therapy",
    price: 229,
    cadence: "month" as const,
    medicationIncluded: true,
    display: "$229/month",
    confirmed: true,
    summary:
      "Combination troches or subcutaneous testosterone micro-injections with oral progesterone and topical estradiol, plus specialized supplies, shipping and ongoing provider care.",
    includes: [
      "All-in-one combination troches (estradiol / progesterone / testosterone), or subcutaneous testosterone micro-injections paired with oral progesterone and topical estradiol, when clinically appropriate",
      "Custom single-matrix or specialized injection supplies",
      "Shipping",
      "Routine lab interpretation",
      "Ongoing provider care by telehealth or in office",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies listed as exclusions below",
    ],
  },
  weightManagement: {
    id: "weight-management",
    name: "Medical Weight Management",
    href: "/services/weight-management",
    display: "Pricing provided at consultation",
    teaserDisplay: "Pricing at consultation",
    confirmed: false,
    summary:
      "Medical weight-management pricing is reviewed during consultation. It is not part of the published HRT membership fee schedule.",
    includes: [
      "Clinical evaluation when you schedule a weight-management visit",
      "Discussion of medication options when clinically appropriate",
    ],
    notIncluded: [
      "A published monthly rate is not listed until this program is added to the clinic fee schedule",
    ],
  },
} as const;

export const labPolicy = {
  notIncluded:
    "Laboratory testing fees are not included in monthly membership or consultation fees. Patients may bill lab work through their health insurance or use discounted cash-based rates through Quest Diagnostics and LabCorp.",
  preAppointment:
    "Initial lab panels must be completed before the first appointment so baseline levels can be reviewed. Follow-up laboratory testing must be completed before scheduled follow-up appointments so values can be evaluated in real time for dose changes.",
  titration:
    "During the initial titration phase, follow-up labs and appointments occur 6 to 8 weeks after starting therapy and after any later dose adjustment.",
  maintenance:
    "Once on a stable dose, routine follow-up appointments and labs occur every 6 months.",
  annual:
    "A comprehensive annual lab panel is required once per year for long-term safety monitoring and prescription renewals.",
  modality:
    "Follow-up appointments may be conducted by telehealth or in office.",
};

export const membershipExclusions = [
  "Human chorionic gonadotropin (hCG)",
  "Aromatase inhibitors such as anastrozole (Arimidex)",
  "Intravaginal estradiol creams",
  "Thyroid medication such as desiccated thyroid (Armour Thyroid) or levothyroxine (Synthroid)",
  "DHEA",
  "Pregnenolone",
  "Specialized specialty lab panels",
];

export const billingPolicy = {
  membershipCovers:
    "Monthly membership covers ongoing clinical consultations, follow-up evaluations (telehealth or in office), protocol titration management, and core monthly hormone medication supplies included in the selected tier (testosterone, and for women's programs progesterone and estradiol as listed).",
  recurring:
    "Monthly membership fees are processed automatically on the designated billing date. An active, paid membership is required for ongoing clinical care, laboratory management and prescription refills.",
  nonPayment:
    "If a monthly fee is declined or unpaid, pending and future compounding pharmacy orders, medication shipments and clinical appointments are paused. Prescriptions are not reordered or sent until the account balance is paid in full. Persistent non-payment past 30 days may result in discharge from the practice and cancellation of active prescriptions.",
  priceAdjustments:
    "Base monthly fees reflect current compounding pharmacy supplier costs. If market disruptions, shortages, regulatory changes or significant supplier price increases occur, membership fees and medication costs may be adjusted. Patients receive at least 30 days of written notice before a price adjustment takes effect.",
};

/** Homepage teaser aliases */
export const homepagePricing = {
  mens: pricing.mensInjections,
  womens: pricing.womensTriple,
  weight: pricing.weightManagement,
};
