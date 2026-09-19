import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EmailLink } from "@/components/EmailLink";
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
        title="Terms of Service"
        description="Terms governing use of this website. These Terms are not a substitute for a provider-patient agreement."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last Updated: August 24, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using this website, you agree to these Terms of
            Service. If you do not agree to these Terms, please do not use this
            website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Educational Content Only
          </h2>
          <p>
            Content on this website is provided for general educational purposes
            only and does not constitute medical advice. Nothing on this website
            creates a provider-patient relationship. Treatment recommendations
            are individualized and made only after consultation and appropriate
            clinical evaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Eligibility and Prescription Decisions
          </h2>
          <p>
            Not every patient qualifies for every service described on this
            website. Prescription treatment is provided only after an
            individualized evaluation and when deemed appropriate by your
            provider. Use of this website does not guarantee eligibility for
            services, approval for treatment, or any specific treatment plan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Recurring Programs and Billing
          </h2>
          <p>
            Some clinical programs use recurring billing. Membership programs
            are billed every four weeks and automatically renew unless canceled.
          </p>
          <p>
            By enrolling in a recurring program, you authorize {SITE.name} to
            charge the payment method provided at enrollment according to the
            billing terms disclosed for your selected program. Recurring charges
            will continue until canceled in accordance with the applicable
            cancellation policy.
          </p>
          <p>
            Please refer to the{" "}
            <Link
              href="/recurring-billing"
              className="text-teal underline underline-offset-2"
            >
              Recurring Billing & Cancellation Policy
            </Link>{" "}
            and{" "}
            <Link href="/programs" className="text-teal underline underline-offset-2">
              Pricing &amp; Programs
            </Link>{" "}
            pages for additional information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Cancellation and Refunds
          </h2>
          <p>
            Members may cancel at any time before their next scheduled billing
            date.
          </p>
          <p>
            Consultation fees are nonrefundable. Membership fees are
            nonrefundable once billed and after medications have been
            prescribed, processed, or shipped.
          </p>
          <p>
            Please refer to the{" "}
            <Link
              href="/refund-policy"
              className="text-teal underline underline-offset-2"
            >
              Refund Policy
            </Link>{" "}
            for additional details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Pharmacy Fulfillment
          </h2>
          <p>
            Prescriptions may be filled through appropriately licensed pharmacies
            based on the patient&apos;s treatment plan, location, and medication
            needs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            No Guarantee of Results
          </h2>
          <p>
            Individual results vary. {SITE.name} does not guarantee specific
            outcomes from any service, treatment, or program described on this
            website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Intellectual Property
          </h2>
          <p>
            Unless otherwise noted, all website content, branding, logos, text,
            graphics, and design elements are the property of {SITE.name} and
            may not be copied, reproduced, or reused without written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Kansas, without
            regard to conflict-of-law principles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">Contact</h2>
          <p>
            {SITE.legalBusinessName}
            {hasEmail() ? (
              <>
                <br />
                Email:{" "}
                <EmailLink className="text-teal underline underline-offset-2" />
              </>
            ) : (
              <>
                <br />
                Use the contact page for general questions.
              </>
            )}
          </p>
        </section>
      </article>
    </>
  );
}
