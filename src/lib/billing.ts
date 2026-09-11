/**
 * Centralized recurring billing configuration.
 * All recurring program prices inherit cadence from this file.
 */
export const billingConfig = {
  cycleDays: 28,
  cyclesPerYear: 13,
  frequencyLabel: "every four weeks",
  cyclesPerYearLabel: "until canceled",
  recurringDisclosure:
    "Automatically billed every four weeks until canceled.",
  recurringAuthorization:
    "By enrolling, you authorize Heartland Hormone & Wellness Clinic to charge the payment method you provide every four weeks at the program rate disclosed at enrollment until you cancel. You may cancel future recurring charges according to the cancellation policy.",
  monthlyExplanation:
    "Our recurring care programs are billed every four weeks for ongoing clinical care and program management.",
} as const;

export function formatRecurringPrice(amount: number): string {
  return `$${amount} ${billingConfig.frequencyLabel}`;
}

export function formatRecurringTeaser(amount: number): string {
  return `From $${amount} ${billingConfig.frequencyLabel}`;
}
