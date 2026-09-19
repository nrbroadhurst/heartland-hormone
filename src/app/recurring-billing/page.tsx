import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EmailLink } from "@/components/EmailLink";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Recurring Billing & Cancellation Policy",
  description:
    "Heartland Hormone recurring billing, four-week program fees, cancellation process and program management information.",
  path: "/recurring-billing",
});

export default function RecurringBillingPage() {
  return (
    <>
      <PageHero
        title="Recurring Billing & Cancellation Policy"
        description="Clear information about how recurring hormone care memberships are billed and how to cancel."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">Last Updated: August 24, 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Recurring Billing
          </h2>
          <p>
            Recurring hormone care memberships are billed every 4 weeks and
            automatically renew unless canceled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Recurring Billing Authorization
          </h2>
          <p>
            By enrolling, you authorize {SITE.name} to charge the payment method
            you provide every 4 weeks at the program rate disclosed at
            enrollment until you cancel. Future recurring charges may be canceled
            according to this policy.
          </p>
          <p>
            Enrollment requires affirmative consent. Pre-checked consent boxes
            are not used. Consent is recorded through the approved secure
            enrollment process in OptiMantra when available.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            What Memberships Include
          </h2>
          <p>
            Hormone therapy programs are offered through a recurring membership
            that includes ongoing provider oversight, medication management,
            follow-up care, and the medications specifically included in your
            selected program.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Laboratory testing is not included and is billed separately.</li>
            <li>Included medications vary by program.</li>
            <li>
              Medications included in your program are shipped directly to your
              home at no additional shipping charge.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Managing or Canceling Your Membership
          </h2>
          <p>
            Members may cancel at any time before their next scheduled billing
            date.
          </p>
          <p>
            Portal access is provided by the clinic after a patient account has
            been established. This website does not provide a patient portal
            login.
          </p>
          <p>To manage or cancel a membership, contact the clinic at:</p>
          <p>
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

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Treatment and Pricing Changes
          </h2>
          <p>
            Treatment plans are individualized and may be adjusted based on
            symptoms, treatment response, laboratory findings, medication
            availability, safety considerations, and clinical needs. Medication
            type, formulation, dosage, and laboratory monitoring requirements
            may change throughout treatment.
          </p>
          <p>
            Program fees reflect current medication, compounding pharmacy,
            supplier, shipping, and operational costs. In the event of
            medication shortages, market disruptions, regulatory changes, or
            significant increases in supplier costs, membership fees may be
            adjusted. Patients will receive at least 30 days&apos; written notice
            before any fee adjustment takes effect.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Non-Payment
          </h2>
          <p>
            If a recurring membership fee is declined or remains unpaid,
            medication orders, prescription refills, medication shipments, and
            scheduled clinical services may be paused until the account balance
            is paid in full.
          </p>
          <p>
            Accounts that remain unpaid for more than 30 days may be subject to
            discharge from the practice and cancellation of active prescriptions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Program Fees
          </h2>
          <p>
            Current program pricing and consultation fees are available on the{" "}
            <Link href="/programs" className="text-teal underline underline-offset-2">
              Pricing &amp; Programs
            </Link>{" "}
            page.
          </p>
          <p>
            Recurring memberships are billed every 4 weeks and automatically
            renew unless canceled. Because memberships are billed every 4 weeks
            rather than monthly, there are 13 billing cycles per year.
          </p>
          <p>
            Your selected program, fees, and billing terms are reviewed before
            enrollment and before any recurring billing begins.
          </p>
          <p>
            For current pricing and program details, please visit the{" "}
            <Link href="/programs" className="text-teal underline underline-offset-2">
              Pricing &amp; Programs
            </Link>{" "}
            page.
          </p>
        </section>
      </article>
    </>
  );
}
