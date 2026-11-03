/**
 * Clinic fee schedule shown on Pricing & Programs.
 */
import { billingConfig } from "@/lib/billing";
import { BOOKING_URL } from "@/lib/site";

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
    href: BOOKING_URL,
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
      "Laboratory testing is required before your consultation. Lab work should be completed at least 3-4 business days before your appointment so results are available for review.",
      "Heartland Wellness Discounted Labs: through our partnership with Fullscript, we offer discounted cash-pay lab panels drawn locally at Quest Diagnostics. Payment is required before your lab requisition is issued.",
      "Use Your Preferred Lab: we will email you a lab requisition that can be used with your insurance and laboratory of choice.",
      "Laboratory testing fees are separate from the consultation fee.",
    ],
  },
  mensInjections: {
    id: "mens-injections",
    name: "Male HRT Core",
    invoiceDescription: "Male HRT Core",
    href: "/services/mens-hormone-therapy",
    price: 175,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$175",
    teaserDisplay: "$175 every 4 weeks",
    intervalPhrase: "every 4 weeks",
    billingNote: "Every 4 Weeks",
    listingLine:
      "Male HRT Core — $175 every 4 weeks, injectable testosterone.",
    confirmed: true,
    summary: "Injectable testosterone.",
    includesHeading: "Program Includes",
    includes: [
      "Injectable testosterone",
      "Injection supplies",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: [
      "Laboratory testing fees (discounted Quest pricing available through Heartland)",
    ],
  },
  mensTransdermal: {
    id: "mens-transdermal",
    name: "Male HRT Premium",
    invoiceDescription: "Male HRT Premium",
    href: "/services/mens-hormone-therapy",
    price: 200,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$200",
    teaserDisplay: "$200 every 4 weeks",
    intervalPhrase: "every 4 weeks",
    billingNote: "Every 4 Weeks",
    listingLine:
      "Male HRT Premium — $200 every 4 weeks, topical testosterone cream.",
    confirmed: true,
    summary: "Topical testosterone cream, for patients who prefer a non-injectable option.",
    includesHeading: "Program Includes",
    includes: [
      "Topical testosterone cream",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: [
      "Laboratory testing fees (discounted Quest pricing available through Heartland)",
    ],
  },
  womensTriple: {
    id: "womens-triple",
    name: "Female HRT Core",
    invoiceDescription: "Female HRT Core",
    href: "/services/womens-hormone-therapy",
    price: 200,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$200",
    teaserDisplay: "$200 every 4 weeks",
    intervalPhrase: "every 4 weeks",
    billingNote: "Every 4 Weeks",
    confirmed: true,
    summary:
      "Personalized hormone therapy with oral and topical medication options, including progesterone, estrogen, and testosterone, as clinically appropriate.",
    includesHeading: "Program Includes",
    includes: [
      "Oral and topical medication options, including progesterone, estrogen, and testosterone, as clinically appropriate",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: [
      "Laboratory testing fees (discounted Quest pricing available through Heartland)",
    ],
  },
  womensAdvanced: {
    id: "womens-advanced",
    name: "Female HRT Plus",
    invoiceDescription: "Female HRT Plus",
    href: "/services/womens-hormone-therapy",
    price: 240,
    cadence: "fourWeeks" as const,
    medicationIncluded: true,
    labsIncluded: false,
    shippingIncluded: true,
    display: "$240",
    teaserDisplay: "$240 every 4 weeks",
    intervalPhrase: "every 4 weeks",
    billingNote: "Every 4 Weeks",
    confirmed: true,
    summary:
      "Personalized hormone therapy incorporating oral, topical, and injectable medications, as clinically appropriate. This program includes testosterone injections and the necessary injection supplies.",
    includesHeading: "Program Includes",
    includes: [
      "Oral, topical, and injectable medications, as clinically appropriate",
      "Testosterone injections and the necessary injection supplies",
      "Medications shipped directly to your home",
      "Quarterly follow-up visits",
      "Ongoing provider oversight",
      "Individualized treatment adjustments",
    ],
    notIncludedHeading: "Additional Costs",
    notIncluded: [
      "Laboratory testing fees (discounted Quest pricing available through Heartland)",
    ],
  },
  weightManagement: {
    id: "weight-management",
    name: "Medical Weight Management",
    invoiceDescription: "Medical Weight Management Program",
    href: "/services/weight-management",
    teaserDisplay: "By consultation",
    confirmed: true,
    summary:
      "For patients enrolled in a hormone care membership, medical weight management may be incorporated into ongoing care without an additional consultation or recurring management fee. Patients are responsible for the cost of prescribed medications and any additional laboratory testing that may be required. Patients who are not enrolled in a hormone care membership may schedule a medical weight management consultation. Medical weight management for non-members is billed separately by consultation.",
    includes: [
      "For hormone care members: incorporated without an additional consultation or recurring management fee",
      "Prescription treatment when clinically appropriate",
      "Medication and additional laboratory testing billed separately",
    ],
    notIncluded: [
      "Weight-management medication cost",
      "Additional laboratory testing",
      "A separate consultation fee for patients who are not in an active hormone care membership",
    ],
  },
} as const;

export const appointmentPolicies = {
  title: "Lab Options & Appointment Policies",
  labIntro: "Choose the option that works best for you:",
  preferredLabTitle: "Use Your Preferred Lab",
  preferredLab:
    "We will email you a lab requisition that can be used with your insurance and laboratory of choice.",
  discountedLabsTitle: "Heartland Wellness Discounted Labs",
  discountedLabs:
    "Through our partnership with Fullscript, we offer discounted cash-pay lab panels drawn locally at Quest Diagnostics. Payment is required before your lab requisition is issued.",
  timing:
    "Lab work should be completed at least 3-4 business days before your appointment to ensure results are available for review.",
  confirmationTitle: "Appointment Confirmation",
  confirmation:
    "No booking fee is required. Your appointment is reserved when you book. If you choose Heartland Wellness Discounted Labs, you pay for those labs before the requisition is issued. That payment is for the labs, not a fee to hold your visit.",
  cancellationTitle: "Cancellation & No-Show Policy",
  cancellation:
    "Please provide at least 24 hours' notice for cancellations or rescheduling. Appointments canceled with less than 24 hours' notice and no-show appointments will be charged the full consultation fee.",
  cardTitle: "Credit Card on File",
  card:
    "A credit card is not required to reserve your appointment. If you choose Heartland Wellness Discounted Labs, a valid credit card must be on file before we can issue the Fullscript / Quest lab requisition.",
} as const;

export const labPolicy = {
  intro:
    "Laboratory testing is separate from consultation and membership fees.",
  questOption: appointmentPolicies.discountedLabs,
  insuranceOption: appointmentPolicies.preferredLab,
  beforeConsult:
    "Baseline laboratory testing is required before beginning hormone therapy. Lab work should be completed at least 3-4 business days before your appointment so results are available for review.",
  pricingIntro: "Heartland's current discounted laboratory pricing is:",
  panels: [
    {
      name: "Initial comprehensive laboratory panel",
      price: "$225",
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
  ongoingIntro:
    "Laboratory monitoring is an important part of safe and effective hormone therapy.",
  ongoingSteps: [
    "An initial comprehensive laboratory panel is required before beginning treatment.",
    "Follow-up hormone testing is typically performed 6 to 8 weeks after starting therapy or following significant dose adjustments.",
    "Once treatment is established, laboratory monitoring is generally performed every 3 months until hormone levels and symptoms have stabilized.",
    "After a stable treatment regimen is achieved, laboratory monitoring may be performed every 6 months.",
    "An annual comprehensive laboratory panel is required as part of ongoing care.",
  ],
  ongoingNotes: [
    "Outside laboratory results may be accepted if they include all required tests and were completed within the previous 30 days. Additional testing may still be required.",
    "Additional laboratory testing requested by the patient or required beyond Heartland's standard hormone and thyroid monitoring panels is billed separately.",
  ],
  notIncluded:
    "Laboratory testing is separate from consultation and membership fees.\n\nUse Your Preferred Lab: we will email you a lab requisition that can be used with your insurance and laboratory of choice.\n\nHeartland Wellness Discounted Labs: through our partnership with Fullscript, we offer discounted cash-pay lab panels drawn locally at Quest Diagnostics. Payment is required before your lab requisition is issued.\n\nLab work should be completed at least 3-4 business days before your appointment.",
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
  billingIntro:
    "Memberships are billed every 4 weeks (13 billing cycles per year) and automatically renew unless canceled. To avoid the next billing cycle, cancellations must be submitted before the next scheduled billing date.",
  programCovers:
    "Hormone therapy programs are offered through a recurring membership that includes ongoing provider oversight, medication management, follow-up care, and the medications specifically included in your selected program.",
  recurring: billingConfig.recurringDisclosure,
  recurringAuthorization: billingConfig.recurringAuthorization,
  nonPayment:
    "If a recurring program fee is declined or unpaid, pending and future compounding pharmacy orders, medication shipments and clinical appointments are paused. Prescriptions are not reordered or sent until the account balance is paid in full. Persistent non-payment past 30 days may result in discharge from the practice and cancellation of active prescriptions.",
  priceAdjustments:
    "Program fees reflect current medication, compounding pharmacy, supplier, shipping, and operational costs. In the event of medication shortages, market disruptions, regulatory changes, or significant increases in supplier costs, membership fees may be adjusted. Patients will receive at least 30 days' written notice before any fee adjustment takes effect.",
  refunds:
    "Consultation fees are nonrefundable. Membership fees are nonrefundable once billed and after medications have been prescribed, processed, dispensed, or shipped.",
  shipping:
    "Prescribed medications included in a program are typically shipped to the patient's home.",
  treatmentChanges:
    "Treatment plans are individualized and may be modified based on symptoms, treatment response, laboratory findings, medication availability, safety considerations or medical necessity. Medication type, formulation, dosage and laboratory monitoring requirements may change throughout treatment.",
  cancellation:
    "Members may cancel at any time before their next scheduled billing date.",
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
