/**
 * Centralized recurring billing configuration.
 * All recurring program prices inherit cadence from this file.
 */
export const billingConfig = {
  cycleDays: 30,
  cyclesPerYear: 12,
  frequencyLabel: "every month",
  cyclesPerYearLabel: "Billed monthly until canceled",
  recurringDisclosure:
    "Automatically billed every month until canceled.",
  recurringAuthorization:
    "By enrolling, you authorize Heartland Hormone & Wellness Clinic to charge the payment method you provide every month at the program rate shown until you cancel. You may cancel future recurring charges according to the cancellation policy.",
  monthlyExplanation:
    "Our recurring care programs are billed every month for ongoing clinical care and program management.",
} as const;

export function formatRecurringPrice(amount: number): string {
  return `$${amount} ${billingConfig.frequencyLabel}`;
}

export function formatRecurringTeaser(amount: number): string {
  return `From $${amount} ${billingConfig.frequencyLabel}`;
}
