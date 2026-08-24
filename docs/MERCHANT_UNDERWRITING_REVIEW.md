# Merchant Underwriting Review — Heartland Hormone Website

Generated: August 24, 2026. For Payment Doctor / processor review.

## Public Services Advertised

Primary:

- Men's Hormone Care
- Women's Hormone & Menopause Care
- Medical Weight Management

Secondary:

- Sexual Wellness
- Healthy Aging & Wellness

Not publicly marketed (feature flag off):

- Peptide Therapy

## Prescription Names Visible Publicly

Remaining on public pages (mostly exclusions/clinical context):

- membershipExclusions on pricing page (hCG, anastrozole, etc.) — lists what is NOT included
- FAQ references testosterone in clinical context (men's hormone evaluation)

Removed from primary marketing:

- semaglutide, tirzepatide (removed from service pages and FAQ drug-specific entries)
- specific compounded product names and strengths on pricing includes
- peptide therapy from navigation, homepage, sitemap

## High-Risk Terms Remaining

| Term | Location | Notes |
|------|----------|-------|
| peptide | `src/lib/services.ts` | Preserved in code; not in nav/sitemap when flag false |
| telehealth | URL `/telehealth-consent` only | Page title updated to Virtual Care Consent |
| testosterone | FAQ, some clinical copy | Clinical evaluation context, not storefront language |
| compounded | women's service page, FAQ | Appropriate disclosure language |

## Billing

| Program | Price | Recurrence | Med included | Labs included |
|---------|-------|------------|--------------|---------------|
| Initial Medical Consultation | $200 one-time | One-time | No | No |
| Men's Hormone Care Program | $199 | Every 28 days | Yes | No |
| Men's Hormone Care Program - Level 2 | $229 | Every 28 days | Yes | No |
| Women's Hormone Care Program | $199 | Every 28 days | Yes | No |
| Women's Comprehensive Hormone Care Program | $229 | Every 28 days | Yes | No |
| Medical Weight Management Program | $200 consult + medication | Consult one-time; meds separate | Separate | No |

Annual billing cycles: 13 for 28-day recurring programs.

## Policies Present

- Privacy Policy — `/privacy-policy`
- Notice of Privacy Practices — `/notice-of-privacy-practices`
- Terms of Service — `/terms-of-service`
- Recurring Billing & Cancellation — `/recurring-billing`
- Refund Policy — `/refund-policy`
- Medical Disclaimer — `/medical-disclaimer`
- Virtual Care Consent — `/telehealth-consent`

## Contact Transparency

- Business: Heartland Hormone & Wellness Clinic
- Address: 14400 Metcalf Avenue, Suite 150, Overland Park, KS 66223
- Phone: 913-427-9275
- Email: sherry@heartlandhormones.com
- Patient portal: OptiMantra (linked from header)

## Staging URL

https://heartland-hormone.vercel.app/
