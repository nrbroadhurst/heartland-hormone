import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { ProviderPortrait } from "@/components/ProviderPortrait";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { clinicJsonLd, personJsonLd } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "About | Experienced Care, Local Roots",
  description:
    "Heartland Hormone & Wellness Clinic was founded by Sherry Broadhurst, AGACNP-BC, a board-certified nurse practitioner with decades of clinical experience caring for adults.",
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
            <ProviderPortrait
              eyebrow="Founder"
              name={`${SITE.providerName}, ${SITE.providerCredential}`}
              detail="Board-Certified Nurse Practitioner"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-display text-3xl text-teal tracking-wide mb-6">
              Your Provider
            </h2>
            <div className="space-y-4 text-charcoal/90 leading-relaxed">
              <p>
                Heartland Hormone & Wellness Clinic was founded by{" "}
                {SITE.providerName}, AGACNP-BC, a board-certified nurse
                practitioner with decades of clinical experience caring for
                adults, including patients with complex medical conditions.
              </p>
              <p>
                Raised in Miami County and a longtime resident of Overland Park,
                Sherry established Heartland to provide a more personalized
                approach to hormone replacement therapy and wellness care. Her
                commitment to the community, combined with her extensive clinical
                background, inspired her to create a practice where patients
                receive individualized attention, thoughtful guidance, and
                evidence-based treatment.
              </p>
              <p>
                At Heartland, care begins with understanding the whole patient.
                Each treatment plan is developed through a comprehensive
                evaluation of symptoms, medical history, laboratory findings, and
                individual health goals, with an emphasis on ongoing support and
                continuity of care.
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
          Board-Certified Nurse Practitioner with a focus on hormone health,
          metabolic wellness, and individualized patient care.
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
