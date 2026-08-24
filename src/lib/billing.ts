/**
 * Centralized recurring billing configuration.
 * All recurring program prices inherit cadence from this file.
 */
export const billingConfig = {
  cycleDays: 28,
  cyclesPerYear: 13,
  frequencyLabel: "every 28 days",
  cyclesPerYearLabel: "13 billing cycles per year",
  recurringDisclosure:
    "Automatically billed every 28 days until canceled. A 28-day billing schedule results in 13 billing cycles in a typical year.",
  recurringAuthorization:
    "By enrolling, you authorize Heartland Hormone & Wellness Clinic to charge the payment method you provide every 28 days at the program rate shown until you cancel. A 28-day billing schedule results in 13 billing cycles in a typical year. You may cancel future recurring charges according to the cancellation policy.",
  fourWeekExplanation:
    "Our recurring care programs may use a four-week billing cycle to align treatment, follow-up and medication-management intervals.",
} as const;

export function formatRecurringPrice(amount: number): string {
  return `$${amount} ${billingConfig.frequencyLabel}`;
}

export function formatRecurringTeaser(amount: number): string {
  return `From $${amount} ${billingConfig.frequencyLabel}`;
}
