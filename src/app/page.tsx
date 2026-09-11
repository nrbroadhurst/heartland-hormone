import Link from "next/link";
import { Stethoscope, UserRound, MapPin, ClipboardCheck } from "lucide-react";
import { SITE, formattedAddress, mapsUrl } from "@/lib/site";
import { getSecondaryServices } from "@/lib/services";
import { homepagePricing, pricing } from "@/lib/pricing";
import {
  APPROACH_PARAGRAPHS,
  APPROACH_TITLE,
  CLOSING_CTA_HEADLINE,
  CLOSING_CTA_SUBTEXT,
  COMMON_SYMPTOMS,
  HERO_HEADLINE,
  HERO_LEAD,
  WHY_CHOOSE_COMMITMENTS,
  WHY_CHOOSE_INTRO,
} from "@/lib/homepage-copy";
import { Button } from "@/components/ui/button";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { ServicesGrid } from "@/components/ServiceCard";
import { SpecializedCareGrid } from "@/components/SpecializedCare";
import { StepList } from "@/components/StepList";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { TrustCard } from "@/components/TrustCard";
import { ProviderPreview } from "@/components/ProviderPreview";
import { TreatmentList } from "@/components/TreatmentList";
import { clinicJsonLd } from "@/lib/schema";

export default function HomePage() {
  const secondaryServices = getSecondaryServices();

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
              {HERO_HEADLINE}
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-cream/90 leading-relaxed mb-4">
              {HERO_LEAD}
            </p>
            <p className="max-w-2xl text-base md:text-lg text-cream/80 leading-relaxed mb-8">
              {SITE.heroSupportingCopy}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="gold" size="lg">
                <Link href="/contact">{SITE.consultCta}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Programs</Link>
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
          eyebrow="Our Approach"
          title={APPROACH_TITLE}
          description={APPROACH_PARAGRAPHS[0]}
        />
        <p className="max-w-3xl text-charcoal/90 leading-relaxed -mt-4">
          {APPROACH_PARAGRAPHS[1]}
        </p>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Symptoms"
            title="Common Symptoms We Address"
            description="Hormonal imbalances can affect many aspects of daily life. Patients often seek care for:"
          />
          <div className="max-w-3xl">
            <TreatmentList items={COMMON_SYMPTOMS} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Specialized Hormone & Metabolic Health Services"
          description="Core clinical programs for hormone care and medical weight management, with related support when it is clinically appropriate."
        />
        <SpecializedCareGrid />
      </section>

      {secondaryServices.length > 0 && (
        <section className="bg-teal/5 border-y border-gold/20">
          <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Additional Care"
              title="Related Services"
              description="Sexual wellness, healthy aging and metabolic wellness support for selected patients after clinical evaluation."
            />
            <ServicesGrid services={secondaryServices} />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Heartland"
          title="Personalized, Evidence-Based Care"
          description={WHY_CHOOSE_INTRO}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-charcoal/90 leading-relaxed">
            <p>Our commitment is to provide:</p>
            <TreatmentList items={WHY_CHOOSE_COMMITMENTS} />
            <p>
              Patients who need or prefer in-person care have access to a physical
              clinic in the Kansas City area. {SITE.virtualCareStatement}
            </p>
            {formattedAddress() && (
              <div className="rounded-md border border-gold/40 bg-teal/5 p-5 text-sm">
                <p className="font-display text-teal tracking-wide mb-2">
                  Clinic Location
                </p>
                <p>{formattedAddress()}</p>
                <p className="mt-2">{SITE.officeHours}</p>
                {mapsUrl() && (
                  <Link
                    href={mapsUrl()!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-teal underline underline-offset-2"
                  >
                    View on Google Maps
                  </Link>
                )}
              </div>
            )}
          </div>
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
              title="Individualized Treatment"
              body="Treatment decisions based on symptoms, history, laboratory findings and individual goals."
            />
            <TrustCard
              index={2}
              icon={MapPin}
              title="Local Kansas Clinic"
              body="A physical Kansas City-area clinic for patients who prefer face-to-face care."
            />
            <TrustCard
              index={3}
              icon={ClipboardCheck}
              title="Ongoing Clinical Monitoring"
              body="Structured follow-up, laboratory review and treatment adjustments when clinically appropriate."
            />
          </div>
        </div>
      </section>

      <section className="bg-teal text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            onDark
            eyebrow="Programs"
            title="Clinical Programs"
            description="Cash-pay hormone and weight-management programs. Fees are reviewed during consultation so care can be matched to your plan."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Initial Consultation",
                price: pricing.initialEvaluation.teaserDisplay,
                href: "/pricing#initial-evaluation",
              },
              {
                name: "Men's Hormone Care",
                price: homepagePricing.mens.teaserDisplay,
                href: "/pricing#mens-hormone",
              },
              {
                name: "Women's Hormone Care",
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
          <p className="mt-4 text-sm text-cream/75">
            Recurring programs, when enrolled, are billed monthly. Exact fees are provided during consultation.
          </p>
          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <Link href="/pricing">View Programs</Link>
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
            description="A clear path from first conversation to ongoing care."
          />
          <Button asChild variant="outline-teal" className="shrink-0 self-start md:mb-10">
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>
        <StepList />
      </section>

      <CTASection
        headline={CLOSING_CTA_HEADLINE}
        subtext={CLOSING_CTA_SUBTEXT}
        ctaLabel={SITE.consultCta}
        secondaryLabel="View Programs"
        secondaryHref="/pricing"
        variant="teal"
      />
    </>
  );
}
