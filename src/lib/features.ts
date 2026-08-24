/**
 * Public marketing feature flags.
 *
 * Enable publicPeptideMarketing only after merchant processor/compliance review
 * confirms this service may be publicly marketed and processed under the
 * approved merchant account.
 */
export const features = {
  publicPeptideMarketing: false,
} as const;
