import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EmailLink } from "@/components/EmailLink";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Refund Policy",
  description:
    "Information about consultation fees, membership fees, medication orders, and refunds.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        title="Refund Policy"
        description="Information about consultation fees, membership fees, medication orders, and refunds."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last Updated: August 24, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Consultation Fees
          </h2>
          <p>Consultation fees are nonrefundable.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Membership Fees
          </h2>
          <p>
            Membership fees are nonrefundable once billed and after medications
            have been prescribed, processed, or shipped.
          </p>
          <p>
            Members may cancel at any time before their next scheduled billing
            date to avoid future recurring charges.
          </p>
          <p>
            Please refer to the{" "}
            <Link
              href="/recurring-billing"
              className="text-teal underline underline-offset-2"
            >
              Recurring Billing &amp; Cancellation Policy
            </Link>{" "}
            for additional information regarding recurring billing and
            cancellation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Prescription Medications
          </h2>
          <p>
            Prescription medications are subject to pharmacy policies and
            applicable law. Medications that have been dispensed or shipped
            cannot be returned. {SITE.name} does not provide refunds for
            prescription medications once they have been prescribed, processed,
            dispensed, or shipped.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Questions
          </h2>
          <p>For billing questions, please contact:</p>
          <p>
            {SITE.name}
            <br />
            Phone:{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-teal underline underline-offset-2"
            >
              {SITE.phone}
            </a>
            <br />
            Email:{" "}
            <EmailLink className="text-teal underline underline-offset-2" />
          </p>
        </section>
      </article>
    </>
  );
}
