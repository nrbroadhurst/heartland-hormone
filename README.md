# Heartland Hormone & Wellness Clinic

Public website for **Heartland Hormone & Wellness Clinic LLC**, a nurse practitioner–led hormone and wellness practice in Overland Park, Kansas.

Owner: Sherry L. Broadhurst, NP, AGACNP-BC  
Address: 14400 Metcalf Ave, Floor 1, Overland Park, KS 66223  
Phone: (913) 915-4569

## What this site includes

- Home, Services, About, and Contact pages
- Request-a-visit form with validation, loading, error, and success states
- Clinic contact details, hours (by appointment), and a medical-information disclaimer

The contact API accepts valid requests locally. It does not send email yet. Before going live, connect `/src/app/api/contact/route.ts` to the clinic’s email or scheduling tool.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
