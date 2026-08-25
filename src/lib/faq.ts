import { pricing, labPolicy, billingPolicy } from "@/lib/pricing";
import { billingConfig } from "@/lib/billing";
import { SITE } from "@/lib/site";

export type FAQEntry = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const FAQ_ENTRIES: FAQEntry[] = [
  {
    id: "in-person-virtual",
    category: "General",
    question: "Do you offer in-person appointments?",
    answer:
      "Yes. Heartland is a local Kansas medical practice with a physical clinic in the Kansas City area. An in-person first visit is preferred. Virtual follow-up may be available for eligible Kansas and Missouri patients when clinically and legally appropriate. Controlled substances may require at least one in-person visit per year.",
  },
  {
    id: "location",
    category: "General",
    question: "Where is Heartland located?",
    answer: SITE.streetAddress
      ? `Heartland Hormone & Wellness Clinic is at ${SITE.streetAddress}${SITE.addressNote ? ` (${SITE.addressNote})` : ""}, ${SITE.city}, ${SITE.state}. Visits are by appointment only.`
      : `Heartland Hormone & Wellness Clinic serves patients from the ${SITE.city} / ${SITE.region} area. The physical clinic is by appointment.`,
  },
  {
    id: "initial-eval",
    category: "General",
    question: "What does the initial consultation cost?",
    answer: `${pricing.initialEvaluation.name} is ${pricing.initialEvaluation.display} for new hormone care and medical weight-management patients. Laboratory fees are separate and are typically paid before labs are ordered through Quest Diagnostics or LabCorp.`,
  },
  {
    id: "insurance",
    category: "General",
    question: "Do you accept insurance?",
    answer: SITE.acceptsInsurance
      ? "Insurance billing details are reviewed during scheduling."
      : `Heartland uses cash-pay clinical programs rather than insurance billing for recurring program fees. ${SITE.superbillAvailable ? "A superbill can be provided on request for you to submit to your plan." : ""} Laboratory testing may be billed through insurance or paid at discounted cash rates through Quest Diagnostics and LabCorp.`,
  },
  {
    id: "hsa-fsa",
    category: "General",
    question: "Can I use HSA or FSA funds?",
    answer:
      "Some patients use HSA or FSA funds for eligible medical expenses. Eligibility depends on your plan. Check with your plan administrator before assuming coverage.",
  },
  {
    id: "patient-portal",
    category: "General",
    question: "Where do I log in for records, forms and bills?",
    answer:
      "Heartland uses a secure OptiMantra patient portal for forms, shared documents, invoices and clinic messaging. Medical records are not stored on this website. Use the Patient Portal link in the header after your account has been created. New patients should request a consultation first.",
  },
  {
    id: "billing-frequency",
    category: "General",
    question: "How often am I billed?",
    answer: `Recurring Heartland programs are billed ${billingConfig.frequencyLabel}. ${billingConfig.cyclesPerYearLabel}. Your exact program price and billing terms will be shown before enrollment.`,
  },
  {
    id: "cancel-program",
    category: "General",
    question: "Can I cancel my program?",
    answer: `${billingPolicy.cancellation} Use the Patient Portal to manage your account or contact the clinic at ${SITE.phone}. See the recurring billing and cancellation policy for details.`,
  },
  {
    id: "treatment-changes",
    category: "General",
    question: "What happens if my treatment changes?",
    answer: billingPolicy.treatmentChanges,
  },
  {
    id: "outside-labs",
    category: "General",
    question: "Can I use lab results from another provider?",
    answer:
      "Outside labs may be accepted when they include the tests needed to establish care and are no more than one month old. Additional testing may still be required.",
  },
  {
    id: "lab-cost",
    category: "General",
    question: "Are labs included in the program fee?",
    answer: labPolicy.notIncluded,
  },
  {
    id: "low-t",
    category: "Men's Hormone Care",
    question: "How do I know if I have low testosterone?",
    answer:
      "Symptoms such as low energy, reduced libido or changes in body composition can have many causes. Low testosterone is diagnosed with a clinical evaluation plus laboratory testing, not symptoms alone.",
  },
  {
    id: "mens-program-included",
    category: "Men's Hormone Care",
    question: "What is included in the men's hormone care program?",
    answer: `${pricing.mensInjections.name} is ${pricing.mensInjections.display} and includes individualized men's hormone care, supplies when applicable, shipping, routine lab interpretation and ongoing clinical monitoring when clinically appropriate. ${pricing.mensTransdermal.name} is ${pricing.mensTransdermal.display} for advanced formulation options. Therapies listed as program exclusions on the pricing page are billed separately.`,
  },
  {
    id: "lab-frequency",
    category: "Men's Hormone Care",
    question: "How often are labs checked?",
    answer: `${labPolicy.titration} ${labPolicy.maintenance} ${labPolicy.annual} Follow-up labs should be completed before scheduled follow-up appointments.`,
  },
  {
    id: "trt-ed",
    category: "Men's Hormone Care",
    question: "Can hormone treatment help erectile dysfunction?",
    answer:
      "Erectile dysfunction has many potential causes. Hormone treatment is not appropriate for every case of ED and is evaluated separately from sexual-wellness medications.",
  },
  {
    id: "sexual-wellness-meds",
    category: "Men's Hormone Care",
    question: "Do you prescribe sexual wellness medications?",
    answer:
      "Prescription sexual-wellness treatments may be considered when clinically appropriate following evaluation. They are not included in the published hormone care program tiers. Add-on pricing is reviewed during consultation.",
  },
  {
    id: "perimenopause",
    category: "Women's Hormone & Menopause Care",
    question: "Do you treat perimenopause as well as menopause?",
    answer:
      "Yes. Perimenopause and menopause are both evaluated when symptoms and history support care.",
  },
  {
    id: "which-hormones",
    category: "Women's Hormone & Menopause Care",
    question: "What does women's hormone care include?",
    answer:
      "Depending on the patient and program tier, customized hormone therapy may be considered when clinically appropriate. Specific prescriptions, strengths and combinations are determined during clinical evaluation and documented in your medical record, not on this public website.",
  },
  {
    id: "compounded",
    category: "Women's Hormone & Menopause Care",
    question: "Do you offer customized hormone therapy?",
    answer:
      "Customized prescription formulations may be considered when clinically appropriate and legally available. Compounded hormones are not described as safer, more natural or free of risk.",
  },
  {
    id: "women-testosterone",
    category: "Women's Hormone & Menopause Care",
    question: "Is testosterone used in women?",
    answer:
      "Testosterone may be included in women's hormone care programs when clinically appropriate. It is not a routine treatment for every menopausal patient.",
  },
  {
    id: "women-meds-included",
    category: "Women's Hormone & Menopause Care",
    question: "Are medications included in the program?",
    answer: `${pricing.womensTriple.name} is ${pricing.womensTriple.display} and includes program medications when clinically appropriate. ${pricing.womensAdvanced.name} is ${pricing.womensAdvanced.display} for comprehensive hormone care options. Laboratory fees and therapies listed as exclusions are billed separately.`,
  },
  {
    id: "program-billing",
    category: "General",
    question: "How does recurring program billing work?",
    answer: `${billingPolicy.recurring} ${billingPolicy.nonPayment} ${billingPolicy.refunds}`,
  },
  {
    id: "weight-treatment",
    category: "Weight Management",
    question: "What prescription treatment is available for weight management?",
    answer:
      "Prescription weight-management treatment may be considered when medically appropriate following a clinical evaluation. Weight-management-only patients pay a $200 consultation plus medication and laboratory fees. Medication selection depends on health history, goals and clinical appropriateness.",
  },
  {
    id: "weight-meds-cost",
    category: "Weight Management",
    question: "Is medication included in the program cost?",
    answer: `${pricing.weightManagement.summary} Medication is billed separately from the $200 consult.`,
  },
  {
    id: "weight-follow-up",
    category: "Weight Management",
    question: "How often do I need follow-up visits?",
    answer:
      "Follow-up frequency depends on the treatment plan. Virtual follow-up may be used when clinically and legally appropriate. Some visits may still need to be in person.",
  },
];

export const FAQ_CATEGORIES = [
  "General",
  "Men's Hormone Care",
  "Women's Hormone & Menopause Care",
  "Weight Management",
] as const;
