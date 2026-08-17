import type { Metadata } from "next";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SITE, providerCredentialLine } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { clinicJsonLd, personJsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "About | Experienced Care, Local Roots",
  description:
    "Heartland Hormone & Wellness Clinic was founded by an AGACNP-BC with decades of clinical experience and more than four decades in the Kansas City community.",
  path: "/about",
});

const PILLARS = [
  {
    title: "Clinical Experience",
    quote: "Nurse practitioner-led care grounded in years of advanced practice.",
  },
  {
    title: "Continuity",
    quote: "Follow-up, messaging and medication adjustments with the same clinic.",
  },
  {
    title: "Local Availability",
    quote: "A Kansas City-area clinic when face-to-face care is the better fit.",
  },
  {
    title: "Telehealth Access",
    quote: "Follow-up for eligible Kansas patients when clinically appropriate.",
  },
  {
    title: "Evidence-Based Decisions",
    quote: "Symptoms, history and labs inform treatment, not a fixed protocol.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{ ...clinicJsonLd(), founder: personJsonLd() }} />

      <PageHero
        eyebrow="About"
        title="Experienced Care. Local Roots."
        description="Heartland Hormone & Wellness Clinic was created to bring thoughtful, individualized hormone and wellness care to the community we have called home for more than four decades."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <FadeIn>
            <div className="aspect-[4/5] w-full rounded-md border border-gold/30 bg-teal text-cream flex flex-col items-center justify-center px-8 text-center">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-4">
                Founder
              </p>
              <p className="font-display text-2xl tracking-wide mb-3">
                {SITE.providerName ?? SITE.shortName}
              </p>
              <p className="text-sm text-cream/80 leading-relaxed">
                {providerCredentialLine()}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-3">
              Your Provider
            </p>
            <h2 className="font-display text-3xl text-teal tracking-wide mb-2">
              {SITE.providerName ?? "Nurse Practitioner-Led Care"}
            </h2>
            <p className="text-charcoal/70 mb-6">{providerCredentialLine()}</p>
            <div className="h-px w-16 bg-gold mb-6" />
            <div className="space-y-4 text-charcoal/90 leading-relaxed">
              <p>
                Heartland Hormone & Wellness Clinic was founded by an
                Adult-Gerontology Acute Care Nurse Practitioner, AGACNP-BC, with
                decades of advanced clinical experience.
              </p>
              <p>
                Raised in Miami County, the founder made the Kansas City metro
                home in 1983 and has lived and raised a family here for more than
                four decades. Children graduated from the Blue Valley School
                District. Those local ties are why the clinic exists: to provide
                personalized, evidence-based hormone and wellness care to this
                community.
              </p>
              <p>
                Care is built around continuity, a personal relationship with
                patients, local availability when you need an office visit, and
                telehealth convenience when it fits and is permitted. Treatment
                decisions stay individualized and evidence-based.
              </p>
            </div>
            <div className="mt-8">
              <BookButton />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-teal text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Practice"
            title="What guides this clinic"
            onDark
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 -mt-4">
            {PILLARS.map((pillar) => (
              <blockquote
                key={pillar.title}
                className="rounded-md border border-gold/30 p-6"
              >
                <p className="font-display text-sm tracking-[0.2em] uppercase text-gold mb-3">
                  {pillar.title}
                </p>
                <p className="text-cream/90 leading-relaxed">{pillar.quote}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <SectionHeading
          title="Credentials"
          description="Board-certified Adult-Gerontology Acute Care Nurse Practitioner (AGACNP-BC)."
        />
        <p className="text-sm text-charcoal/70 max-w-2xl">
          {SITE.serviceAreaLine} License details are confirmed during your visit.
        </p>
      </section>

      <CTASection
        headline="Ready to meet?"
        subtext="Book a consultation, virtual or at our Kansas City-area clinic."
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
