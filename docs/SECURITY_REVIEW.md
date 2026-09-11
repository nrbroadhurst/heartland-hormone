# Security Review — Heartland Hormone Website

Review date: August 24, 2026

## Findings

| Area | Status | Notes |
|------|--------|-------|
| Payment gateway keys in frontend | Pass | No Authorize.Net credentials in repository |
| API secrets in client bundle | Pass | No secrets in `src/` client components |
| Pharmacy credentials exposed | Pass | None in repository |
| Test patient data in repo | Pass | None found |
| PHI in analytics | Pass | No analytics trackers installed |
| Health data in URL parameters | Pass | Contact form does not use health query params |
| Contact form transport | Pass | HTTPS via Vercel in production |
| Environment variables | Pass | `.env.example` documents optional vars; no secrets committed |
| Contact API logging | Review | Logs name/email/interest server-side only; ensure production logs are access-controlled |

## Recommendations

1. Keep all Authorize.Net and merchant credentials in OptiMantra / processor configuration only.
2. When email integration is added for contact form, use server-side env vars (`RESEND_API_KEY`, etc.).
3. Do not embed payment card collection on the marketing site.
4. Periodically re-scan before merchant underwriting submission.

## No Action Required Now

Payment credentials should not be integrated until merchant onboarding is complete.
