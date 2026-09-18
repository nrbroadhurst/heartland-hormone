import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { BookingWidget } from "@/components/BookingWidget";
import { ContactForm } from "@/components/ContactForm";
import { SITE, hasEmail, hasPhone, addressLines, mapsUrl, phoneHref } from "@/lib/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact & Schedule a Consultation",
  description:
    "Schedule a men's hormone, women's hormone or weight-management consultation with Heartland Hormone at our Overland Park / Kansas City clinic.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { interest } = await searchParams;
  const defaultInterest = interest ?? "general";
  const lines = addressLines();
  const directions = mapsUrl();

  return (
    <>
      <PageHero title={SITE.consultCta}>
        <div className="max-w-2xl space-y-4 text-lg text-cream/85 leading-relaxed">
          <p>
            Request a visit by phone, email, or message. New patients and
            follow-up visits are scheduled through the clinic. This website does
            not open a patient-portal login.
          </p>
          <p>
            New patient consultations are typically 60 minutes and include a
            comprehensive review of your symptoms, health history, laboratory
            findings, and health goals.
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <BookingWidget />
          </div>

          <div>
            <SectionHeading title="Clinic details" />
            <ul className="space-y-4 text-charcoal/90 -mt-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                <span>
                  {SITE.name}
                  <br />
                  {lines.length > 0
                    ? lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    : `${SITE.city}, ${SITE.state} / ${SITE.region}`}
                  {directions && (
                    <a
                      href={directions}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm text-teal underline underline-offset-2"
                    >
                      Get directions
                    </a>
                  )}
                  <span className="block text-sm text-charcoal/70 mt-1">
                    {SITE.serviceAreaLine}
                  </span>
                </span>
              </li>
              {hasPhone() && (
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                  <a href={phoneHref() ?? `tel:${SITE.phone}`} className="hover:text-teal">
                    {SITE.phone}
                  </a>
                </li>
              )}
              {hasEmail() && (
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="hover:text-teal">
                    {SITE.email}
                  </a>
                  <span className="block text-sm text-charcoal/70 mt-1">
                    Clinic contact email for questions only.
                  </span>
                </li>
              )}
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                <span>
                  {SITE.officeHours ?? "Hours provided when you book"}
                  <br />
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                    By Appointment Only
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/30 bg-teal/5">
        <div className="mx-auto max-w-xl px-4 py-16 md:px-6">
          <SectionHeading
            align="center"
            title="Request a visit"
            description="For scheduling requests and non-health questions only. Do not include symptoms, medications or medical history."
          />
          <ContactForm key={defaultInterest} defaultInterest={defaultInterest} />
        </div>
      </section>
    </>
  );
}
