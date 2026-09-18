import type { Metadata } from "next";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { TreatmentList } from "@/components/TreatmentList";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

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
        title="Men's Hormone Care"
        description="Heartland provides individualized evaluation, treatment, and ongoing monitoring for men experiencing symptoms that may be associated with low testosterone levels, including low energy, decreased libido, reduced strength, changes in body composition, mood changes, and brain fog."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookButton label="Book a Men's Hormone Consultation" />
          <BookButton
            label="View Pricing & Programs"
            href="/programs#mens-hormone"
            variant="outline"
          />
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="Could a Hormone Imbalance Be Affecting You?" />
        <p className="text-charcoal/90 leading-relaxed -mt-4 mb-6">
          These symptoms can have many causes. A comprehensive evaluation and
          laboratory testing are important to determine whether hormonal changes
          may be contributing.
        </p>
        <TreatmentList
          items={[
            "Low energy",
            "Reduced libido",
            "Erectile dysfunction",
            "Loss of strength",
            "Changes in body composition",
            "Mood changes",
            "Decreased motivation",
            "Difficulty concentrating",
            "Slower recovery from exercise or physical activity",
          ]}
        />
      </section>

      <section className="bg-teal/5 border-y border-gold/20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
          <SectionHeading title="Individualized Hormone Treatment" />
          <div className="space-y-4 text-charcoal/90 leading-relaxed -mt-4">
            <p>
              Treatment begins with a comprehensive evaluation of symptoms,
              medical history, and laboratory findings. Based on these results,
              Heartland develops a personalized treatment plan designed to
              address each patient&apos;s individual needs and goals.
            </p>
            <p>
              Ongoing care includes symptom review, laboratory monitoring, and
              treatment adjustments as needed to help patients achieve and
              maintain the best possible results.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading title="What to Expect" />
        <TreatmentList
          items={[
            "Comprehensive initial evaluation",
            "Baseline laboratory testing and review",
            "Individualized treatment plan",
            "Education on medication administration",
            "Routine follow-up visits",
            "Laboratory monitoring",
            "Symptom assessment and monitoring",
            "Treatment adjustments as needed",
            "Prescription refill management",
            "In-office care when necessary",
          ]}
        />
      </section>

      <CTASection
        headline="Ready to Get Started?"
        subtext="Schedule a consultation to discuss your symptoms, review your health history, and determine whether hormone therapy is right for you."
        ctaLabel="Schedule a Consultation"
      />
    </>
  );
}
