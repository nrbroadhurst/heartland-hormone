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
    "Four steps from labs and consultation to ongoing monitoring at Heartland Hormone. Local Kansas City-area clinic with convenient follow-up options.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title="How It Works"
        description="A straightforward path from labs and first conversation to ongoing care at our Kansas City-area clinic."
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
          {SITE.virtualCareStatement} {SITE.firstVisitPreference} We do not promise
          that prescriptions can always be provided entirely through virtual care.
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
        headline="Ready to get started?"
        subtext="Book a consultation at our Kansas City-area clinic."
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
