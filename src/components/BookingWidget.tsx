import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const APPOINTMENT_TYPES = [
  {
    label: "Men's Hormone Consultation",
    href: "/contact?interest=mens-hormone",
  },
  {
    label: "Women's Hormone & Menopause Consultation",
    href: "/contact?interest=womens-hormone",
  },
  {
    label: "Medical Weight Management Consultation",
    href: "/contact?interest=weight-management",
  },
  {
    label: "General Wellness Consultation",
    href: "/contact?interest=wellness",
  },
] as const;

export function BookingWidget({
  serviceHint,
}: {
  serviceHint?: string;
}) {
  const bookingHref = SITE.bookingUrl;

  if (bookingHref) {
    return (
      <div className="rounded-md border border-gold/40 bg-cream p-6 md:p-8">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-3">
          Schedule
        </p>
        <h3 className="font-display text-2xl text-teal tracking-wide mb-4">
          {SITE.consultCta}
        </h3>
        <iframe
          title="Appointment scheduler"
          src={bookingHref}
          className="h-[32rem] w-full rounded-md border border-gold/20"
        />
      </div>
    );
  }

  return (
    <div className="rounded-md border border-gold/40 bg-cream p-6 md:p-8">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-3">
        {SITE.consultCta}
      </p>
      <h3 className="font-display text-2xl text-teal tracking-wide mb-3">
        Request an Appointment
      </h3>
      <p className="text-sm text-charcoal/80 leading-relaxed mb-3">
        Choose the visit type that best fits your needs.
      </p>
      <ul className="text-sm text-charcoal/80 leading-relaxed mb-6 space-y-1">
        <li>New patient consultations are typically 60 minutes.</li>
        <li>Follow-up visits are typically 15 to 20 minutes.</li>
        <li>
          Appointments can be requested online through our{" "}
          <a
            href={SITE.patientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline underline-offset-2"
          >
            secure patient portal
          </a>{" "}
          or by calling{" "}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="text-teal underline underline-offset-2"
          >
            {SITE.phone}
          </a>
          .
        </li>
      </ul>
      <ul className="space-y-3 mb-6">
        {APPOINTMENT_TYPES.map((type) => (
          <li key={type.href}>
            <Link
              href={serviceHint ? `${type.href}` : type.href}
              className="flex min-h-11 items-center rounded-md border border-gold/30 px-4 py-3 text-sm font-medium text-teal hover:border-gold hover:bg-teal/5"
            >
              {type.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="teal">
          <a
            href={SITE.patientPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Patient Portal
          </a>
        </Button>
        <Button asChild variant="outline-teal">
          <Link href="#contact-form">Send a Message</Link>
        </Button>
      </div>
    </div>
  );
}
