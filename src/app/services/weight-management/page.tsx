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
          "Heartland provides medical evaluation and individualized treatment for weight-related health concerns. Care includes prescription weight management medications when indicated, ongoing monitoring, and personalized support to help patients achieve their health goals.",
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
        description="Heartland provides medical evaluation and individualized treatment for weight-related health concerns. Care includes prescription weight management medications when indicated, ongoing monitoring, and personalized support to help patients achieve their health goals."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a Weight Management Consultation" />
          <BookButton
            label="View Pricing & Programs"
            href="/programs#additional-services"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6 space-y-6">
        <SectionHeading title="Prescription Weight Management" />
        <p className="text-charcoal/90 leading-relaxed -mt-4">
          Heartland provides individualized medical weight management based on
          your health history, current health status, treatment goals, and
          response to treatment. Treatment plans are developed around each
          patient&apos;s unique needs and may include prescription medications as
          part of a comprehensive approach to weight management.
        </p>
        <p className="text-charcoal/90 leading-relaxed">
          Ongoing care includes weight and health progress monitoring,
          side-effect management, and treatment adjustments as needed.
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
              href="/programs#additional-services"
              className="text-teal underline underline-offset-2"
            >
              View weight-management programs
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
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs#additional-services"
      />
    </>
  );
}
