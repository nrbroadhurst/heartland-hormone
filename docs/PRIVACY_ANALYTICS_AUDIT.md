# Privacy & Analytics Audit — Heartland Hormone Website

Audit date: August 24, 2026

## Summary

The marketing website does **not** currently load third-party advertising or analytics trackers.

## Services Found

| Service | Where it loads | Data it can receive | Status |
|---------|----------------|---------------------|--------|
| None (Google Analytics) | Not present | N/A | None installed |
| None (Google Tag Manager) | Not present | N/A | None installed |
| None (Meta Pixel) | Not present | N/A | None installed |
| None (session replay / heatmaps) | Not present | N/A | None installed |
| None (third-party chat widgets) | Not present | N/A | None installed |
| Vercel hosting | Infrastructure | Server logs, request metadata | Standard hosting |
| Contact form API | `/api/contact` | Name, email, phone, service category | Logs to server only; no email integration yet |

## Contact Form

- Collects minimal scheduling information only
- Explicit warning not to submit detailed medical information
- Honeypot field for spam bots
- Does not append health data to URL query strings
- Does not forward submissions to marketing pixels

## Recommendations

1. Do not add Meta Pixel, Google Ads tags or similar tools to pages that collect health-related interest categories without legal/privacy review.
2. If analytics are added later, use aggregate page-view tracking only. Do not send form field values, symptom data or appointment reasons to analytics platforms.
3. When OptiMantra booking is embedded, ensure intake occurs in the approved secure workflow rather than a generic marketing form.
4. Review privacy policy before enabling any new third-party scripts.

## Privacy Policy Reference

`src/app/privacy-policy/page.tsx` states marketing pixels are not enabled by default.
