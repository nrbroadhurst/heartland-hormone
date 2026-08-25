/**
 * Clinic fee schedule. Pages and homepage teasers read from this file.
 */
import {
  billingConfig,
  formatRecurringPrice,
  formatRecurringTeaser,
} from "@/lib/billing";

export const pricing = {
  initialEvaluation: {
    id: "initial-evaluation",
    name: "Initial Medical Consultation",
    invoiceDescription: "Initial Medical Consultation",
    href: "/contact",
    price: 200,
    cadence: "one-time" as const,
    display: "$200 one-time",
    teaserDisplay: "$200 one-time",
    confirmed: true,
    summary:
      "Required for new hormone care and medical weight-management patients. One-time consultation and comprehensive medical assessment. Laboratory fees are paid separately, typically before labs are ordered.",
    includes: [
      "One-time consultation, typically 45 minutes to 1 hour",
      "Comprehensive medical assessment",
      "Review of required baseline labs",
      "Discussion of an initial treatment plan when clinically appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees, which are paid by the patient before labs are ordered",
      "Recurring program fees",
      "Medication",
    ],
  },
  mensInjections: {
    id: "mens-injections",
    name: "Men's Hormone Care Program",
    invoiceDescription: "Men's Hormone Care Program",
    href: "/services/mens-hormone-therapy",
    price: 199,
    cadence: "month" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: formatRecurringPrice(199),
    teaserDisplay: formatRecurringTeaser(199),
    confirmed: true,
    summary:
      "Core men's hormone care with injection-based treatment when clinically appropriate, supplies, shipping, lab interpretation, dose management and ongoing clinical monitoring.",
    includes: [
      "Individualized men's hormone treatment when clinically appropriate",
      "Injection supplies when injections are prescribed",
      "Medication shipped to your home when a prescription is filled",
      "Routine lab interpretation",
      "Dose titration management",
      "Ongoing clinical follow-up in office or by virtual visit when appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies listed as program exclusions on this page",
    ],
  },
  mensTransdermal: {
    id: "mens-transdermal",
    name: "Men's Hormone Care Program - Level 2",
    invoiceDescription: "Men's Hormone Care Program - Level 2",
    href: "/services/mens-hormone-therapy",
    price: 229,
    cadence: "month" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: formatRecurringPrice(229),
    confirmed: true,
    summary:
      "Advanced men's hormone care with transdermal or troche formulations when clinically appropriate, plus shipping, lab interpretation and ongoing clinical monitoring.",
    includes: [
      "Individualized men's hormone treatment when clinically appropriate",
      "Pharmacy supplies for the selected formulation",
      "Medication shipped to your home when a prescription is filled",
      "Routine lab interpretation",
      "Dose titration management",
      "Ongoing clinical follow-up in office or by virtual visit when appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies listed as program exclusions on this page",
    ],
  },
  womensTriple: {
    id: "womens-triple",
    name: "Women's Hormone Care Program",
    invoiceDescription: "Women's Hormone Care Program",
    href: "/services/womens-hormone-therapy",
    price: 199,
    cadence: "month" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: formatRecurringPrice(199),
    teaserDisplay: formatRecurringTeaser(199),
    confirmed: true,
    summary:
      "Core women's hormone and menopause care with customized hormone therapy when clinically appropriate, plus shipping, lab interpretation and ongoing clinical monitoring.",
    includes: [
      "Customized hormone therapy when clinically appropriate",
      "Program supplies for included baseline medications",
      "Medication shipped to your home when a prescription is filled",
      "Routine lab interpretation",
      "Ratio and dose adjustments",
      "Ongoing clinical follow-up in office or by virtual visit when appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies listed as program exclusions on this page",
    ],
  },
  womensAdvanced: {
    id: "womens-advanced",
    name: "Women's Comprehensive Hormone Care Program",
    invoiceDescription: "Comprehensive Women's Hormone Care",
    href: "/services/womens-hormone-therapy",
    price: 229,
    cadence: "month" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: formatRecurringPrice(229),
    confirmed: true,
    summary:
      "Comprehensive women's hormone care with advanced customized formulations when clinically appropriate, plus specialized supplies, shipping and ongoing clinical monitoring.",
    includes: [
      "Advanced customized hormone therapy when clinically appropriate",
      "Specialized supplies when injections or combination formulations are used",
      "Medication shipped to your home when a prescription is filled",
      "Routine lab interpretation",
      "Ongoing clinical follow-up in office or by virtual visit when appropriate",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Therapies listed as program exclusions on this page",
    ],
  },
  weightManagement: {
    id: "weight-management",
    name: "Medical Weight Management Program",
    invoiceDescription: "Medical Weight Management Program",
    href: "/services/weight-management",
    display: "$200 consult + medication",
    teaserDisplay: "From $200 consult",
    confirmed: true,
    summary:
      "Weight-management-only patients pay a $200 initial consultation plus medication and laboratory fees. Patients already enrolled in a hormone care program are not charged a separate weight-management consult. Medication is billed separately.",
    includes: [
      "$200 initial consultation for weight-management-only patients",
      "Ongoing weight-management care as part of an active hormone care program, without a separate consult fee",
      "Prescription treatment when clinically appropriate, billed separately",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Medication cost",
      "A published medication-inclusive recurring program rate",
    ],
  },
} as const;

export const labPolicy = {
  notIncluded:
    "Laboratory testing fees are not included in recurring program or consultation fees. Labs are paid by the patient, typically before an order is placed. Patients may use insurance or discounted cash rates through Quest Diagnostics and LabCorp.",
  preAppointment:
    "Required labs are ordered after payment is received. Complete labs before the first appointment so baseline levels can be reviewed. Follow-up hormone labs must be drawn before scheduled follow-up appointments so values can be evaluated for dose changes.",
  titration:
    "The first follow-up after starting hormone care is 6 to 8 weeks later and may be in office or by virtual visit when appropriate. Hormone labs should be drawn before that visit. Dose adjustments are made as needed.",
  maintenance:
    "Once on a stable dose, routine follow-up appointments and labs occur every 6 months.",
  annual:
    "A comprehensive annual lab panel is required once per year for long-term safety monitoring and prescription renewals.",
  modality:
    "Follow-up appointments may be conducted in office or by virtual visit when clinically and legally appropriate.",
  outsideLabs:
    "Outside labs may be accepted when they include the tests needed to establish care and are no more than one month old. Additional testing may still be required.",
};

export const membershipExclusions = [
  "Human chorionic gonadotropin (hCG)",
  "Aromatase inhibitors such as anastrozole",
  "Intravaginal estradiol creams",
  "Thyroid medication such as desiccated thyroid or levothyroxine",
  "DHEA",
  "Pregnenolone",
  "Specialized specialty lab panels",
];

export const billingPolicy = {
  programCovers:
    "Recurring program fees cover ongoing clinical consultations, follow-up evaluations, protocol titration management, and core program medication supplies included in the selected tier when clinically appropriate.",
  recurring: billingConfig.recurringDisclosure,
  recurringAuthorization: billingConfig.recurringAuthorization,
  nonPayment:
    "If a recurring program fee is declined or unpaid, pending and future compounding pharmacy orders, medication shipments and clinical appointments are paused. Prescriptions are not reordered or sent until the account balance is paid in full. Persistent non-payment past 30 days may result in discharge from the practice and cancellation of active prescriptions.",
  priceAdjustments:
    "Program fees reflect current compounding pharmacy supplier costs. If market disruptions, shortages, regulatory changes or significant supplier price increases occur, program fees and medication costs may be adjusted. Patients receive at least 30 days of written notice before a price adjustment takes effect.",
  refunds:
    "Consultation and program fees are generally nonrefundable.",
  shipping:
    "Prescribed medications are typically shipped to the patient's home. Local pharmacy pickup may be available depending on the filling pharmacy.",
  treatmentChanges:
    "Clinical treatment may change based on response, safety or medical appropriateness. Any related pricing change will be disclosed before a new charge where required.",
  cancellation:
    "Patients may cancel future recurring charges through the patient portal or by contacting the clinic. Cancellation requests should be submitted before the next scheduled billing date when possible.",
  pharmacyFulfillment:
    "Prescriptions may be filled by an appropriately licensed pharmacy based on the patient's treatment plan, location and medication needs.",
};

/** Internal placeholders — not shown publicly until finalized */
export const refundPolicyPending = {
  consultationRefundability: null as string | null,
  noShowPolicy: null as string | null,
  medicationOrderCancellation: null as string | null,
  pharmacyReturnLimitation: null as string | null,
  recurringCancellationDeadline: null as string | null,
  duplicateBillingPolicy: null as string | null,
  failedPaymentPolicy: null as string | null,
};

/** Homepage teaser aliases */
export const homepagePricing = {
  mens: pricing.mensInjections,
  womens: pricing.womensTriple,
  weight: pricing.weightManagement,
};

/** Service-level invoice description reference for OptiMantra setup */
export const invoiceDescriptions = [
  pricing.initialEvaluation.invoiceDescription,
  pricing.mensInjections.invoiceDescription,
  pricing.mensTransdermal.invoiceDescription,
  pricing.womensTriple.invoiceDescription,
  pricing.womensAdvanced.invoiceDescription,
  pricing.weightManagement.invoiceDescription,
  "Clinical Follow-Up",
  "Laboratory Services",
  "Wellness Care Program",
] as const;
