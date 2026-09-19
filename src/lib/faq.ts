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
      "Yes. Heartland Hormone & Wellness Clinic is a local medical practice with a physical clinic in Overland Park, Kansas. Care is provided by appointment and includes comprehensive evaluations, treatment planning, and ongoing follow-up.",
  },
  {
    id: "location",
    category: "General",
    question: "Where is Heartland located?",
    answer: SITE.streetAddress
      ? `Heartland Hormone & Wellness Clinic is at ${SITE.streetAddress}, ${SITE.addressNote}, ${SITE.city}, ${SITE.state} ${SITE.zip}. Visits are by appointment only.`
      : `Heartland Hormone & Wellness Clinic serves patients from the ${SITE.city} / ${SITE.region} area. The physical clinic is by appointment.`,
  },
  {
    id: "initial-eval",
    category: "General",
    question: "What does the initial consultation cost?",
    answer:
      `The ${pricing.initialEvaluation.name} is ${pricing.initialEvaluation.display} and includes a comprehensive 60-minute evaluation. Laboratory testing is separate from the consultation fee.\n\nHeartland offers access to discounted laboratory testing through Quest Diagnostics. Laboratory testing purchased through Heartland must be prepaid before laboratory orders are issued. Patients who prefer to use their own health insurance benefits for laboratory testing may request a laboratory requisition for testing through their insurance plan's preferred laboratory.`,
  },
  {
    id: "insurance",
    category: "General",
    question: "Do you accept insurance?",
    answer: SITE.acceptsInsurance
      ? "Insurance billing details are reviewed during scheduling."
      : "Heartland does not bill insurance for consultation fees, membership fees, or ongoing program services. A superbill can be provided upon request for patients who wish to submit claims to their insurance plan for possible reimbursement. Coverage and reimbursement are determined by your individual insurance plan.\n\nLaboratory testing is separate from consultation and membership fees. Patients may choose to complete laboratory testing through their insurance plan or purchase discounted laboratory testing through Heartland.\n\nHeartland offers access to negotiated discounted laboratory pricing through Quest Diagnostics. Laboratory testing purchased through Heartland must be prepaid before laboratory orders are issued.",
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
    question: "Where do I log in for records, forms, and billing?",
    answer:
      "Heartland uses OptiMantra for patient forms, shared documents, invoices, and secure clinic messaging after your patient account has been created.\n\nMedical records are not stored on this website, and this website does not provide a patient portal login.\n\nNew patients should request a consultation to begin the enrollment process. Existing patients may access their portal using the invitation email provided by the clinic.",
  },
  {
    id: "billing-frequency",
    category: "General",
    question: "How often am I billed?",
    answer: `Recurring hormone programs are billed ${billingConfig.frequencyLabel} until canceled (13 cycles per year). Published program rates are listed on Pricing & Programs. Your selected program and billing terms are confirmed before enrollment.`,
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
    answer: `${pricing.mensInjections.name} is ${pricing.mensInjections.display} every 4 weeks and includes testosterone injections, supplies, shipping, quarterly follow-up and ongoing monitoring when clinically appropriate. ${pricing.mensTransdermal.name} is ${pricing.mensTransdermal.display} every 4 weeks with compounded testosterone cream. Laboratory testing is billed separately.`,
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
      "Erectile dysfunction has many potential causes. Hormone treatment is not appropriate for every case of ED and is evaluated as part of a clinical visit.",
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
    answer: `${pricing.womensTriple.name} is ${pricing.womensTriple.display} every 4 weeks and includes estradiol, progesterone and testosterone cream when clinically appropriate. ${pricing.womensAdvanced.name} is ${pricing.womensAdvanced.display} every 4 weeks with testosterone injections plus estradiol and progesterone therapy. Laboratory fees are billed separately.`,
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
      "Prescription weight-management treatment may be considered when medically appropriate following a clinical evaluation. It is not a published membership rate. Hormone program members have preferred access. Medication and laboratory fees are billed separately. Medication selection depends on health history, goals and clinical appropriateness.",
  },
  {
    id: "weight-meds-cost",
    category: "Weight Management",
    question: "Is medication included in the program cost?",
    answer: `${pricing.weightManagement.summary} Medication is billed separately from the consultation.`,
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
