import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { TreatmentList } from "@/components/TreatmentList";
import { CTASection } from "@/components/CTASection";
import { CareTeamNote } from "@/components/ProviderPreview";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { pricing } from "@/lib/pricing";
import { SITE } from "@/lib/site";

const PATH = "/services/mens-hormone-therapy";

export const metadata: Metadata = pageMeta({
  title: "Men's Hormone Care in Overland Park, KS",
  description:
    "Men's hormone care and evaluation in Overland Park and Kansas City. Clinical evaluation, laboratory testing, individualized treatment and ongoing monitoring from a local Kansas provider.",
  path: PATH,
});

export default function MensHormonePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Men's Hormone Care",
          "Individualized evaluation and treatment for men experiencing symptoms that may be related to hormone deficiency.",
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Men's Hormone Care", path: PATH },
        ])}
      />

      <PageHero
        eyebrow="Men's Care"
        title="Men's Hormone Care"
        description="Heartland provides individualized evaluation and treatment for men experiencing symptoms that may be related to hormone deficiency. Care is available in person at our Kansas City-area clinic, with virtual follow-up when clinically and legally appropriate."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a Men's Hormone Consultation" />
          <BookButton
            label="View Programs & Pricing"
            href="/pricing#mens-hormone"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Could a Hormone Imbalance Be Affecting You?" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          These symptoms can have many causes. Laboratory testing and clinical
          evaluation are necessary before treatment.
        </p>
        <TreatmentList
          items={[
            "Low energy",
            "Reduced libido",
            "Erectile concerns",
            "Loss of strength",
            "Changes in body composition",
            "Changes in mood",
            "Decreased motivation",
            "Difficulty concentrating",
            "Poor recovery",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="Individualized Hormone Treatment" />
          <div className="space-y-4 text-charcoal/90 leading-relaxed -mt-4">
            <p>
              Hormone replacement may be considered for appropriately evaluated
              patients based on symptoms, medical history, examination when
              appropriate and laboratory findings. Not everyone with these
              symptoms receives hormone treatment.
            </p>
            <p>
              When treatment is clinically appropriate, options are selected
              individually. Follow-up includes symptom review, laboratory
              monitoring and medication adjustments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="What Your Program May Include" />
        <TreatmentList
          items={[
            "Comprehensive initial evaluation",
            "Baseline laboratory review",
            "Individualized hormone treatment when clinically appropriate",
            "Supplies when applicable",
            "Education on medication administration",
            "Routine clinical follow-up",
            "Laboratory monitoring",
            "Symptom monitoring",
            "Medication adjustments",
            "Prescription refill management",
            "In-office care when necessary",
            "Virtual follow-up when clinically and legally appropriate",
          ]}
        />
        <p className="mt-6 text-sm text-charcoal/75 leading-relaxed">
          {pricing.mensInjections.name} starts at {pricing.mensInjections.display}.
          {pricing.mensTransdermal.name} is {pricing.mensTransdermal.display}.
          The {pricing.initialEvaluation.display} initial consultation and
          laboratory fees are separate. Therapies listed as exclusions on the
          pricing page are not included.{" "}
          <Link href="/pricing#mens-hormone" className="text-teal underline underline-offset-2">
            View men&apos;s hormone programs and pricing
          </Link>
          .
        </p>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="Sexual Wellness" />
          <p className="text-charcoal/90 leading-relaxed -mt-4">
            Erectile function and sexual wellness can be evaluated as part of
            men&apos;s health care. Prescription treatments may be considered when
            clinically appropriate. Sexual dysfunction is not always caused by
            hormone changes and is assessed individually.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <p className="text-sm text-charcoal/75 leading-relaxed">
          {SITE.virtualCareStatement} {SITE.serviceAreaLine}
        </p>
        <CareTeamNote />
      </section>

      <CTASection
        headline="Book a Men's Hormone Consultation"
        subtext="Local Kansas City-area care with virtual follow-up when clinically and legally appropriate."
        ctaLabel="Book a Men's Hormone Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing#mens-hormone"
      />
    </>
  );
}
