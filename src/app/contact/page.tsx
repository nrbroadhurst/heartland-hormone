import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { BookingWidget } from "@/components/BookingWidget";
import { ContactForm } from "@/components/ContactForm";
import { SITE, hasEmail, hasPhone, mapsUrl, phoneHref } from "@/lib/site";
import { AddressBlock } from "@/components/AddressBlock";
import { EmailLink } from "@/components/EmailLink";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Schedule an Appointment",
  description:
    "Schedule a men's hormone, women's hormone or weight-management consultation with Heartland Hormone at our Overland Park / Kansas City clinic.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ interest?: string; visit?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { interest, visit } = await searchParams;
  const defaultInterest = interest ?? "general";
  const defaultVisit = visit ?? "new-patient";
  const directions = mapsUrl();

  return (
    <>
      <PageHero title="Schedule an Appointment">
        <div className="max-w-2xl space-y-4 text-lg text-cream/85 leading-relaxed">
          <p>
            Schedule your appointment through the{" "}
            <Link
              href="/patient-portal"
              className="underline underline-offset-2 text-gold-light hover:text-gold"
            >
              secure patient portal
            </Link>{" "}
            or contact the clinic by phone, email, or message if you have
            questions before scheduling.
          </p>
          <h2 className="font-display text-2xl text-gold tracking-wide pt-2">
            New Patient Consultations
          </h2>
          <p>
            New patient consultations are typically 60 minutes and include a
            comprehensive review of your symptoms, health history, laboratory
            results, and treatment goals.
          </p>
          <p>
            To make the most of your visit, a comprehensive laboratory evaluation
            is completed beforehand so your provider can review your results,
            discuss potential hormonal or metabolic concerns, and develop an
            individualized treatment plan when appropriate.
          </p>
          <p>
            If treatment is recommended, ongoing follow-up care includes symptom
            review, laboratory monitoring, and treatment adjustments as needed.
          </p>
          <h2 className="font-display text-2xl text-gold tracking-wide pt-2">
            Follow-Up Appointments
          </h2>
          <p>
            Follow-up visits are available for established Heartland patients
            currently receiving care. These appointments provide an opportunity
            to review treatment progress, discuss concerns, review laboratory
            results, and make treatment adjustments as needed.
          </p>
          <p>
            Periodic laboratory testing is an important part of ongoing
            monitoring and helps guide treatment decisions, support patient
            safety, and evaluate treatment effectiveness over time.
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <BookingWidget />
          </div>

          <div>
            <SectionHeading title="Clinic Details" />
            <ul className="space-y-4 text-charcoal/90 -mt-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                <div>
                  {SITE.name}
                  <AddressBlock />
                  {directions && (
                    <a
                      href={directions}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm text-teal underline underline-offset-2"
                    >
                      Get Directions
                    </a>
                  )}
                </div>
              </li>
              {hasPhone() && (
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                  <span>
                    Phone:{" "}
                    <a href={phoneHref() ?? `tel:${SITE.phone}`} className="hover:text-teal">
                      {SITE.phone}
                    </a>
                  </span>
                </li>
              )}
              {hasEmail() && (
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                  <span>
                    Email: <EmailLink />
                    <span className="block text-sm text-charcoal/70 mt-1">
                      Messages submitted through this website are sent to the
                      clinic email address listed above.
                    </span>
                  </span>
                </li>
              )}
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-gold shrink-0" strokeWidth={1.5} aria-hidden />
                <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                  By Appointment Only
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
            title="Request a Visit"
            description="For appointment requests and general questions only. Please do not include symptoms, medications, medical history, laboratory results, or other personal health information."
          />
          <ContactForm
            key={`${defaultInterest}-${defaultVisit}`}
            defaultInterest={defaultInterest}
            defaultVisit={defaultVisit}
          />
        </div>
      </section>
    </>
  );
}
