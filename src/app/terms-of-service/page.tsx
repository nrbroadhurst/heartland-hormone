import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { billingConfig } from "@/lib/billing";
import { billingPolicy } from "@/lib/pricing";
import { SITE, hasEmail } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: `Website terms of service for ${SITE.name}.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of this website. Not a substitute for a provider-patient agreement."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">
          Last updated: August 24, 2026. Sections marked for attorney review
          should be confirmed before final launch.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Acceptance</h2>
          <p>
            By accessing this website, you agree to these Terms. If you do not
            agree, do not use the site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Educational content only
          </h2>
          <p>
            Content on this website is for educational purposes and does not
            constitute medical advice. Nothing on this site establishes a
            provider-patient relationship. Treatment decisions are made
            individually with a licensed provider following consultation and
            appropriate evaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Eligibility and prescription decisions
          </h2>
          <p>
            Not every patient qualifies for every service described on this
            website. Prescription treatment is provided only when clinically
            appropriate following evaluation. Browsing this website does not
            guarantee eligibility, approval or a specific treatment plan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Recurring programs and billing
          </h2>
          <p>
            Some clinical programs use recurring billing. Recurring programs may
            be billed {billingConfig.frequencyLabel}. {billingConfig.cyclesPerYearLabel}.
          </p>
          <p>{billingPolicy.recurringAuthorization}</p>
          <p>
            See{" "}
            <Link href="/recurring-billing" className="text-teal underline underline-offset-2">
              Recurring Billing & Cancellation
            </Link>{" "}
            and{" "}
            <Link href="/pricing" className="text-teal underline underline-offset-2">
              Programs & Pricing
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Cancellation and refunds
          </h2>
          <p>{billingPolicy.cancellation}</p>
          <p>{billingPolicy.refunds}</p>
          <p>
            See{" "}
            <Link href="/refund-policy" className="text-teal underline underline-offset-2">
              Refund Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Pharmacy fulfillment
          </h2>
          <p>{billingPolicy.pharmacyFulfillment}</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            No outcome guarantees
          </h2>
          <p>
            We do not guarantee specific results from any service described on
            this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Intellectual property
          </h2>
          <p>
            Website content, branding and design are owned by {SITE.name} unless
            otherwise noted. You may not copy or reuse them without permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Governing law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Kansas, without
            regard to conflict-of-law rules.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Contact</h2>
          <p>
            {SITE.legalBusinessName}
            {hasEmail() ? (
              <>
                {" "}
                (
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-teal underline underline-offset-2"
                >
                  {SITE.email}
                </a>
                )
              </>
            ) : (
              ". Use the contact page for general questions."
            )}
          </p>
        </section>
      </article>
    </>
  );
}
