import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { clinicJsonLd, personJsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "About | Experienced Care, Local Roots",
  description:
    "Heartland Hormone & Wellness Clinic was founded by Sherry Broadhurst, MSN, APRN, AGACNP-BC, with decades of clinical experience and more than four decades in the Kansas City community.",
  path: "/about",
});

const PILLARS = [
  {
    title: "Clinical Experience",
    quote: "Nurse practitioner-led care grounded in years of advanced practice.",
  },
  {
    title: "Continuity",
    quote: "Ongoing follow-up, provider communication, and treatment adjustments through the same clinic.",
  },
  {
    title: "Personalized Care",
    quote: "Treatment recommendations are individualized based on symptoms, health history, laboratory findings, and personal goals.",
  },
  {
    title: "Local Roots",
    quote:
      "Founded by a provider with deep roots in the local community and a longstanding commitment to serving patients in the area.",
  },
  {
    title: "Evidence-Based Decisions",
    quote: "Symptoms, health history, physical assessment when indicated, and laboratory findings guide treatment recommendations rather than a one-size-fits-all approach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{ ...clinicJsonLd(), founder: personJsonLd() }} />

      <PageHero
        eyebrow="About"
        title="Experienced Care. Local Roots."
        description="Heartland Hormone & Wellness Clinic was founded to provide thoughtful, individualized hormone and wellness care to the community we have proudly called home for decades."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <FadeIn>
            <div className="aspect-[4/5] w-full rounded-md border border-gold/30 bg-teal text-cream flex flex-col items-center justify-center px-8 text-center">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-gold mb-4">
                Founder
              </p>
              <p className="font-display text-2xl tracking-wide mb-3 text-balance">
                {SITE.providerName}, {SITE.providerCredential}
              </p>
              <p className="text-sm text-cream/80 leading-relaxed">
                Board-Certified Nurse Practitioner
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-display text-3xl text-teal tracking-wide mb-6">
              Your Provider
            </h2>
            <div className="space-y-4 text-charcoal/90 leading-relaxed">
              <p>
                Heartland Hormone & Wellness Clinic was founded by{" "}
                {SITE.providerName}, a board-certified nurse practitioner with
                decades of advanced clinical experience caring for adult
                patients, including those with complex medical conditions.
              </p>
              <p>
                Raised in Miami County and a longtime resident of Overland Park,
                Sherry founded Heartland to provide thoughtful, individualized
                hormone and wellness care rooted in evidence-based practice and
                strong patient relationships. After building a career and raising
                a family in the community, with children educated in the Blue
                Valley School District, she created the clinic to bring
                personalized care close to home.
              </p>
              <p>
                Care is built around continuity, accessibility, and personalized
                attention. Every treatment plan is developed based on a
                comprehensive evaluation, health history, laboratory findings,
                and each patient&apos;s individual goals.
              </p>
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
        <SectionHeading title="Credentials" description={SITE.providerCredential} />
        <p className="text-charcoal/90 leading-relaxed max-w-2xl -mt-4">
          Board-Certified Nurse Practitioner caring for adult patients with a
          focus on hormone health, metabolic wellness, and individualized
          treatment.
        </p>
      </section>

      <CTASection
        headline="Ready to Meet?"
        subtext="Schedule a consultation to discuss your symptoms, review your health history, and learn whether treatment may be right for you."
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
