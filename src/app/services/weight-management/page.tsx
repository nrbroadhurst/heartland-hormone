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

const PATH = "/services/weight-management";

export const metadata: Metadata = pageMeta({
  title: "Medical Weight Management in Overland Park, KS",
  description:
    "Medical weight management in Overland Park and Kansas City. Clinical evaluation, monitoring and prescription treatment when appropriate.",
  path: PATH,
});

export default function WeightManagementPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd(
          "Medical Weight Management",
          "Individualized medical weight-management care for adults who may benefit from prescription treatment, lifestyle guidance and ongoing clinical monitoring.",
          PATH,
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Medical Weight Management", path: PATH },
        ])}
      />

      <PageHero
        eyebrow="Weight Management"
        title="Medical Weight Management"
        description="Heartland provides individualized medical weight-management care for adults who may benefit from prescription treatment, lifestyle guidance and ongoing clinical monitoring."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a Weight Management Consultation" />
          <BookButton
            label="View Programs & Pricing"
            href="/pricing#weight-management"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Prescription Weight-Management Treatment" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          Prescription weight-management treatment may be considered when medically
          appropriate following a clinical evaluation. Medication selection depends
          on health history, treatment goals, contraindications, availability, cost
          and patient preference.
        </p>
        <TreatmentList
          items={[
            "Medical evaluation for weight-related health concerns",
            "Individualized treatment planning",
            "Prescription treatment when clinically appropriate",
            "Dose management and side-effect monitoring",
            "Nutrition and activity guidance",
            "Ongoing medical follow-up",
            "Weight and health-progress tracking",
          ]}
        />
        <p className="mt-6 text-charcoal/90 leading-relaxed">
          Customized prescription formulations may be considered when clinically
          appropriate and legally available. Compounded medications are not
          FDA-approved products and are not described as equivalent to
          FDA-approved branded medications. Availability is not guaranteed for
          every patient.
        </p>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="What Our Weight Management Program May Include" />
          <TreatmentList
            items={[
              "Comprehensive medical evaluation",
              "Review of previous weight-loss attempts",
              "Medication review",
              "Baseline laboratory evaluation when appropriate",
              "Prescription treatment when clinically appropriate",
              "Injection education when applicable",
              "Dose titration",
              "Side-effect management",
              "Weight tracking",
              "Basic nutrition guidance",
              "Physical activity guidance",
              "Clinical follow-up during active treatment",
              "Prescription refill management",
              "Virtual follow-up when clinically and legally appropriate",
            ]}
          />
          <p className="mt-6 text-sm text-charcoal/75 leading-relaxed">
            {pricing.weightManagement.summary}{" "}
            <Link
              href="/pricing#weight-management"
              className="text-teal underline underline-offset-2"
            >
              View weight-management pricing
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 md:px-6">
        <p className="text-sm text-charcoal/75 leading-relaxed">
          {SITE.virtualCareStatement} {SITE.serviceAreaLine} We do not guarantee a
          specific amount of weight loss, and not every patient qualifies for
          prescription weight-management treatment.
        </p>
        <CareTeamNote />
      </section>

      <CTASection
        headline="Book a Weight Management Consultation"
        subtext="Clinician-guided care with monitoring, not a guaranteed prescription."
        ctaLabel="Book a Weight Management Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing#weight-management"
      />
    </>
  );
}
