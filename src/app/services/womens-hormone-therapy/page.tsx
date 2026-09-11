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

const PATH = "/services/womens-hormone-therapy";

export const metadata: Metadata = pageMeta({
  title: "Menopause & Women's Hormone Care in Overland Park, KS",
  description:
    "Perimenopause and menopause care in Overland Park and Kansas City. Individualized women's hormone care with clinical evaluation and ongoing monitoring.",
  path: PATH,
});

export default function WomensHormonePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Women's Hormone & Menopause Care",
          "Individualized hormone care for women experiencing perimenopause, menopause and related symptoms.",
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Women's Hormone & Menopause Care", path: PATH },
        ])}
      />

      <PageHero
        eyebrow="Women's Care"
        title="Women's Hormone & Menopause Care"
        description="Heartland provides individualized hormone and menopause care for women experiencing perimenopause, menopause and related symptoms. Treatment is based on symptoms, medical history, risk factors and each patient's individual goals."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a Women's Hormone Consultation" />
          <BookButton
            label="View Programs & Pricing"
            href="/pricing#womens-hormone"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Symptoms We Commonly Evaluate" />
        <TreatmentList
          items={[
            "Hot flashes",
            "Night sweats",
            "Disrupted sleep",
            "Fatigue",
            "Changes in mood",
            "Low libido",
            "Vaginal symptoms",
            "Sexual wellness concerns",
            "Changes in body composition",
            "Reduced sense of well-being",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6 space-y-6">
          <SectionHeading title="Customized Hormone Therapy" />
          <p className="text-charcoal/90 leading-relaxed -mt-4">
            A patient may receive one or more prescription therapies based upon
            clinical evaluation. Specific medications, strengths and combinations
            are determined during consultation and documented in your medical
            record rather than listed on this public website.
          </p>
          <p className="text-charcoal/90 leading-relaxed">
            FDA-approved hormone therapies are used when appropriate. Customized
            prescription formulations may be considered when clinically appropriate
            and legally available. Compounded hormones are not described as safer,
            more natural, superior or free of risk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Why Women's Hormone Care Requires Individualization" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          Hormone therapy decisions consider:
        </p>
        <TreatmentList
          items={[
            "Uterine status",
            "Bleeding history",
            "Breast history",
            "Cardiovascular risk",
            "Thromboembolic risk",
            "Family history",
            "Symptom profile",
            "Medication tolerance",
            "Sexual health concerns",
            "Vaginal symptoms",
            "Medication interactions",
            "Individual treatment goals",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="What Ongoing Care May Include" />
          <TreatmentList
            items={[
              "Initial evaluation",
              "Medication review",
              "Review of previous labs",
              "Appropriate laboratory testing",
              "Individualized treatment planning",
              "Medication management",
              "Dose adjustments",
              "Symptom tracking",
              "Side-effect monitoring",
              "Routine follow-up visits",
              "Prescription refill management",
              "Provider messaging",
            ]}
          />
          <p className="mt-6 text-sm text-charcoal/75 leading-relaxed">
            {pricing.womensTriple.name} starts at {pricing.womensTriple.display}.
            {pricing.womensAdvanced.name} is {pricing.womensAdvanced.display}.
            The {pricing.initialEvaluation.display} initial consultation and
            laboratory fees are separate.{" "}
            <Link
              href="/pricing#womens-hormone"
              className="text-teal underline underline-offset-2"
            >
              View women&apos;s hormone programs and pricing
            </Link>
            .
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
        headline="Book a Women's Hormone Consultation"
        subtext="Perimenopause and menopause care with ongoing clinical monitoring."
        ctaLabel="Book a Women's Hormone Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing#womens-hormone"
      />
    </>
  );
}
