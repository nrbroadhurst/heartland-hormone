/**
 * Clinic fee schedule shown on Pricing & Programs.
 */
import { billingConfig } from "@/lib/billing";

export const FOUR_WEEK_NOTE = "Every 4 weeks";

export const programSharedIncludes = [
  "Ongoing provider oversight",
  "Medication management",
  "Quarterly follow-up visits",
  "Individualized treatment adjustments",
  "Included medications shipped directly to your home",
] as const;

export const additionalServices = [
  "DHEA",
  "HCG",
  "Enclomiphene",
  "Thyroid optimization",
  "Tadalafil",
  "Medical weight-loss medications",
  "Nutritional and wellness supplements",
] as const;

export const pricing = {
  initialEvaluation: {
    id: "initial-evaluation",
    name: "New Patient Consultation",
    invoiceDescription: "New Patient Consultation",
    href: "/contact",
    price: 225,
    cadence: "one-time" as const,
    display: "$225",
    teaserDisplay: "$225",
    confirmed: true,
    summary:
      "A comprehensive consultation is required before starting hormone therapy. Required laboratory testing is separate and must be completed before your appointment.",
    includesHeading: "Your 60-Minute Consultation Includes",
    includes: [
      "Detailed health history review",
      "Symptom assessment",
      "Review of current medications",
      "Comprehensive hormone evaluation",
      "Review of laboratory results",
      "Personalized treatment recommendations",
      "Development of an individualized treatment plan",
    ],
    beforeAppointmentHeading: "Required Before Your Appointment",
    beforeAppointment: [
      "Laboratory testing is required and must be completed before your consultation so results are available for review during your appointment.",
      "Heartland offers access to negotiated discounted laboratory pricing through Quest Diagnostics. Laboratory testing purchased through Heartland must be prepaid before laboratory orders are issued.",
      "Patients who prefer to use their own health insurance benefits for laboratory testing may request a laboratory requisition for testing through their insurance plan's preferred laboratory.",
      "Laboratory testing fees are separate from the consultation fee.",
    ],
  },
  mensInjections: {
    id: "mens-injections",
    name: "Men's TRT Injection Program",
    invoiceDescription: "Men's TRT Injection Program",
    href: "/services/mens-hormone-therapy",
    price: 175,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$175",
    teaserDisplay: "From $175 every 4 weeks",
    confirmed: true,
    summary:
      "Testosterone replacement therapy delivered through self-administered injections.",
    includesHeading: "Program Includes",
    includes: [
      "Testosterone injections",
      "Injection supplies",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
      "Discounted laboratory testing available through Heartland",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: ["Laboratory testing fees"],
  },
  mensTransdermal: {
    id: "mens-transdermal",
    name: "Men's TRT Cream Program",
    invoiceDescription: "Men's TRT Cream Program",
    href: "/services/mens-hormone-therapy",
    price: 225,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$225",
    teaserDisplay: "$225 every 4 weeks",
    confirmed: true,
    summary:
      "Testosterone replacement therapy delivered through compounded testosterone cream.",
    includesHeading: "Program Includes",
    includes: [
      "Compounded testosterone cream",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
      "Discounted laboratory testing available through Heartland",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: ["Laboratory testing fees"],
  },
  womensTriple: {
    id: "womens-triple",
    name: "Women's Complete BHRT Cream Program",
    invoiceDescription: "Women's Complete BHRT Cream Program",
    href: "/services/womens-hormone-therapy",
    price: 200,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$200",
    teaserDisplay: "From $200 every 4 weeks",
    confirmed: true,
    summary:
      "Hormone therapy with estradiol, progesterone, and testosterone as part of an individualized treatment plan.",
    includesHeading: "Program Includes",
    includes: [
      "Estradiol therapy",
      "Progesterone therapy",
      "Testosterone therapy",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
      "Discounted laboratory testing available through Heartland",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: ["Laboratory testing fees"],
  },
  womensAdvanced: {
    id: "womens-advanced",
    name: "Women's Hybrid BHRT Program",
    invoiceDescription: "Women's Hybrid BHRT Program",
    href: "/services/womens-hormone-therapy",
    price: 249,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$249",
    teaserDisplay: "$249 every 4 weeks",
    confirmed: true,
    summary:
      "Hormone therapy with testosterone injections together with estradiol and progesterone therapy as part of an individualized treatment plan.",
    includesHeading: "Program Includes",
    includes: [
      "Testosterone injections and injection supplies",
      "Estradiol therapy",
      "Progesterone therapy",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
      "Discounted laboratory testing available through Heartland",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: ["Laboratory testing fees"],
  },
  weightManagement: {
    id: "weight-management",
    name: "Medical Weight Management",
    invoiceDescription: "Medical Weight Management Program",
    href: "/services/weight-management",
    teaserDisplay: "By consultation",
    confirmed: true,
    summary:
      "Hormone program members have preferred access to medical weight-management care. Medication and laboratory fees are billed separately when clinically appropriate.",
    includes: [
      "Preferred access for patients in an active hormone program",
      "Prescription treatment when clinically appropriate, billed separately",
    ],
    notIncluded: [
      "Laboratory testing fees",
      "Medication cost",
      "A published medication-inclusive membership rate",
    ],
  },
} as const;

export const labPolicy = {
  intro:
    "Laboratory testing is separate from consultation and membership fees.",
  questOption:
    "Heartland offers access to discounted laboratory testing through Quest Diagnostics. Patients who choose this option purchase laboratory testing through Heartland, and payment is required before laboratory orders are issued.",
  insuranceOption:
    "Patients who prefer to use their own health insurance for laboratory testing may request a laboratory requisition for completion through their insurance plan's preferred laboratory.",
  beforeConsult:
    "Baseline laboratory testing is required before beginning hormone therapy and must be completed before your consultation so results are available for review during your appointment.",
  pricingIntro: "Heartland's current discounted laboratory pricing is:",
  panels: [
    {
      name: "Initial comprehensive laboratory panel",
      price: "$250",
    },
    {
      name: "Follow-up hormone monitoring panel",
      price: "$150",
    },
    {
      name: "Follow-up hormone and thyroid monitoring panel",
      price: "$175",
    },
  ],
  ongoing: [
    "Laboratory monitoring is an important part of safe and effective hormone therapy.",
    "An initial comprehensive laboratory panel is required before beginning treatment.",
    "Follow-up hormone testing is typically performed 6 to 8 weeks after starting therapy or following significant dose adjustments.",
    "Once treatment is established, laboratory monitoring is generally performed every 3 months until hormone levels and symptoms have stabilized.",
    "After a stable treatment regimen is achieved, laboratory monitoring may be performed every 6 months.",
    "An annual comprehensive laboratory panel is required as part of ongoing care.",
    "Outside laboratory results may be accepted if they include all required tests and were completed within the previous 30 days. Additional testing may still be required.",
    "Additional laboratory testing requested by the patient or required beyond Heartland's standard hormone and thyroid monitoring panels is billed separately.",
  ],
  notIncluded:
    "Laboratory testing is separate from consultation and membership fees. Heartland offers access to discounted laboratory testing through Quest Diagnostics. Patients who choose this option purchase laboratory testing through Heartland, and payment is required before laboratory orders are issued. Patients who prefer to use their own health insurance for laboratory testing may request a laboratory requisition for completion through their insurance plan's preferred laboratory.",
  preAppointment:
    "Baseline laboratory testing is required before beginning hormone therapy and must be completed before your consultation so results are available for review during your appointment.",
  titration:
    "Follow-up hormone testing is typically performed 6 to 8 weeks after starting therapy or following significant dose adjustments.",
  maintenance:
    "Once treatment is established, laboratory monitoring is generally performed every 3 months until hormone levels and symptoms have stabilized. After a stable treatment regimen is achieved, laboratory monitoring may be performed every 6 months.",
  annual:
    "An annual comprehensive laboratory panel is required as part of ongoing care.",
  modality:
    "Follow-up appointments may be conducted in office or by virtual visit when clinically and legally appropriate.",
  outsideLabs:
    "Outside laboratory results may be accepted if they include all required tests and were completed within the previous 30 days. Additional testing may still be required.",
};

export const membershipExclusions = additionalServices;

export const billingPolicy = {
  programCovers:
    "Hormone optimization programs are offered through a recurring membership that includes ongoing provider oversight, medication management, follow-up care, and the medications specifically included in your selected program. Program fees include provider oversight and the medications specifically listed within each program.",
  recurring: billingConfig.recurringDisclosure,
  recurringAuthorization: billingConfig.recurringAuthorization,
  nonPayment:
    "If a recurring program fee is declined or unpaid, pending and future compounding pharmacy orders, medication shipments and clinical appointments are paused. Prescriptions are not reordered or sent until the account balance is paid in full. Persistent non-payment past 30 days may result in discharge from the practice and cancellation of active prescriptions.",
  priceAdjustments:
    "Program fees reflect current medication, compounding pharmacy, supplier, shipping and operational costs. If medication shortages, market disruptions, regulatory changes or significant supplier cost increases occur, membership fees may be adjusted. Patients receive at least 30 days of written notice before a fee adjustment takes effect.",
  refunds:
    "Consultation fees are non-refundable. Membership fees are non-refundable once billed and medications have been prescribed, processed or shipped.",
  shipping:
    "Prescribed medications included in a program are typically shipped to the patient's home.",
  treatmentChanges:
    "Treatment plans are individualized and may be modified based on symptoms, treatment response, laboratory findings, medication availability, safety considerations or medical necessity. Medication type, formulation, dosage and laboratory monitoring requirements may change throughout treatment.",
  cancellation:
    "Members may cancel at any time prior to their next scheduled billing date. Memberships are billed every four weeks and automatically renew unless canceled. Because memberships are billed every 4 weeks rather than monthly, there are 13 billing cycles per year.",
  pharmacyFulfillment:
    "Prescriptions may be filled by an appropriately licensed pharmacy based on the patient's treatment plan, location and medication needs.",
  ancillaryNotIncluded:
    "Laboratory testing, specialty medications, supplements, thyroid medications, erectile dysfunction medications, weight-loss medications and other ancillary therapies are not included unless specifically stated.",
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
