import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Patient Access",
  description:
    "Heartland uses OptiMantra for patient forms, shared documents, invoices, and secure clinic messaging after a patient account has been established.",
  path: "/patient-portal",
});

export default function PatientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Access"
        title="Patient Access"
        description="Heartland uses OptiMantra for patient forms, shared documents, invoices, and secure clinic messaging after a patient account has been established."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-8 text-charcoal/90 leading-relaxed">
        <p>
          Portal access is provided directly by the clinic. Medical records are
          not stored on this website.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Setting Up Your OptiMantra Portal Account
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              New patients should first request a consultation by phone, email,
              or through the{" "}
              <Link
                href="/contact"
                className="text-teal underline underline-offset-2"
              >
                contact form
              </Link>
              .
            </li>
            <li>
              After a patient account has been created, a secure portal
              invitation will be sent to your email address.
            </li>
            <li>
              Use the invitation provided by the clinic to access your portal
              account. Do not use the clinic email address as a username.
            </li>
            <li>
              After your account is established, the portal may be used for
              intake forms, shared documents, invoices, and secure clinic
              messaging when those features are enabled.
            </li>
            <li>
              If you need assistance with an existing portal account, please
              contact the clinic directly.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            New Patients
          </h2>
          <p>To get started, request a consultation:</p>
          <p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-teal underline underline-offset-2"
            >
              {SITE.phone}
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Existing Patients
          </h2>
          <p>
            If you need assistance accessing your portal account, call{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-teal underline underline-offset-2"
            >
              {SITE.phone}
            </a>{" "}
            or email the clinic.
          </p>
          <p>
            Please do not send passwords or sensitive medical information
            through email or this website.
          </p>
        </section>
      </article>
    </>
  );
}
