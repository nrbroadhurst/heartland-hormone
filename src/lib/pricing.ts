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
      "Your comprehensive 60-minute consultation. Required laboratory testing is separate.",
    includes: [
      "Detailed health history review",
      "Symptom and wellness assessment",
      "Review of current medications",
      "Comprehensive hormone evaluation",
      "Review of required laboratory testing",
      "Personalized treatment recommendations",
      "Development of an individualized treatment plan",
    ],
    notIncluded: ["Required laboratory testing"],
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
      "Men's testosterone optimization with injection-based treatment when clinically appropriate.",
    includes: [
      "Testosterone injections",
      "Injection supplies",
      "Convenient home delivery",
      "Quarterly telehealth follow-up visits",
      "Ongoing provider monitoring",
      "Personalized dose adjustments",
      "Access to discounted laboratory testing",
      "Access to wellness supplements",
      "Preferred access to medical weight management programs",
    ],
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
      "Men's testosterone optimization with compounded testosterone cream when clinically appropriate.",
    includes: [
      "Compounded testosterone cream",
      "Convenient home delivery",
      "Quarterly telehealth follow-up visits",
      "Ongoing provider monitoring",
      "Personalized dose adjustments",
      "Access to discounted laboratory testing",
      "Access to wellness supplements",
      "Preferred access to medical weight management programs",
    ],
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
      "Women's hormone optimization with estradiol, progesterone and testosterone cream when clinically appropriate.",
    includes: [
      "Estradiol therapy",
      "Progesterone therapy",
      "Testosterone cream",
      "Convenient home delivery",
      "Quarterly telehealth follow-up visits",
      "Ongoing provider monitoring",
      "Personalized dose adjustments",
      "Access to discounted laboratory testing",
      "Access to wellness supplements",
      "Preferred access to medical weight management programs",
    ],
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
      "Women's hormone optimization with testosterone injections plus estradiol and progesterone therapy when clinically appropriate.",
    includes: [
      "Testosterone injections and supplies",
      "Estradiol therapy",
      "Progesterone therapy",
      "Convenient home delivery",
      "Quarterly telehealth follow-up visits",
      "Ongoing provider monitoring",
      "Personalized dose adjustments",
      "Access to discounted laboratory testing",
      "Access to wellness supplements",
      "Preferred access to medical weight management programs",
    ],
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
  notIncluded:
    "Laboratory testing is not included in consultation fees or membership fees. Patients may use health insurance for eligible laboratory testing or Heartland Hormone & Wellness Clinic's discounted cash-pay laboratory option. Payment for discounted cash-pay laboratory testing is required prior to specimen collection.",
  preAppointment:
    "Baseline laboratory testing is required before beginning hormone replacement therapy. Additional laboratory testing may be required throughout treatment based on prescribed medications, dosage adjustments, treatment response and medical necessity.",
  titration:
    "Periodic laboratory monitoring is required throughout treatment to ensure safety, effectiveness and appropriate dose optimization.",
  maintenance:
    "Follow-up frequency depends on the treatment plan. Hormone programs include quarterly follow-up visits.",
  annual:
    "Additional laboratory testing may be required throughout treatment based on medical necessity.",
  modality:
    "Follow-up appointments may be conducted in office or by virtual visit when clinically and legally appropriate.",
  outsideLabs:
    "Outside labs may be accepted when they include the tests needed to establish care and are no more than one month old. Additional testing may still be required.",
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
