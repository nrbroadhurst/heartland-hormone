import { pricing, labPolicy } from "@/lib/pricing";
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
    answer:
      "Recurring hormone care memberships are billed every 4 weeks and automatically renew unless canceled. Because memberships are billed every 4 weeks rather than monthly, there are 13 billing cycles per year.\n\nCurrent pricing is available on the Pricing & Programs page. Your selected program, fees, and billing terms will be reviewed before enrollment.",
  },
  {
    id: "cancel-program",
    category: "General",
    question: "Can I cancel my program?",
    answer:
      `Members may cancel at any time before their next scheduled billing date. To avoid the next billing cycle, cancellations must be submitted before the next scheduled billing date.\n\nUse the Patient Portal to manage your account or contact the clinic at ${SITE.phone}.\n\nSee the Recurring Billing & Cancellation Policy for additional details.`,
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
      `The ${pricing.mensInjections.name} is ${pricing.mensInjections.display} every 4 weeks and includes testosterone injections, injection supplies, medications shipped directly to your home, quarterly follow-up visits, ongoing provider oversight, and individualized treatment adjustments.\n\nThe ${pricing.mensTransdermal.name} is ${pricing.mensTransdermal.display} every 4 weeks and includes compounded testosterone cream, medications shipped directly to your home, quarterly follow-up visits, ongoing provider oversight, and individualized treatment adjustments.\n\nLaboratory testing is billed separately.`,
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
      "Women's hormone care programs may include estradiol, progesterone, testosterone, or a combination of therapies based on symptoms, health history, treatment goals, and laboratory findings. Specific medications, formulations, and dosages are determined during the evaluation process and individualized for each patient.",
  },
  {
    id: "compounded",
    category: "Women's Hormone & Menopause Care",
    question: "Do you offer customized hormone therapy?",
    answer:
      "Yes. Treatment plans are individualized and may include hormone therapy based on symptoms, health history, treatment goals, and laboratory findings. Specific medications, formulations, and dosages are determined during the evaluation process and tailored to each patient's individual needs.",
  },
  {
    id: "women-testosterone",
    category: "Women's Hormone & Menopause Care",
    question: "Is testosterone used in women?",
    answer:
      "Yes. Testosterone may be included in some women's hormone treatment plans based on symptoms, health history, and individual treatment goals. It is not used in every patient's treatment plan.",
  },
  {
    id: "women-meds-included",
    category: "Women's Hormone & Menopause Care",
    question: "Are medications included in the program?",
    answer:
      `The ${pricing.womensTriple.name} is ${pricing.womensTriple.display} every 4 weeks and includes estradiol, progesterone, and testosterone therapy as part of an individualized treatment plan.\n\nThe ${pricing.womensAdvanced.name} is ${pricing.womensAdvanced.display} every 4 weeks and includes testosterone injections together with estradiol and progesterone therapy as part of an individualized treatment plan.\n\nLaboratory testing is billed separately.`,
  },
  {
    id: "program-billing",
    category: "General",
    question: "How does recurring program billing work?",
    answer:
      "Recurring hormone care memberships are automatically billed every 4 weeks and renew unless canceled.\n\nIf a recurring program fee is declined or remains unpaid, medication orders, prescription refills, medication shipments, and scheduled clinical services may be paused until the account balance is paid in full.\n\nAccounts that remain unpaid for more than 30 days may be subject to discharge from the practice and cancellation of active prescriptions.\n\nConsultation fees are nonrefundable. Membership fees are nonrefundable once billed and after medications have been prescribed, processed, or shipped.",
  },
  {
    id: "weight-treatment",
    category: "Weight Management",
    question: "What prescription treatment is available for weight management?",
    answer:
      "Prescription weight-management medications may be recommended following a comprehensive evaluation. Medication selection is individualized and based on health history, current health status, treatment goals, and ongoing response to treatment.\n\nFor patients enrolled in a hormone care membership, weight-management medications may be incorporated into ongoing care when appropriate. Medication and laboratory testing fees are billed separately.\n\nPatients who are not enrolled in a hormone care membership may schedule a medical weight management consultation to discuss treatment options.",
  },
  {
    id: "weight-meds-cost",
    category: "Weight Management",
    question: "Is medication included in the program cost?",
    answer:
      "No. Weight-management medications are billed separately.\n\nFor patients enrolled in a hormone care membership, medical weight management may be incorporated into ongoing care without an additional program or management fee. Patients are responsible for the cost of prescribed weight-management medications and any additional laboratory testing that may be required.\n\nPatients who are not enrolled in a hormone care membership may schedule a medical weight management consultation to discuss treatment options.",
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
