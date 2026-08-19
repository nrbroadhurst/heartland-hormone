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
  title: "Testosterone Replacement Therapy in Overland Park, KS",
  description:
    "TRT and men's hormone care in Overland Park and Kansas City, with telehealth throughout Kansas and Missouri. Evaluation, monitoring and follow-up from Heartland Hormone.",
  path: PATH,
});

export default function MensHormonePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Men's Hormone Therapy & Testosterone Replacement",
          "Individualized evaluation and treatment for men experiencing symptoms that may be related to testosterone deficiency.",
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Men's Hormone Therapy", path: PATH },
        ])}
      />

      <PageHero
        eyebrow="Men's Care"
        title="Men's Hormone Therapy & Testosterone Replacement"
        description={`Heartland Hormone & Wellness Clinic provides individualized evaluation and treatment for men experiencing symptoms that may be related to testosterone deficiency. Care is available in person in the Kansas City area and through telehealth for eligible patients throughout Kansas and Missouri.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Schedule a Men's Hormone Consultation" />
          <BookButton
            label="View Men's Hormone Pricing"
            href="/pricing#mens-hormone"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Could Low Testosterone Be Affecting You?" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          These symptoms can have many causes. Laboratory testing and clinical
          evaluation are necessary before treatment.
        </p>
        <TreatmentList
          items={[
            "Low energy",
            "Reduced libido",
            "Erectile changes",
            "Loss of strength",
            "Difficulty maintaining muscle",
            "Increased body fat",
            "Changes in mood",
            "Decreased motivation",
            "Difficulty concentrating",
            "Poor recovery",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="Testosterone Replacement Therapy" />
          <div className="space-y-4 text-charcoal/90 leading-relaxed -mt-4">
            <p>
              Testosterone replacement may be considered for appropriately
              evaluated patients based on symptoms, medical history, examination
              when appropriate and laboratory findings. Not everyone with these
              symptoms receives testosterone.
            </p>
            <p>
              When treatment is appropriate, options may include testosterone
              cypionate injections or other clinically appropriate formulations.
              Follow-up includes symptom review, laboratory monitoring and
              medication adjustments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="What Your TRT Program May Include" />
        <TreatmentList
          items={[
            "Comprehensive initial evaluation",
            "Baseline laboratory review",
            "Testosterone medication when clinically appropriate",
            "Injection supplies when applicable",
            "Education on medication administration",
            "Routine follow-up",
            "Laboratory monitoring",
            "Symptom monitoring",
            "Hematocrit/CBC monitoring when appropriate",
            "Blood pressure monitoring",
            "Medication adjustments",
            "Prescription refill management",
            "Provider messaging",
            "In-office care when necessary",
            "Telehealth follow-up when appropriate",
          ]}
        />
        <p className="mt-6 text-sm text-charcoal/75 leading-relaxed">
          Male HRT membership starts at {pricing.mensInjections.display} for base
          injections and {pricing.mensTransdermal.display} for transdermal cream or
          troche options. The {pricing.initialEvaluation.display} initial evaluation
          and laboratory fees are separate. Therapies such as hCG, anastrozole and
          other add-ons listed on the pricing page are not included.{" "}
          <Link href="/pricing#mens-hormone" className="text-teal underline underline-offset-2">
            View men&apos;s hormone pricing
          </Link>
          .
        </p>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="Sexual Wellness" />
          <p className="text-charcoal/90 leading-relaxed -mt-4">
            Erectile function and sexual wellness can be evaluated as part of
            men&apos;s health care. Tadalafil and similar prescription treatments
            may be used when clinically appropriate. Erectile dysfunction is not
            always caused by testosterone and is assessed on its own.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <p className="text-sm text-charcoal/75 leading-relaxed">
          {SITE.telehealthStatement} {SITE.serviceAreaLine}
        </p>
        <CareTeamNote />
      </section>

      <CTASection
        headline="Schedule a Men's Hormone Consultation"
        subtext="In-person care in the Kansas City area, with telehealth throughout Kansas and Missouri when eligible."
        ctaLabel="Schedule a Men's Hormone Consultation"
        secondaryLabel="View Men's Hormone Pricing"
        secondaryHref="/pricing#mens-hormone"
      />
    </>
  );
}
