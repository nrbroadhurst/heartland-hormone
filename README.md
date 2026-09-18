# Heartland Hormone & Wellness Clinic

Marketing and lead-generation website for Heartland Hormone & Wellness Clinic, a local Kansas hormone, menopause and medical weight-management clinic.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Radix Accordion, Framer Motion, React Hook Form + Zod

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Placeholders

Anywhere you see `[PLACEHOLDER]` or `// TODO`, replace with real provider-confirmed content before launch. Do not invent names, addresses, licenses, prices, or medical claims.

Priority confirmations: clinic address, provider credentials, telehealth states, scheduler + BAA, membership pricing, attorney review of legal pages.

## Contact form

Send Message does not open Outlook, mailto, or a Microsoft account picker. If `RESEND_API_KEY` is set, the server emails `sherry@heartlandhormones.com` directly. Otherwise the browser posts the form to FormSubmit (a brief human-check page may appear). The first FormSubmit request sends an activation email to the Heartland inbox — open that message once, then later requests arrive as appointment emails. The clinic address on the site is copyable text only.
