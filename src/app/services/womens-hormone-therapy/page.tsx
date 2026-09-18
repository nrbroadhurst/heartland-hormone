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
          "Individualized care for women navigating the menopause transition, including perimenopause, menopause, and postmenopause.",
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
        title="Women's Hormone & Menopause Care"
        description="Heartland provides individualized care for women navigating the menopause transition, including perimenopause, menopause, and postmenopause. Treatment recommendations are based on your symptoms, health history, risk factors, laboratory findings, and personal health goals."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a Women's Hormone Consultation" />
          <BookButton
            label="View Pricing & Programs"
            href="/programs#womens-hormone"
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
            "Symptoms that may be related to PMOS/PCOS",
            "Reduced sense of well-being",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <p className="text-charcoal/90 leading-relaxed">
            PMOS/PCOS (polycystic ovary syndrome) can affect cycles, androgen
            levels, metabolic health, and long-term wellness. Heartland evaluates
            these concerns as part of women&apos;s hormone and metabolic care.
            Treatment is individualized following a review of symptoms, health
            history, examination when indicated, and laboratory findings.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6 space-y-10">
        <div className="space-y-6">
          <SectionHeading title="Customized Hormone Therapy" />
          <p className="text-charcoal/90 leading-relaxed -mt-4">
            Heartland provides individualized hormone therapy based on symptoms,
            health history, treatment goals, and laboratory findings. Treatment
            plans are developed around each patient&apos;s unique needs, goals, and
            preferences.
          </p>
          <p className="text-charcoal/90 leading-relaxed">
            Ongoing care includes symptom review, laboratory monitoring, and
            treatment adjustments as needed.
          </p>
        </div>

        <div>
          <SectionHeading title="Why Women's Hormone Care Is Individualized" />
          <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
            Treatment recommendations are based on factors that may include:
          </p>
          <TreatmentList
            items={[
              "Uterine status",
              "Bleeding history",
              "Breast health history",
              "Cardiovascular risk factors",
              "Thromboembolic risk factors",
              "Family history",
              "Symptom profile",
              "Medication tolerance",
              "Sexual health concerns",
              "Vaginal symptoms",
              "Potential medication interactions",
              "Individual treatment goals",
            ]}
          />
        </div>
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
            {pricing.womensTriple.name} is {pricing.womensTriple.display} every
            4 weeks. {pricing.womensAdvanced.name} is{" "}
            {pricing.womensAdvanced.display} every 4 weeks. The{" "}
            {pricing.initialEvaluation.name} ({pricing.initialEvaluation.display})
            and laboratory fees are separate.{" "}
            <Link
              href="/programs#womens-hormone"
              className="text-teal underline underline-offset-2"
            >
              View women&apos;s hormone pricing
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
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs#womens-hormone"
      />
    </>
  );
}
