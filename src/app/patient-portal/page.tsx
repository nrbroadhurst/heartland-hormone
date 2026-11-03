import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookOnlineButton } from "@/components/BookOnlineButton";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";
import { PORTAL_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Patient Access",
  description:
    "Existing Heartland patients can log in to the OptiMantra portal. New patients receive a portal invite after booking.",
  path: "/patient-portal",
});

export default function PatientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Access"
        title="Patient Access"
        description="Use the patient portal to complete forms, view documents, pay invoices, and message the clinic."
      />
      <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 space-y-10 text-charcoal/90 leading-relaxed">
        <section className="rounded-md border border-gold/40 bg-cream p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            Existing patients: log in here
          </h2>
          <Button asChild variant="teal" size="lg">
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
              Patient Login
            </a>
          </Button>
        </section>

        <section className="rounded-md border border-gold/40 bg-cream p-6 md:p-8 space-y-4">
          <h2 className="font-display text-2xl text-teal tracking-wide">
            New patients: you&apos;ll get a portal invite after you book
          </h2>
          <BookOnlineButton variant="gold" size="lg" />
        </section>
      </article>
    </>
  );
}
