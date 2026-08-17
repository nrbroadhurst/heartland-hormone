import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { AnnouncementBar, Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: `${SITE.name} | Hormone Therapy & Weight Management in Overland Park`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Men's testosterone therapy, women's menopause care and medical weight management in Overland Park and the Kansas City area, with telehealth throughout Kansas.",
  openGraph: {
    title: SITE.name,
    description:
      "Personalized hormone replacement and medical weight management for men and women. Overland Park / Kansas City plus telehealth throughout Kansas.",
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    url: SITE.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} min-h-screen bg-cream text-charcoal antialiased font-body`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-teal"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
