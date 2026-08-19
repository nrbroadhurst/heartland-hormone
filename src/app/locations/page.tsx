import type { Metadata } from "next";
import { PageHero, SectionHeading, BookButton } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SITE, addressLines, mapsUrl, hasPhone, hasEmail, phoneHref } from "@/lib/site";
import { MapPin, Video, Clock } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Locations | Overland Park, Kansas City & Kansas Telehealth",
  description:
    "Heartland Hormone serves Overland Park and the Kansas City area in person, with telehealth throughout Kansas and Missouri for eligible patients.",
  path: "/locations",
});

export default function LocationsPage() {
  const lines = addressLines();
  const directions = mapsUrl();

  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Kansas City-Area Clinic + Telehealth"
        description={`${SITE.locationLine}. Visits are by appointment only.`}
      >
        <BookButton />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/40 text-teal">
              <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </div>
            <SectionHeading
              title="Kansas City-area clinic"
              description="In-person visits in the Overland Park / Kansas City area for patients who prefer face-to-face care."
            />
            <ul className="space-y-3 text-charcoal/90 -mt-4">
              <li className="font-medium text-teal">{SITE.name}</li>
              <li>
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              {directions && (
                <li>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal underline underline-offset-2"
                  >
                    Get directions
                  </a>
                </li>
              )}
              {hasPhone() && (
                <li>
                  <a href={phoneHref() ?? `tel:${SITE.phone}`} className="hover:text-teal">
                    {SITE.phone}
                  </a>
                </li>
              )}
              {hasEmail() && (
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-teal">
                    {SITE.email}
                  </a>
                </li>
              )}
              <li className="pt-2 flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-gold shrink-0" aria-hidden />
                {SITE.officeHours ?? "Hours provided when you book"}
              </li>
              <li className="font-display text-xs uppercase tracking-[0.2em] text-gold pt-2">
                By Appointment Only
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/40 text-teal">
              <Video className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </div>
            <SectionHeading
              title="Telehealth throughout Kansas and Missouri"
              description={SITE.telehealthStatement}
            />
            <div className="rounded-md border border-gold/40 bg-cream p-6 -mt-2">
              <p className="font-display text-sm tracking-wide text-teal mb-2">
                Current telehealth service area
              </p>
              <p className="text-charcoal/90 leading-relaxed">
                {SITE.telehealthStates.join(", ")}
              </p>
              <p className="mt-4 text-sm text-charcoal/70 leading-relaxed">
                You generally need to be physically located in a state where the
                provider is licensed at the time of the visit. Some treatments may
                still require an in-person appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Book your visit"
        subtext="Virtual or in person, always by appointment."
        secondaryLabel="View Programs & Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
