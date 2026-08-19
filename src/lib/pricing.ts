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
      "Required for new HRT and medical weight-management patients. One-time consultation and comprehensive medical assessment. Laboratory fees are paid separately, typically before labs are ordered.",
    includes: [
      "One-time consultation, typically 45 minutes to 1 hour",
      "Comprehensive medical assessment",
      "Review of required baseline labs",
      "Discussion of an initial treatment plan when clinically appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees, which are paid by the patient before labs are ordered",
      "Monthly membership",
      "Medication",
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
      "Syringes, needles and alcohol wipes",
      "Medication shipped to your home when a prescription is filled",
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
      "Medication shipped to your home when a prescription is filled",
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
      "Medication shipped to your home when a prescription is filled",
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
      "Custom single-matrix or specialized injection supplies, including syringes, needles and alcohol wipes when injections are used",
      "Medication shipped to your home when a prescription is filled",
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
    display: "$200 consult + medication",
    teaserDisplay: "From $200 consult",
    confirmed: true,
    summary:
      "Weight-management-only patients pay a $200 initial consultation plus medication and laboratory fees. Patients already on an HRT membership are not charged a separate weight-management consult. Medication is billed separately.",
    includes: [
      "$200 initial consultation for weight-management-only patients",
      "Ongoing weight-management as part of an active HRT membership, without a separate consult fee",
      "Prescription medication when clinically appropriate, billed separately",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Medication cost",
      "A published monthly medication-inclusive rate",
    ],
  },
} as const;

export const labPolicy = {
  notIncluded:
    "Laboratory testing fees are not included in monthly membership or consultation fees. Labs are paid by the patient, typically before an order is placed. Patients may use insurance or discounted cash rates through Quest Diagnostics and LabCorp.",
  preAppointment:
    "Required labs are ordered after payment is received. Complete labs before the first appointment so baseline levels can be reviewed. Follow-up hormone labs must be drawn before scheduled follow-up appointments so values can be evaluated for dose changes.",
  titration:
    "The first follow-up after starting HRT is 6 to 8 weeks later and may be in office or by telehealth. Hormone labs should be drawn before that visit. Dose adjustments are made as needed.",
  maintenance:
    "Once on a stable dose, routine follow-up appointments and labs occur every 6 months.",
  annual:
    "A comprehensive annual lab panel is required once per year for long-term safety monitoring and prescription renewals.",
  modality:
    "Follow-up appointments may be conducted by telehealth or in office.",
  outsideLabs:
    "Outside labs may be accepted when they include the tests needed to establish care and are no more than one month old. Additional testing may still be required.",
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
    "Monthly membership fees are processed automatically on the same day each month. A card on file is required for autopay. An active, paid membership is required for ongoing clinical care, laboratory management and prescription refills.",
  nonPayment:
    "If a monthly fee is declined or unpaid, pending and future compounding pharmacy orders, medication shipments and clinical appointments are paused. Prescriptions are not reordered or sent until the account balance is paid in full. Persistent non-payment past 30 days may result in discharge from the practice and cancellation of active prescriptions.",
  priceAdjustments:
    "Base monthly fees reflect current compounding pharmacy supplier costs. If market disruptions, shortages, regulatory changes or significant supplier price increases occur, membership fees and medication costs may be adjusted. Patients receive at least 30 days of written notice before a price adjustment takes effect.",
  refunds:
    "Consultation and membership fees are generally nonrefundable.",
  shipping:
    "Prescribed hormone medications are typically shipped to the patient's home. Local pharmacy pickup may be available depending on the filling pharmacy.",
};

/** Homepage teaser aliases */
export const homepagePricing = {
  mens: pricing.mensInjections,
  womens: pricing.womensTriple,
  weight: pricing.weightManagement,
};
