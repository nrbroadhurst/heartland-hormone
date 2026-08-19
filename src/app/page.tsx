import Link from "next/link";
import { Stethoscope, UserRound, MapPin, Video } from "lucide-react";
import { SITE } from "@/lib/site";
import { PRIMARY_SERVICES, SECONDARY_SERVICES } from "@/lib/services";
import { homepagePricing, pricing } from "@/lib/pricing";
import { Button } from "@/components/ui/button";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { ServicesGrid } from "@/components/ServiceCard";
import { StepList } from "@/components/StepList";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { TrustCard } from "@/components/TrustCard";
import { ProviderPreview } from "@/components/ProviderPreview";
import { clinicJsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={clinicJsonLd()} />

      <section className="relative overflow-hidden bg-teal text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 20%, rgba(200,166,122,0.25), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(247,243,236,0.08), transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 lg:py-24 md:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-gold">
              Heartland Hormone &amp; Wellness Clinic
            </p>
            <h1 className="font-display max-w-3xl text-4xl leading-tight tracking-wide md:text-5xl lg:text-6xl mb-4 text-balance">
              Feel Like Yourself Again
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-cream/90 leading-relaxed mb-4">
              Personalized hormone replacement and medical weight management for
              men and women.
            </p>
            <p className="max-w-2xl text-base md:text-lg text-cream/80 leading-relaxed mb-8">
              Men&apos;s testosterone therapy, women&apos;s menopause care, medical
              weight management and sexual wellness from an experienced local
              provider. In-person care in the Kansas City area with convenient
              telehealth throughout Kansas and Missouri.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="gold" size="lg">
                <Link href="/pricing">View Programs &amp; Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-cream/85">
              <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden />
              {SITE.locationLine}
            </p>
          </FadeIn>
        </div>
      </section>

      <TrustBadgeRow />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Primary Care Lines"
          title="Hormone Therapy and Medical Weight Management"
          description="Three core programs for men and women, with local visits in the Kansas City area and telehealth throughout Kansas and Missouri when appropriate."
        />
        <ServicesGrid services={PRIMARY_SERVICES} featured />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Additional Care"
            title="Related Services"
            description="Peptide therapy is coming soon. Sexual wellness and healthy-aging support remain available for selected patients."
          />
          <ServicesGrid services={SECONDARY_SERVICES} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Heartland"
          title="Local Care With the Convenience of Telehealth"
          description={SITE.serviceAreaLine}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <TrustCard
            index={0}
            icon={Stethoscope}
            title="Experienced Clinical Care"
            body="Care led by a board-certified nurse practitioner with decades of clinical experience."
          />
          <TrustCard
            index={1}
            icon={UserRound}
            title="Personalized Treatment"
            body="Treatment decisions based on symptoms, history, laboratory findings and individual goals."
          />
          <TrustCard
            index={2}
            icon={MapPin}
            title="Local When You Need Us"
            body="A physical Kansas City-area clinic for patients who prefer face-to-face care."
          />
          <TrustCard
            index={3}
            icon={Video}
            title="Telehealth When It Fits Your Life"
            body="Convenient follow-up for eligible Kansas and Missouri patients when clinically appropriate."
          />
        </div>
      </section>

      <section className="bg-teal text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            onDark
            eyebrow="Programs"
            title="Straightforward, Transparent Pricing"
            description="Heartland is designed around clear cash-pay programs so patients know what their care includes before starting treatment. Initial evaluation is $200 one-time."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Initial Evaluation",
                price: pricing.initialEvaluation.teaserDisplay,
                href: "/pricing#initial-evaluation",
              },
              {
                name: "Men's Hormone Therapy",
                price: homepagePricing.mens.teaserDisplay,
                href: "/pricing#mens-hormone",
              },
              {
                name: "Women's Hormone Therapy",
                price: homepagePricing.womens.teaserDisplay,
                href: "/pricing#womens-hormone",
              },
              {
                name: "Medical Weight Management",
                price: homepagePricing.weight.teaserDisplay,
                href: "/services/weight-management",
              },
            ].map((card) => (
              <Link
                key={card.name}
                href={card.href}
                className="rounded-md border border-gold/40 p-6 hover:border-gold transition"
              >
                <h3 className="font-display text-xl tracking-wide mb-2">{card.name}</h3>
                <p className="font-display text-2xl text-gold-light">{card.price}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <Link href="/pricing">View Programs &amp; Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProviderPreview />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Process"
            title="How It Works"
            description="A clear path from first conversation to ongoing care, virtual or in person."
          />
          <Button asChild variant="outline-teal" className="shrink-0 self-start md:mb-10">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>
        <StepList />
      </section>

      <CTASection
        headline="Ready to talk through your options?"
        subtext="Book a consultation in the Kansas City area or by telehealth throughout Kansas and Missouri when eligible."
        ctaLabel="Book a Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
        variant="teal"
      />
    </>
  );
}
