import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { StepList } from "@/components/StepList";
import { PatientFlowGuide } from "@/components/PatientFlowGuide";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How It Works",
  description:
    "Schedule a consultation, complete a comprehensive evaluation and laboratory testing, review your results with your provider, and begin ongoing care with regular monitoring and follow-up.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title="How It Works"
        description="Schedule a consultation, complete a comprehensive evaluation and laboratory testing, review your results with your provider, and begin ongoing care with regular monitoring and follow-up."
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <SectionHeading
          title="Four Simple Steps"
          description="Every patient begins with a consultation and comprehensive evaluation. Treatment recommendations are individualized and based on symptoms, health history, and laboratory findings."
        />
        <StepList />
      </section>

      <section className="border-y border-gold/20 bg-teal/5">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
          <SectionHeading
            title="Using the Website and Patient Portal"
            description="A simple map of how this website, OptiMantra scheduling, and the patient portal work together."
          />
          <PatientFlowGuide />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 text-center">
        <p className="text-charcoal/90 mb-2 font-medium">Questions?</p>
        <p className="text-charcoal/80 mb-4">
          Visit our{" "}
          <Link href="/faq" className="text-teal underline underline-offset-2">
            FAQ page
          </Link>{" "}
          or view{" "}
          <Link href="/programs" className="text-teal underline underline-offset-2">
            Pricing &amp; Programs
          </Link>{" "}
          for additional information.
        </p>
      </section>

      <CTASection
        headline="Ready to Restore Your Energy and Confidence?"
        subtext="Schedule a consultation to discuss your symptoms, health history, and goals, and learn whether hormone care or medical weight management may be right for you."
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
