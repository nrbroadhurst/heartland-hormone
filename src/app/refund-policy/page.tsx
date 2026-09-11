import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { billingPolicy } from "@/lib/pricing";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${SITE.name} clinical programs and consultations.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Billing"
        title="Refund Policy"
        description="How consultation fees, program fees and medication orders are handled."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">
          Last updated: August 24, 2026. Final refund rules require management and
          attorney review before launch.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            General policy
          </h2>
          <p>{billingPolicy.refunds}</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Recurring program cancellation
          </h2>
          <p>{billingPolicy.cancellation}</p>
          <p>
            See{" "}
            <Link href="/recurring-billing" className="text-teal underline underline-offset-2">
              Recurring Billing & Cancellation
            </Link>{" "}
            for billing frequency and cancellation instructions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Pharmacy-dispensed medications
          </h2>
          <p>
            Prescription medications dispensed by a pharmacy are generally subject
            to pharmacy return policies and applicable law. Heartland cannot
            guarantee refunds for medications already dispensed or shipped.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Questions
          </h2>
          <p>
            Contact {SITE.name} at{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-teal underline underline-offset-2">
              {SITE.phone}
            </a>{" "}
            or{" "}
            <a href={`mailto:${SITE.email}`} className="text-teal underline underline-offset-2">
              {SITE.email}
            </a>{" "}
            with billing questions.
          </p>
        </section>

      </article>
    </>
  );
}
