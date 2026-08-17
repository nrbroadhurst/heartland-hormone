import { pricing, labPolicy, billingPolicy } from "@/lib/pricing";
import { SITE } from "@/lib/site";

export type FAQEntry = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const FAQ_ENTRIES: FAQEntry[] = [
  {
    id: "in-person-telehealth",
    category: "General",
    question: "Do you offer in-person and telehealth appointments?",
    answer:
      "Yes. Patients can be seen in person in the Kansas City area or by telehealth when eligible. Follow-up appointments may be conducted by telehealth or in office. Telehealth is available for eligible patients when clinically appropriate and permitted by applicable law and prescribing requirements.",
  },
  {
    id: "location",
    category: "General",
    question: "Where is Heartland located?",
    answer: SITE.streetAddress
      ? `Heartland Hormone & Wellness Clinic is at ${SITE.streetAddress}${SITE.addressNote ? ` (${SITE.addressNote})` : ""}, ${SITE.city}, ${SITE.state}. Visits are by appointment only.`
      : `Heartland Hormone & Wellness Clinic serves patients from the ${SITE.city} / ${SITE.region} area, with telehealth throughout ${SITE.stateName}. The physical clinic is by appointment. Street address and office hours are shared when you book.`,
  },
  {
    id: "initial-eval",
    category: "General",
    question: "What does the initial evaluation cost?",
    answer: `${pricing.initialEvaluation.name} is ${pricing.initialEvaluation.display} and includes a one-time consultation and comprehensive medical assessment. Initial lab panels must be completed before the first appointment. Laboratory fees are separate.`,
  },
  {
    id: "insurance",
    category: "General",
    question: "Do you accept insurance?",
    answer: SITE.acceptsInsurance
      ? "Insurance billing details are reviewed during scheduling."
      : `Heartland uses cash-pay membership programs rather than insurance billing for monthly fees. ${SITE.superbillAvailable ? "A superbill can be provided on request for you to submit to your plan." : ""} Laboratory testing may be billed through insurance or paid at discounted cash rates through Quest Diagnostics and LabCorp.`,
  },
  {
    id: "hsa-fsa",
    category: "General",
    question: "Can I use HSA or FSA funds?",
    answer:
      "Some patients use HSA or FSA funds for eligible medical expenses. Eligibility depends on your plan. Check with your plan administrator before assuming coverage.",
  },
  {
    id: "outside-labs",
    category: "General",
    question: "Can I use lab results from another provider?",
    answer:
      "Recent outside labs may be reviewed when they are appropriate, complete and recent enough to support a clinical decision. Additional testing may still be needed before starting or continuing therapy.",
  },
  {
    id: "lab-cost",
    category: "General",
    question: "Are labs included in the monthly membership?",
    answer: labPolicy.notIncluded,
  },
  {
    id: "low-t",
    category: "Men's Hormone Therapy",
    question: "How do I know if I have low testosterone?",
    answer:
      "Symptoms such as low energy, reduced libido or changes in body composition can have many causes. Low testosterone is diagnosed with a clinical evaluation plus laboratory testing, not symptoms alone.",
  },
  {
    id: "trt-included",
    category: "Men's Hormone Therapy",
    question: "Is testosterone included in the monthly program?",
    answer: `${pricing.mensInjections.name} is ${pricing.mensInjections.display} and includes testosterone cypionate, supplies, shipping, routine lab interpretation and ongoing provider care when clinically appropriate. ${pricing.mensTransdermal.name} is ${pricing.mensTransdermal.display} for compounded cream or troche options. Therapies such as hCG, anastrozole and other add-ons listed on the pricing page are not included.`,
  },
  {
    id: "lab-frequency",
    category: "Men's Hormone Therapy",
    question: "How often are labs checked?",
    answer: `${labPolicy.titration} ${labPolicy.maintenance} ${labPolicy.annual} Follow-up labs should be completed before scheduled follow-up appointments.`,
  },
  {
    id: "trt-ed",
    category: "Men's Hormone Therapy",
    question: "Can TRT help erectile dysfunction?",
    answer:
      "Erectile dysfunction has many potential causes. Testosterone replacement is not a treatment for every case of ED and is evaluated separately from sexual-wellness medications.",
  },
  {
    id: "tadalafil",
    category: "Men's Hormone Therapy",
    question: "Do you prescribe tadalafil?",
    answer:
      "Tadalafil and similar prescription treatments may be prescribed when clinically appropriate. They are not included in the published HRT membership tiers and are priced separately.",
  },
  {
    id: "perimenopause",
    category: "Women's Hormone Therapy",
    question: "Do you treat perimenopause as well as menopause?",
    answer:
      "Yes. Perimenopause and menopause are both evaluated when symptoms and history support care.",
  },
  {
    id: "which-hormones",
    category: "Women's Hormone Therapy",
    question: "What hormones do you prescribe?",
    answer:
      "Depending on the patient and membership tier, treatment may include estradiol, progesterone and testosterone. Tier 1 includes daily topical estradiol cream, bedtime oral micronized progesterone and daily topical testosterone cream when clinically appropriate. Tier 2 includes combination troches or subcutaneous testosterone micro-injections with oral progesterone and topical estradiol.",
  },
  {
    id: "compounded",
    category: "Women's Hormone Therapy",
    question: "Do you offer compounded hormones?",
    answer:
      "Yes, when clinically appropriate. Published membership tiers include compounded or prescription medications as listed on the pricing page. Compounded hormones are not described as safer, more natural or free of risk.",
  },
  {
    id: "women-testosterone",
    category: "Women's Hormone Therapy",
    question: "Is testosterone used in women?",
    answer:
      "Testosterone may be included in women's HRT membership tiers when clinically appropriate. It is not a routine treatment for every menopausal patient.",
  },
  {
    id: "women-meds-included",
    category: "Women's Hormone Therapy",
    question: "Are medications included?",
    answer: `${pricing.womensTriple.name} is ${pricing.womensTriple.display} and includes the three baseline medications listed on the pricing page when clinically appropriate. ${pricing.womensAdvanced.name} is ${pricing.womensAdvanced.display} for advanced troche or micro-injection options. Laboratory fees and therapies listed as exclusions are billed separately.`,
  },
  {
    id: "membership-billing",
    category: "General",
    question: "How does monthly membership billing work?",
    answer: `${billingPolicy.recurring} ${billingPolicy.nonPayment}`,
  },
  {
    id: "semaglutide",
    category: "Weight Management",
    question: "Do you prescribe semaglutide?",
    answer:
      "Semaglutide may be considered when clinically appropriate following a medical evaluation. Weight-management pricing is not part of the published HRT fee schedule and is reviewed during consultation.",
  },
  {
    id: "tirzepatide",
    category: "Weight Management",
    question: "Do you prescribe tirzepatide?",
    answer:
      "Tirzepatide may be considered when clinically appropriate following a medical evaluation. Weight-management pricing is not part of the published HRT fee schedule and is reviewed during consultation.",
  },
  {
    id: "weight-meds-cost",
    category: "Weight Management",
    question: "Is medication included in the monthly cost?",
    answer: `${pricing.weightManagement.display}. Weight-management pricing is discussed during a separate consultation and is not listed in the current HRT membership fee schedule.`,
  },
  {
    id: "weight-monthly-visits",
    category: "Weight Management",
    question: "Do I have to come into the office every month?",
    answer:
      "Follow-up frequency depends on the treatment plan. Telehealth follow-up may be used when clinically appropriate. Some visits may still need to be in person.",
  },
];

export const FAQ_CATEGORIES = [
  "General",
  "Men's Hormone Therapy",
  "Women's Hormone Therapy",
  "Weight Management",
] as const;
