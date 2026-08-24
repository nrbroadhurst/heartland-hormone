# Payment Compliance — Heartland Hormone & Wellness Clinic

Internal planning document. Not for public website publication.

## Merchant Processor

Planned structure:

- **Merchant processing provider:** The Payment Doctor / approved processing partner
- **Gateway:** Authorize.Net
- **Practice management:** OptiMantra

Meeting pricing provided to Heartland:

- Card processor: 2.8% + $0.10 per transaction
- Authorize.Net gateway: $10/month + $0.05 per transaction
- One-time gateway setup: $50
- Month-to-month arrangement reported
- Next-business-day funding reported as standard

**Business planning information provided by processor representative. Confirm against final merchant agreement before relying on these numbers.**

## Public Website Alignment

The public website describes clinical programs, not individual prescription products:

- Men's Hormone Care Program
- Women's Hormone Care Program
- Women's Comprehensive Hormone Care Program
- Medical Weight Management Program
- Initial Medical Consultation

Payment descriptions should match these service-level names in OptiMantra and Authorize.Net.

## Recurring Billing

- Cycle: every 28 days
- Approximate annual cycles: 13
- Disclosed on pricing page, recurring billing page, terms and FAQ

## Merchant Descriptor

Recommended concept: **HEARTLAND HORMONE** or another processor-approved recognizable variation of the legal/DBA name.

Final descriptor must be approved by the Merchant Service Provider. Do not use an unrelated corporate name.

## Non-Deception Principle

Do not disguise prescription programs as unrelated products. Website, merchant application, receipts, OptiMantra invoices and clinical records must remain consistent.

## Payment Privacy

Do not send diagnosis, prescription names, dosages, symptoms or clinical notes through generic payment description fields unless specifically required and approved.

## Credentials

No Authorize.Net API Login IDs, transaction keys, signature keys or merchant credentials belong in source control. Configure through OptiMantra and Vercel environment secrets when approved.
