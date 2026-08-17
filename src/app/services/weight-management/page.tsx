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
  title: "Medical Weight Loss in Overland Park, KS",
  description:
    "Medical weight management in Overland Park and Kansas City, including GLP-1 and GIP/GLP-1 treatment when appropriate. Semaglutide and tirzepatide with clinical follow-up.",
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
        description="Heartland Hormone & Wellness Clinic provides individualized medical weight-management care for adults who may benefit from prescription treatment, lifestyle guidance and ongoing clinical monitoring."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Schedule a Weight Management Consultation" />
          <BookButton
            label="View Weight Management Pricing"
            href="/pricing#weight-management"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Prescription Weight-Management Options" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          Prescription medications may be considered when clinically appropriate
          following a medical evaluation. Medication selection depends on health
          history, treatment goals, contraindications, availability, cost and
          patient preference.
        </p>
        <TreatmentList
          items={[
            "GLP-1 medications",
            "GIP/GLP-1 medications",
            "Semaglutide",
            "Tirzepatide",
          ]}
        />
        <p className="mt-6 text-charcoal/90 leading-relaxed">
          FDA-approved branded medications are prescribed when appropriate and may
          be filled through the patient&apos;s pharmacy or available manufacturer
          programs. Patient-specific compounded medications may be considered when
          legally and clinically appropriate. Compounded semaglutide or
          tirzepatide is not automatically available to every patient and is not
          described as equivalent to an FDA-approved branded product.
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
              "Prescription medication when appropriate",
              "Injection education",
              "Dose titration",
              "Side-effect management",
              "Weight tracking",
              "BMI tracking",
              "Basic nutrition guidance",
              "Physical activity guidance",
              "Monthly follow-up during active treatment",
              "Prescription refill management",
              "Telehealth follow-up when appropriate",
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
          {SITE.telehealthStatement} {SITE.serviceAreaLine} We do not guarantee a
          specific amount of weight loss, and not every patient qualifies for
          GLP-1 therapy.
        </p>
        <CareTeamNote />
      </section>

      <CTASection
        headline="Schedule a Weight Management Consultation"
        subtext="Provider-guided care with monitoring, not a one-time prescription."
        ctaLabel="Schedule a Weight Management Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing#weight-management"
      />
    </>
  );
}
