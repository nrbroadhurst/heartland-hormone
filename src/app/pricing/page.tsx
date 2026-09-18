import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { PricingDisclaimer } from "@/components/MedicalDisclaimer";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";
import {
  pricing,
  labPolicy,
  billingPolicy,
  programSharedIncludes,
  FOUR_WEEK_NOTE,
} from "@/lib/pricing";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Pricing & Programs",
  description:
    "Published Heartland Hormone rates: $225 new-patient consultation, men's TRT from $175 every 4 weeks, and women's BHRT from $200 every 4 weeks. Labs billed separately.",
  path: "/programs",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Pricing & Programs"
        title="Pricing & Programs"
        description="Membership pricing includes prescribed testosterone, estradiol, and progesterone when part of your treatment plan, along with routine follow-up and ongoing clinical management. Program fees vary by treatment tier based on the medications and formulations prescribed. Additional medications, laboratory testing, and other services are billed separately."
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-10 md:py-12 md:px-6 lg:px-8 space-y-12">
        <div className="rounded-md border border-gold/40 bg-teal/5 p-5 md:p-6">
          <h2 className="font-display text-xl text-teal tracking-wide mb-4">
            All Programs Include
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {programSharedIncludes.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-charcoal/85">
                <Check
                  className="h-4 w-4 shrink-0 mt-0.5 text-teal"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="initial-evaluation" className="scroll-mt-28">
          <SectionHeading
            compact
            eyebrow="Getting Started"
            title="New Patient Consultation"
            description="Required before hormone care. 60 minutes. Laboratory testing is not included in the consult fee."
          />
          <PricingCard
            featured
            name={pricing.initialEvaluation.name}
            price={pricing.initialEvaluation.display}
            billingNote="One-time · 60 minutes"
            summary={pricing.initialEvaluation.summary}
            includes={pricing.initialEvaluation.includes}
            notIncluded={pricing.initialEvaluation.notIncluded}
            href="/contact"
            ctaLabel="Book a Consultation"
          />
        </div>

        <div id="mens-hormone" className="scroll-mt-28">
          <SectionHeading
            compact
            eyebrow="Men"
            title="Men's Hormone Care"
            description="Recurring membership billed every 4 weeks. Includes listed medications, supplies when applicable, shipping, and ongoing clinical monitoring."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <PricingCard
              featured
              name={pricing.mensInjections.name}
              price={pricing.mensInjections.display}
              billingNote={FOUR_WEEK_NOTE}
              summary={pricing.mensInjections.summary}
              includes={pricing.mensInjections.includes}
              notIncluded={pricing.mensInjections.notIncluded}
              href="/contact?interest=mens-hormone"
              ctaLabel="Book a Men's Hormone Consultation"
            />
            <PricingCard
              name={pricing.mensTransdermal.name}
              price={pricing.mensTransdermal.display}
              billingNote={FOUR_WEEK_NOTE}
              summary={pricing.mensTransdermal.summary}
              includes={pricing.mensTransdermal.includes}
              notIncluded={pricing.mensTransdermal.notIncluded}
              href="/contact?interest=mens-hormone"
              ctaLabel="Book a Men's Hormone Consultation"
            />
          </div>
        </div>

        <div id="womens-hormone" className="scroll-mt-28">
          <SectionHeading
            compact
            eyebrow="Women"
            title="Women's Hormone Care"
            description="Recurring membership billed every 4 weeks. Includes listed medications, shipping, and ongoing clinical monitoring."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <PricingCard
              featured
              name={pricing.womensTriple.name}
              price={pricing.womensTriple.display}
              billingNote={FOUR_WEEK_NOTE}
              summary={pricing.womensTriple.summary}
              includes={pricing.womensTriple.includes}
              notIncluded={pricing.womensTriple.notIncluded}
              href="/contact?interest=womens-hormone"
              ctaLabel="Book a Women's Hormone Consultation"
            />
            <PricingCard
              name={pricing.womensAdvanced.name}
              price={pricing.womensAdvanced.display}
              billingNote={FOUR_WEEK_NOTE}
              summary={pricing.womensAdvanced.summary}
              includes={pricing.womensAdvanced.includes}
              notIncluded={pricing.womensAdvanced.notIncluded}
              href="/contact?interest=womens-hormone"
              ctaLabel="Book a Women's Hormone Consultation"
            />
          </div>
        </div>

        <div id="lab-schedule" className="scroll-mt-28">
          <SectionHeading
            compact
            eyebrow="Labs"
            title="Laboratory testing"
            description={labPolicy.notIncluded}
          />
          <p className="text-sm text-charcoal/85 leading-relaxed max-w-3xl">
            {labPolicy.preAppointment} {labPolicy.outsideLabs}
          </p>
        </div>

        <div id="program-policies" className="scroll-mt-28">
          <SectionHeading
            compact
            eyebrow="Membership"
            title="Membership & billing"
            description="Memberships bill every 4 weeks (13 cycles per year) and renew until you cancel. Cancel before the next bill to stop the following cycle."
          />
          <div className="grid gap-6 lg:grid-cols-2 text-sm text-charcoal/85 leading-relaxed">
            <div className="space-y-3">
              <p>{billingPolicy.programCovers}</p>
              <p>{billingPolicy.refunds}</p>
              <p>{billingPolicy.priceAdjustments}</p>
            </div>
            <div className="space-y-3">
              <p>{billingPolicy.cancellation}</p>
              <p>
                <Link
                  href="/recurring-billing"
                  className="text-teal underline underline-offset-2"
                >
                  Full recurring billing and cancellation policy
                </Link>
                {" · "}
                <Link
                  href="/refund-policy"
                  className="text-teal underline underline-offset-2"
                >
                  Refund policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div
          id="get-started"
          className="scroll-mt-28 rounded-md border border-gold/40 bg-cream p-5 md:p-6"
        >
          <h2 className="font-display text-xl text-teal tracking-wide mb-4">
            Get started
          </h2>
          <ul className="space-y-2 text-sm text-charcoal/85 mb-6">
            <li>
              New Patient Consultation — {pricing.initialEvaluation.display}{" "}
              one-time
            </li>
            <li>
              {pricing.mensInjections.name} — {pricing.mensInjections.display}{" "}
              every 4 weeks
            </li>
            <li>
              {pricing.mensTransdermal.name} — {pricing.mensTransdermal.display}{" "}
              every 4 weeks
            </li>
            <li>
              {pricing.womensTriple.name} — {pricing.womensTriple.display} every
              4 weeks
            </li>
            <li>
              {pricing.womensAdvanced.name} — {pricing.womensAdvanced.display}{" "}
              every 4 weeks
            </li>
          </ul>
          <BookButton />
        </div>

        <PricingDisclaimer />
        <p className="text-sm text-charcoal/70 max-w-3xl">
          {SITE.virtualCareStatement}
        </p>
      </section>

      <CTASection
        className="py-12 md:py-16"
        headline="Ready to schedule?"
        subtext="Book a 60-minute New Patient Consultation. We will match a published program to your clinical plan when treatment is appropriate."
        secondaryLabel="See How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
