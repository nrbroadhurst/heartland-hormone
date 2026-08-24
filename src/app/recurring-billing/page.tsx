import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { billingConfig } from "@/lib/billing";
import { billingPolicy, pricing } from "@/lib/pricing";
import { SITE } from "@/lib/site";
import { integrations } from "@/lib/integrations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Recurring Billing & Cancellation",
  description:
    "Heartland Hormone recurring billing, four-week billing cycle, cancellation process and program management information.",
  path: "/recurring-billing",
});

export default function RecurringBillingPage() {
  return (
    <>
      <PageHero
        eyebrow="Billing"
        title="Recurring Billing & Cancellation"
        description="Clear information about how recurring clinical programs are billed and how to cancel."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p className="text-sm text-charcoal/60">
          Last updated: August 24, 2026. Sections marked for attorney review should
          be confirmed before final launch.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Four-week billing cycle
          </h2>
          <p>{billingConfig.fourWeekExplanation}</p>
          <p>
            Recurring programs are billed <strong>{billingConfig.frequencyLabel}</strong>.
            {" "}{billingConfig.cyclesPerYearLabel}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Recurring billing authorization
          </h2>
          <p>{billingPolicy.recurringAuthorization}</p>
          <p className="text-sm text-charcoal/70">
            Enrollment requires affirmative consent. Pre-checked consent boxes are
            not used. Consent is recorded through the approved secure enrollment
            workflow in OptiMantra when available.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            What recurring programs include
          </h2>
          <p>{billingPolicy.programCovers}</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Laboratory testing fees are generally not included.</li>
            <li>Medication inclusion depends on the selected program tier.</li>
            <li>Shipping may be included for program medications when applicable.</li>
            <li>Treatment remains subject to clinical appropriateness.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Manage or cancel your program
          </h2>
          <p>{billingPolicy.cancellation}</p>
          {integrations.patientPortalUrl ? (
            <p>
              <Link
                href="/patient-portal"
                className="text-teal underline underline-offset-2"
              >
                Open the patient portal
              </Link>{" "}
              to manage your account, view invoices and cancel future recurring
              charges when that function is enabled in OptiMantra.
            </p>
          ) : null}
          <p>
            You may also contact the clinic at{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-teal underline underline-offset-2">
              {SITE.phone}
            </a>{" "}
            or{" "}
            <a href={`mailto:${SITE.email}`} className="text-teal underline underline-offset-2">
              {SITE.email}
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Treatment or pricing changes
          </h2>
          <p>{billingPolicy.treatmentChanges}</p>
          <p>{billingPolicy.priceAdjustments}</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Non-payment
          </h2>
          <p>{billingPolicy.nonPayment}</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Current published program rates
          </h2>
          <ul className="space-y-2 text-sm">
            <li>{pricing.mensInjections.name}: {pricing.mensInjections.display}</li>
            <li>{pricing.mensTransdermal.name}: {pricing.mensTransdermal.display}</li>
            <li>{pricing.womensTriple.name}: {pricing.womensTriple.display}</li>
            <li>{pricing.womensAdvanced.name}: {pricing.womensAdvanced.display}</li>
          </ul>
          <p className="text-sm">
            See{" "}
            <Link href="/pricing" className="text-teal underline underline-offset-2">
              Programs & Pricing
            </Link>{" "}
            for full program details.
          </p>
        </section>
      </article>
    </>
  );
}
