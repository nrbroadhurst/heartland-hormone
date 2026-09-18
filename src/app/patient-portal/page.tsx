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
    "Heartland Hormone uses OptiMantra for patient records after your account is created. Schedule by phone or message; this website does not open a portal login.",
  path: "/patient-portal",
});

export default function PatientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Current Patients"
        title="Patient Portal"
        description="This website does not open OptiMantra or any login page. Portal access is sent to you by the clinic after you are added as a patient. Medical records are not stored on this website."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 md:py-16 md:px-6">
        <SectionHeading
          title="How portal access works"
          description="Heartland uses OptiMantra inside the clinic. Patients receive a personal invite by email. This website does not include a login button."
        />
        <TreatmentList
          items={[
            "New patients request a consultation by phone, email, or the contact form",
            "After you are added to the clinic record, you receive a portal invite at your personal email",
            "Use only that invite. Do not use the clinic contact email as a username",
            "If you already have access and need help, call the clinic rather than searching for a login page on this site",
          ]}
        />

        <p className="mt-8 text-sm text-charcoal/80 leading-relaxed">
          After your account is set up, the portal is used for intake forms,
          shared documents, invoices, and clinic messaging when those features
          are enabled.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BookButton label="Request a Consultation" href="/contact" />
          <Button asChild variant="outline-teal" size="lg">
            <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-charcoal/75 leading-relaxed">
          Questions about an existing account? Call {SITE.phone} or email the
          clinic. Do not send passwords by email or through this website.
        </p>
        <p className="mt-4 text-sm text-charcoal/75 leading-relaxed">
          New patients should{" "}
          <Link href="/contact" className="text-teal underline underline-offset-2">
            request a consultation
          </Link>{" "}
          first.
        </p>
      </section>
    </>
  );
}
