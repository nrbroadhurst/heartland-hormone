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
    "Schedule a consultation, complete a comprehensive evaluation including labs, receive a personalized plan when treatment is appropriate, and continue with ongoing monitoring at Heartland Hormone.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Process"
        title="How It Works"
        description="Schedule a consultation, complete a comprehensive evaluation including laboratory review, receive a personalized plan when treatment is appropriate, and continue with ongoing monitoring."
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <SectionHeading
          title="Four steps"
          description="Every patient starts with a consultation and appropriate evaluation. Treatment decisions are made individually. Prescription treatment is provided only when clinically appropriate."
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
          <Link href="/programs" className="text-teal underline underline-offset-2">
            view pricing &amp; programs
          </Link>
          .
        </p>
      </section>

      <CTASection
        headline="Ready to restore your energy and confidence?"
        subtext="Schedule a consultation at our Kansas City-area clinic to discuss whether hormone care or medical weight management may be right for you."
        secondaryLabel="View Pricing & Programs"
        secondaryHref="/programs"
      />
    </>
  );
}
