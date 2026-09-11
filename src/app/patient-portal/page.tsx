import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { TreatmentList } from "@/components/TreatmentList";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Patient Portal",
  description:
    "Log in to the Heartland Hormone patient portal to complete forms, view shared documents, pay invoices and message the clinic through OptiMantra.",
  path: "/patient-portal",
});

export default function PatientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Current Patients"
        title="Patient Portal"
        description="Heartland uses OptiMantra, a secure electronic medical record and practice-management system, for patient records, forms, billing and messaging. Medical records are not stored on this website."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading
          title="What you can do in the portal"
          description="After your clinic account is set up, you can log in to OptiMantra to manage your care online."
        />
        <TreatmentList
          items={[
            "Complete intake forms and consents",
            "View shared documents, treatment plans and superbills when they are posted",
            "Upload documents such as previous lab results",
            "Pay invoices when they are sent",
            "Message the clinic when messaging is enabled",
            "Join virtual care visits when they are scheduled in OptiMantra",
          ]}
        />

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="teal" size="lg">
            <a
              href={SITE.patientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Patient Portal
            </a>
          </Button>
          <BookButton label="New Patient? Book a Consultation" href="/contact" />
        </div>

        <p className="mt-8 text-sm text-charcoal/75 leading-relaxed">
          New patients should{" "}
          <Link href="/contact" className="text-teal underline underline-offset-2">
            request a consultation
          </Link>{" "}
          first. Portal login is created after you are added to the clinic record.
          If you cannot log in, call {SITE.phone} or email {SITE.email} so we can
          confirm the email address on file.
        </p>
      </section>
    </>
  );
}
