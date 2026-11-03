import { pricing, labPolicy, appointmentPolicies } from "@/lib/pricing";
import { CLINIC_ADDRESS, SITE } from "@/lib/site";

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
    answer: `Heartland Hormone & Wellness Clinic is at ${CLINIC_ADDRESS}. Visits are by appointment only.`,
  },
  {
    id: "initial-eval",
    category: "General",
    question: "What does the initial consultation cost?",
    answer:
      `The ${pricing.initialEvaluation.name} is ${pricing.initialEvaluation.display} and includes a comprehensive 60-minute evaluation. Laboratory testing is separate from the consultation fee.\n\n${appointmentPolicies.preferredLabTitle}: ${appointmentPolicies.preferredLab}\n\n${appointmentPolicies.discountedLabsTitle}: ${appointmentPolicies.discountedLabs}\n\n${appointmentPolicies.timing}`,
  },
  {
    id: "insurance",
    category: "General",
    question: "Do you accept insurance?",
    answer: SITE.acceptsInsurance
      ? "Insurance billing details are reviewed during scheduling."
      : `Heartland does not bill insurance for consultation fees, membership fees, or ongoing program services. A superbill can be provided upon request for patients who wish to submit claims to their insurance plan for possible reimbursement. Coverage and reimbursement are determined by your individual insurance plan.\n\nLaboratory testing is separate from consultation and membership fees.\n\n${appointmentPolicies.preferredLabTitle}: ${appointmentPolicies.preferredLab}\n\n${appointmentPolicies.discountedLabsTitle}: ${appointmentPolicies.discountedLabs}`,
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
      "Heartland uses OptiMantra for patient forms, shared documents, invoices, and secure clinic messaging.\n\nMedical records are not stored on this website. Existing patients can log in through Patient Access. New patients receive a portal invite after booking a consultation.",
  },
  {
    id: "billing-frequency",
    category: "General",
    question: "How often am I billed?",
    answer:
      "Recurring hormone care memberships are billed every 4 weeks and automatically renew unless canceled. Because memberships are billed every 4 weeks rather than monthly, there are 13 billing cycles per year.\n\nIf a recurring program fee is declined or remains unpaid, medication orders, refills, shipments, and scheduled clinical services may be paused until the account is paid in full. Accounts unpaid for more than 30 days may be discharged from the practice.\n\nConsultation fees are nonrefundable. Membership fees are nonrefundable once billed and after medications have been prescribed, processed, dispensed, or shipped.\n\nCurrent pricing is on the Pricing & Programs page. Your selected program, fees, and billing terms are reviewed before enrollment.",
  },
  {
    id: "cancel-program",
    category: "General",
    question: "Can I cancel my program?",
    answer:
      `Members may cancel at any time before their next scheduled billing date by calling ${SITE.phone} or emailing the clinic at ${SITE.email}.\n\nTo avoid the next billing cycle, the clinic must receive your cancellation before the next scheduled billing date.\n\nSee the Recurring Billing & Cancellation Policy for additional details.`,
  },
  {
    id: "treatment-changes",
    category: "General",
    question: "What happens if my treatment changes?",
    answer:
      "Treatment plans are individualized and may be adjusted over time based on symptoms, treatment response, laboratory findings, medication availability, safety considerations, and clinical needs. Medication type, formulation, dosage, and laboratory monitoring requirements may change throughout treatment.",
  },
  {
    id: "outside-labs",
    category: "General",
    question: "Can I use lab results from another provider?",
    answer:
      "Outside laboratory results may be accepted if they include the tests required to establish care and were completed within the previous 30 days. Additional testing may still be required.",
  },
  {
    id: "lab-cost",
    category: "General",
    question: "Are labs included in the program fee?",
    answer: labPolicy.notIncluded,
  },
  {
    id: "appointment-policies",
    category: "General",
    question: "What is the cancellation and no-show policy?",
    answer: `${appointmentPolicies.cancellation}\n\n${appointmentPolicies.confirmation}\n\n${appointmentPolicies.card}`,
  },
  {
    id: "low-t",
    category: "Men's Hormone Care",
    question: "How do I know if I have low testosterone?",
    answer:
      "Symptoms such as low energy, reduced libido, or changes in body composition can have many causes. Low testosterone is diagnosed through a clinical evaluation and laboratory testing, not symptoms alone.",
  },
  {
    id: "mens-program-included",
    category: "Men's Hormone Care",
    question: "What is included in the men's hormone care program?",
    answer:
      `${pricing.mensInjections.listingLine}\n\nIt includes injectable testosterone, injection supplies, medications shipped directly to your home, quarterly follow-up visits, ongoing provider oversight, and individualized treatment adjustments.\n\n${pricing.mensTransdermal.listingLine}\n\nIt includes topical testosterone cream, medications shipped directly to your home, quarterly follow-up visits, ongoing provider oversight, and individualized treatment adjustments.\n\nTestosterone in these programs may be a compounded formulation prepared by a compounding pharmacy or a commercial FDA-approved product. The choice depends on the treatment plan and your preference. Compounded preparations are not FDA-approved products. Your provider explains the product, the dose, and the risks before it is prescribed.\n\nBoth programs provide the same personalized medical oversight and follow-up care. Pricing differences reflect the medication formulations, administration methods, and supplies included. Laboratory testing is billed separately.`,
  },
  {
    id: "lab-frequency",
    category: "Men's Hormone Care",
    question: "How often are labs checked?",
    answer:
      "Follow-up hormone testing is typically performed 6 to 8 weeks after starting therapy or following significant dose adjustments.\n\nOnce treatment is established, laboratory monitoring is generally performed every 3 months until hormone levels and symptoms have stabilized. After a stable treatment regimen is achieved, laboratory monitoring may be performed every 6 months.\n\nAn annual comprehensive laboratory panel is required as part of ongoing care. Laboratory testing should be completed before scheduled follow-up appointments so results are available for review during your visit.",
  },
  {
    id: "trt-ed",
    category: "Men's Hormone Care",
    question: "Can hormone treatment help erectile dysfunction?",
    answer:
      "Erectile dysfunction can have many potential causes. Hormone therapy may be helpful for some patients, but it is not appropriate for every case. A comprehensive evaluation is needed to determine whether hormonal factors may be contributing to symptoms.",
  },
  {
    id: "ed-meds-included",
    category: "Men's Hormone Care",
    question: "Are ED medications included in the men's hormone care program?",
    answer:
      "No. Erectile dysfunction medications are not included in Heartland's hormone care membership programs. If prescribed, these medications are billed separately.",
  },
  {
    id: "perimenopause",
    category: "Women's Hormone & Menopause Care",
    question: "Do you treat perimenopause as well as menopause?",
    answer:
      "Yes. Heartland evaluates and treats symptoms associated with both perimenopause and menopause. Treatment recommendations are individualized and based on symptoms, health history, and laboratory findings.",
  },
  {
    id: "which-hormones",
    category: "Women's Hormone & Menopause Care",
    question: "What does women's hormone care include?",
    answer:
      "Female HRT Core — $200 every 4 weeks — offers oral and topical medication options, including progesterone, estrogen, and testosterone, as clinically appropriate.\n\nFemale HRT Plus — $240 every 4 weeks — adds injectable medications, including testosterone injections and injection supplies.\n\nMedication selection is tailored to your needs. Alternative formulations, including troches, can be discussed with your provider. Both programs include the same medical oversight and follow-up. Laboratory testing is billed separately.",
  },
  {
    id: "compounded",
    category: "Women's Hormone & Menopause Care",
    question: "Do you offer customized hormone therapy?",
    answer:
      "Yes. Hormone plans are tailored to symptoms, health history, treatment goals, and laboratory findings. A plan may use a compounded formulation prepared by a compounding pharmacy or a commercial FDA-approved product. If you want a commercial product and one is appropriate, your provider can prescribe it. Compounded hormone preparations are not FDA-approved products. Your provider explains the product, the dose, and the risks before it is prescribed.",
  },
  {
    id: "women-testosterone",
    category: "Women's Hormone & Menopause Care",
    question: "Is testosterone used in women?",
    answer:
      "Yes. Testosterone may be included in some women's hormone treatment plans based on symptoms, health history, and individual treatment goals. It is not used in every patient's treatment plan. It may be a compounded formulation or a commercial product. FDA-approved testosterone products in the United States are approved for use in men. Use of testosterone in women is off-label. A compounded preparation is not an FDA-approved product. Your provider explains the reason, the product, the dose, and the risks before it is prescribed.",
  },
  {
    id: "weight-treatment",
    category: "Weight Management",
    question: "What prescription treatment is available for weight management?",
    answer:
      "Prescription weight-management medications may be recommended following a comprehensive evaluation. Medication selection is individualized and based on health history, current health status, treatment goals, and ongoing response to treatment. A commercial FDA-approved medicine or a compounded formulation may be prescribed. If you want a commercial product and one is appropriate, your provider can prescribe it. When a compounded formulation is prescribed, it is not an FDA-approved product. Your provider explains the product, the dose, and the risks before it is prescribed.\n\nFor patients enrolled in a hormone care membership, medical weight management may be incorporated into ongoing care without an additional consultation or recurring management fee. Patients are responsible for the cost of prescribed weight-management medications and any additional laboratory testing that may be required.\n\nPatients who are not enrolled in a hormone care membership may schedule a medical weight management consultation to discuss treatment options. Medical weight management for non-members is billed separately by consultation.",
  },
  {
    id: "weight-meds-cost",
    category: "Weight Management",
    question: "Is medication included in the program cost?",
    answer:
      "No. Weight-management medications and extra laboratory testing are billed separately. Hormone-care members do not pay an extra consultation or recurring management fee for weight management; non-members book a separate consultation.",
  },
  {
    id: "weight-follow-up",
    category: "Weight Management",
    question: "How often do I need follow-up visits?",
    answer:
      "Follow-up frequency varies based on the prescribed treatment plan, medication management needs, treatment response, and laboratory monitoring requirements. Your provider will recommend an appropriate follow-up schedule based on your individual needs and progress.",
  },
];

export const FAQ_CATEGORIES = [
  "General",
  "Men's Hormone Care",
  "Women's Hormone & Menopause Care",
  "Weight Management",
] as const;
