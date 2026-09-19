import type { Metadata } from "next";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { TreatmentList } from "@/components/TreatmentList";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

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
            href="/programs"
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
        <p className="text-charcoal/90 leading-relaxed">
          For patients enrolled in a hormone care membership, medical weight
          management may be incorporated into ongoing care without an additional
          consultation or recurring management fee. Patients are responsible for
          the cost of prescribed medications and any additional laboratory
          testing that may be required.
        </p>
        <p className="text-charcoal/90 leading-relaxed">
          Patients who are not enrolled in a hormone care membership may
          schedule a medical weight management consultation to discuss treatment
          options. Medical weight management for non-members is billed
          separately by consultation.
        </p>
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="What to Expect" />
          <TreatmentList
            items={[
              "Comprehensive medical evaluation",
              "Review of previous weight-loss efforts",
              "Review of current medications",
              "Baseline laboratory testing when indicated",
              "Individualized treatment planning",
              "Prescription weight-management medications when indicated",
              "Medication management and monitoring",
              "Side-effect monitoring",
              "Weight and health progress tracking",
              "Nutrition and lifestyle guidance",
              "Physical activity guidance",
              "Routine follow-up visits",
              "Treatment adjustments as needed",
              "Prescription refill management",
            ]}
          />
        </div>
      </section>

      <CTASection
        headline="Ready to Get Started?"
        subtext="Schedule a consultation to discuss your health history, weight-related concerns, and treatment goals."
        ctaLabel="Book a Weight Management Consultation"
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
