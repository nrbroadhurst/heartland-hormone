import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { StepList } from "@/components/StepList";
import { CTASection } from "@/components/CTASection";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "How It Works",
  description:
    "Four steps from consultation to ongoing monitoring at Heartland Hormone. In-person care in the Kansas City area and telehealth throughout Kansas when eligible.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title="How It Works"
        description="A straightforward path from first conversation to ongoing care, whether you join us in Overland Park / Kansas City or by telehealth throughout Kansas."
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <SectionHeading
          title="Four steps"
          description="Every patient starts with a consultation and appropriate evaluation. Treatment decisions are made individually."
        />
        <StepList />
        <p className="mt-8 text-sm text-charcoal/75 max-w-3xl leading-relaxed">
          {SITE.telehealthStatement} Some medications, including certain
          controlled substances, may require in-person evaluation. We do not
          promise that testosterone or other prescriptions can always be provided
          entirely online.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6 lg:px-8 text-center">
        <p className="text-charcoal/80 mb-4">
          Questions about which path fits you?{" "}
          <Link href="/faq" className="text-teal underline underline-offset-2">
            Visit the FAQ
          </Link>{" "}
          or{" "}
          <Link href="/pricing" className="text-teal underline underline-offset-2">
            view programs and pricing
          </Link>
          .
        </p>
      </section>

      <CTASection
        headline="Schedule a Consultation"
        subtext="Choose men's hormone care, women's hormone care or medical weight management."
        ctaLabel="Schedule a Consultation"
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
