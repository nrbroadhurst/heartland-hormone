import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { clinic } from "@/lib/clinic";

import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} | Overland Park, KS`,
    template: `%s | ${clinic.shortName}`,
  },
  description:
    "Nurse practitioner–led hormone and wellness care in Overland Park, Kansas. Heartland Hormone & Wellness Clinic is owned by Sherry L. Broadhurst, NP, AGACNP-BC.",
  openGraph: {
    title: clinic.name,
    description:
      "Thoughtful, lab-guided hormone care in Overland Park. Visits by appointment.",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  legalName: clinic.legalName,
  telephone: "+1-913-915-4569",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14400 Metcalf Ave Fl 1",
    addressLocality: "Overland Park",
    addressRegion: "KS",
    postalCode: "66223",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: clinic.owner.name,
    jobTitle: clinic.owner.title,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
