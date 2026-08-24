import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { PricingDisclaimer } from "@/components/MedicalDisclaimer";
import { CTASection } from "@/components/CTASection";
import { TreatmentList } from "@/components/TreatmentList";
import { pageMeta } from "@/lib/seo";
import {
  pricing,
  labPolicy,
  membershipExclusions,
  billingPolicy,
} from "@/lib/pricing";
import { billingConfig } from "@/lib/billing";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Programs & Pricing",
  description:
    "Heartland Hormone clinical program pricing: $200 initial consultation, men's and women's hormone care programs, medical weight management, lab schedule and billing policies.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Pricing"
        title="Programs & Pricing"
        description="Published clinical program fees for hormone care and medical weight management. Laboratory fees are paid separately, typically before labs are ordered. The $200 initial consultation applies to new hormone care and weight-management patients."
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8 space-y-16">
        <div className="rounded-md border border-gold/40 bg-teal/5 px-5 py-4 text-sm text-charcoal/85 leading-relaxed max-w-3xl">
          <strong className="text-teal">Self-pay programs:</strong> Heartland does
          not bill insurance for recurring program fees. A superbill can be
          provided on request. HSA or FSA eligibility depends on your plan
          administrator. Laboratory testing may be billed through insurance or paid
          at discounted cash rates through Quest Diagnostics and LabCorp.
        </div>

        <div className="rounded-md border border-gold/40 bg-cream px-5 py-4 text-sm text-charcoal/85 leading-relaxed max-w-3xl">
          <strong className="text-teal">Four-week billing cycle:</strong>{" "}
          {billingConfig.fourWeekExplanation} Recurring programs are billed{" "}
          {billingConfig.frequencyLabel}. {billingConfig.cyclesPerYearLabel}.
        </div>

        <div id="initial-evaluation" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Getting Started"
            title="Initial Medical Consultation"
            description="Required for new hormone care and medical weight-management patients. Laboratory fees are paid separately, typically before labs are ordered."
          />
          <div className="max-w-2xl">
            <PricingCard
              featured
              name={pricing.initialEvaluation.name}
              price={pricing.initialEvaluation.display}
              summary={pricing.initialEvaluation.summary}
              includes={pricing.initialEvaluation.includes}
              notIncluded={pricing.initialEvaluation.notIncluded}
              href="/contact"
              ctaLabel="Book a Consultation"
            />
          </div>
        </div>

        <div id="mens-hormone" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Men"
            title="Men's Hormone Care Programs"
            description="Recurring programs include core hormone care, supplies, shipping when applicable, routine lab interpretation and ongoing clinical monitoring when clinically appropriate."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <PricingCard
              featured
              name={pricing.mensInjections.name}
              price={pricing.mensInjections.display}
              billingNote={billingConfig.cyclesPerYearLabel}
              summary={pricing.mensInjections.summary}
              includes={pricing.mensInjections.includes}
              notIncluded={pricing.mensInjections.notIncluded}
              href="/contact?interest=mens-hormone"
              ctaLabel="Book a Men's Hormone Consultation"
            />
            <PricingCard
              name={pricing.mensTransdermal.name}
              price={pricing.mensTransdermal.display}
              billingNote={billingConfig.cyclesPerYearLabel}
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
            eyebrow="Women"
            title="Women's Hormone Care Programs"
            description="Recurring programs include program medications when clinically appropriate, supplies, shipping, routine lab interpretation and ongoing clinical monitoring."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <PricingCard
              featured
              name={pricing.womensTriple.name}
              price={pricing.womensTriple.display}
              billingNote={billingConfig.cyclesPerYearLabel}
              summary={pricing.womensTriple.summary}
              includes={pricing.womensTriple.includes}
              notIncluded={pricing.womensTriple.notIncluded}
              href="/contact?interest=womens-hormone"
              ctaLabel="Book a Women's Hormone Consultation"
            />
            <PricingCard
              name={pricing.womensAdvanced.name}
              price={pricing.womensAdvanced.display}
              billingNote={billingConfig.cyclesPerYearLabel}
              summary={pricing.womensAdvanced.summary}
              includes={pricing.womensAdvanced.includes}
              notIncluded={pricing.womensAdvanced.notIncluded}
              href="/contact?interest=womens-hormone"
              ctaLabel="Book a Women's Hormone Consultation"
            />
          </div>
        </div>

        <div id="weight-management" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Weight"
            title="Medical Weight Management Program"
            description={pricing.weightManagement.summary}
          />
          <div className="max-w-2xl">
            <PricingCard
              featured
              name={pricing.weightManagement.name}
              price={pricing.weightManagement.display}
              summary={pricing.weightManagement.summary}
              includes={pricing.weightManagement.includes}
              notIncluded={pricing.weightManagement.notIncluded}
              href="/contact?interest=weight-management"
              ctaLabel="Book a Weight Management Consultation"
            />
          </div>
        </div>

        <div id="lab-schedule" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Labs"
            title="Laboratory & Appointment Schedule"
            description={labPolicy.notIncluded}
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                Before appointments
              </h3>
              <p className="text-sm text-charcoal/85 leading-relaxed mb-4">
                {labPolicy.preAppointment}
              </p>
              <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                Follow-up timing
              </h3>
              <TreatmentList
                items={[
                  labPolicy.titration,
                  labPolicy.maintenance,
                  labPolicy.annual,
                  labPolicy.modality,
                ]}
              />
            </div>
            <div className="rounded-md border border-gold/40 bg-teal/5 p-6">
              <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                Lab fee disclosure
              </h3>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                {labPolicy.notIncluded}
              </p>
            </div>
          </div>
        </div>

        <div id="program-policies" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Policies"
            title="Program Overview, Billing & Exclusions"
            description={billingPolicy.programCovers}
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                Not included in recurring programs
              </h3>
              <TreatmentList items={membershipExclusions} />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Recurring billing
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-3">
                  {billingPolicy.recurring}
                </p>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-3">
                  {billingPolicy.nonPayment}
                </p>
                <p className="text-sm text-charcoal/85 leading-relaxed">
                  <Link href="/recurring-billing" className="text-teal underline underline-offset-2">
                    View recurring billing and cancellation policy
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Shipping & pharmacy fulfillment
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-6">
                  {billingPolicy.shipping} {billingPolicy.pharmacyFulfillment}
                </p>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Refunds
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-6">
                  {billingPolicy.refunds}{" "}
                  <Link href="/refund-policy" className="text-teal underline underline-offset-2">
                    View refund policy
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Treatment changes & pricing adjustments
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-3">
                  {billingPolicy.treatmentChanges}
                </p>
                <p className="text-sm text-charcoal/85 leading-relaxed">
                  {billingPolicy.priceAdjustments}
                </p>
              </div>
            </div>
          </div>
        </div>

        <PricingDisclaimer />
        <p className="text-sm text-charcoal/70 max-w-3xl">
          {SITE.virtualCareStatement}
        </p>
      </section>

      <CTASection
        headline="Questions about which program fits?"
        subtext="Book a consultation. We will outline options after a clinical evaluation."
        secondaryLabel="See How It Works"
        secondaryHref="/how-it-works"
      />
    </>
  );
}
