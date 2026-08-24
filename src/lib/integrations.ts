import { SITE } from "@/lib/site";

/**
 * External practice-management and payment handoffs.
 * Do not embed payment credentials here. Use approved OptiMantra workflows.
 */
export const integrations = {
  bookingUrl: SITE.bookingUrl ?? "",
  patientPortalUrl: SITE.patientPortalUrl,
  paymentPortalUrl: SITE.patientPortalUrl,
  bookingSystem: SITE.bookingSystem,
} as const;

/**
 * Suggested credit-card statement descriptor concept.
 * Final descriptor must be approved by the Merchant Service Provider.
 */
export const merchantDescriptorNote =
  "Recommended concept: HEARTLAND HORMONE or another processor-approved recognizable variation of the legal/DBA name. Do not use an unrelated corporate name.";
