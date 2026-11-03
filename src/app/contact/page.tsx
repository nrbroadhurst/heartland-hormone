import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { BookOnlineButton } from "@/components/BookOnlineButton";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { PHONE, PORTAL_URL, SITE, hasEmail, hasPhone, mapsUrl, phoneHref } from "@/lib/site";
import { AddressBlock } from "@/components/AddressBlock";
import { EmailLink } from "@/components/EmailLink";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact & Booking",
  description:
    "Book a consultation, log in to the patient portal, or send Heartland Hormone a general question from our Overland Park / Kansas City clinic.",
  path: "/contact",
});

type Props = {
  searchParams: Promise<{ interest?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { interest } = await searchParams;
  const defaultInterest = interest ?? "general";
  const directions = mapsUrl();

  return (
    <>
      <PageHero title="Contact & Booking">
        <div className="max-w-2xl space-y-6 text-lg text-cream/85 leading-relaxed">
          <p>
            Book your consultation online, log in if you already have a patient
            account, or call the clinic with questions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookOnlineButton variant="gold" size="lg" />
            <Button asChild variant="outline" size="lg">
              <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                Patient Login
              </a>
            </Button>
          </div>
          {hasPhone() && (
            <p>
              <a
                href={phoneHref() ?? `tel:${SITE.phoneTel}`}
                className="text-gold underline underline-offset-2"
              >
                {PHONE}
              </a>
            </p>
          )}
          <p className="text-base text-cream/80">{SITE.consultLength}</p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <div className="max-w-xl">
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
                    {PHONE}
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
      </section>

      <section className="border-t border-gold/30 bg-teal/5">
        <div className="mx-auto max-w-xl px-4 py-16 md:px-6">
          <SectionHeading
            align="center"
            title="Questions? Send Us a Message"
            description="For general questions only. To book, use Book a Consultation above."
          />
          <ContactForm
            key={defaultInterest}
            defaultInterest={defaultInterest}
          />
        </div>
      </section>
    </>
  );
}
