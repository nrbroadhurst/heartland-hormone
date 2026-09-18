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

Without `RESEND_API_KEY`, Send Message opens an Outlook draft to `sherry@heartlandhormones.com`. The visitor must click Send.

To send from the server (no Outlook draft), set `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` on Vercel.
