import type { Metadata } from "next";
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
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Programs & Pricing",
  description:
    "Heartland Hormone fee schedule: $200 initial evaluation, male HRT from $199/month, female HRT from $199/month, lab schedule and membership policies.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Pricing"
        title="Programs & Pricing"
        description="Published membership fees for hormone replacement therapy. Laboratory fees are paid separately, typically before labs are ordered. The $200 initial evaluation applies to new HRT and weight-management patients."
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8 space-y-16">
        <div className="rounded-md border border-gold/40 bg-teal/5 px-5 py-4 text-sm text-charcoal/85 leading-relaxed max-w-3xl">
          <strong className="text-teal">Self-pay programs:</strong> Heartland does
          not bill insurance for monthly membership fees. A superbill can be
          provided on request. HSA or FSA eligibility depends on your plan
          administrator. Laboratory testing may be billed through insurance or paid
          at discounted cash rates through Quest Diagnostics and LabCorp.
        </div>

        <div id="initial-evaluation" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Getting Started"
            title="Initial Evaluation"
            description="Required for new HRT and medical weight-management patients. Laboratory fees are paid separately, typically before labs are ordered."
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
            title="Male HRT Membership Options"
            description="Monthly membership includes core testosterone therapy, supplies, shipping, routine lab interpretation and ongoing provider care when clinically appropriate."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <PricingCard
              featured
              name={pricing.mensInjections.name}
              price={pricing.mensInjections.display}
              summary={pricing.mensInjections.summary}
              includes={pricing.mensInjections.includes}
              notIncluded={pricing.mensInjections.notIncluded}
              href="/contact?interest=mens-hormone"
              ctaLabel="Schedule a Men's Hormone Consultation"
            />
            <PricingCard
              name={pricing.mensTransdermal.name}
              price={pricing.mensTransdermal.display}
              summary={pricing.mensTransdermal.summary}
              includes={pricing.mensTransdermal.includes}
              notIncluded={pricing.mensTransdermal.notIncluded}
              href="/contact?interest=mens-hormone"
              ctaLabel="Schedule a Men's Hormone Consultation"
            />
          </div>
        </div>

        <div id="womens-hormone" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Women"
            title="Female HRT Membership Options"
            description="Monthly membership includes the listed hormone medications, supplies, shipping, routine lab interpretation and ongoing provider care when clinically appropriate."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <PricingCard
              featured
              name={pricing.womensTriple.name}
              price={pricing.womensTriple.display}
              summary={pricing.womensTriple.summary}
              includes={pricing.womensTriple.includes}
              notIncluded={pricing.womensTriple.notIncluded}
              href="/contact?interest=womens-hormone"
              ctaLabel="Schedule a Women's Hormone Consultation"
            />
            <PricingCard
              name={pricing.womensAdvanced.name}
              price={pricing.womensAdvanced.display}
              summary={pricing.womensAdvanced.summary}
              includes={pricing.womensAdvanced.includes}
              notIncluded={pricing.womensAdvanced.notIncluded}
              href="/contact?interest=womens-hormone"
              ctaLabel="Schedule a Women's Hormone Consultation"
            />
          </div>
        </div>

        <div id="weight-management" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Weight"
            title="Medical Weight Management"
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
              ctaLabel="Schedule a Weight Management Consultation"
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

        <div id="membership-policies" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Policies"
            title="Membership Overview & Exclusions"
            description={billingPolicy.membershipCovers}
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                Not included in monthly membership
              </h3>
              <TreatmentList items={membershipExclusions} />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Recurring billing & non-payment
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-3">
                  {billingPolicy.recurring}
                </p>
                <p className="text-sm text-charcoal/85 leading-relaxed">
                  {billingPolicy.nonPayment}
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Shipping
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-6">
                  {billingPolicy.shipping}
                </p>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Refunds
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed mb-6">
                  {billingPolicy.refunds}
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-3">
                  Market volatility & pricing adjustments
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed">
                  {billingPolicy.priceAdjustments}
                </p>
              </div>
            </div>
          </div>
        </div>

        <PricingDisclaimer />
        <p className="text-sm text-charcoal/70 max-w-3xl">
          {SITE.telehealthStatement}
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
