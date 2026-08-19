import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const APPOINTMENT_TYPES = [
  {
    label: "Men's Hormone Consultation",
    href: "/contact?interest=mens-hormone",
  },
  {
    label: "Women's Hormone Consultation",
    href: "/contact?interest=womens-hormone",
  },
  {
    label: "Weight Management Consultation",
    href: "/contact?interest=weight-management",
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
          Book a Consultation
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
        Book a Consultation
      </p>
      <h3 className="font-display text-2xl text-teal tracking-wide mb-3">
        Request an Appointment
      </h3>
      <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
        Choose the visit type that fits your goals. Call, email or send a
        message. Initial consultations are typically 45 minutes to 1 hour.
        Follow-up visits are typically 15 to 20 minutes. Call{" "}
        <a href={`tel:${SITE.phoneTel}`} className="text-teal underline underline-offset-2">
          {SITE.phone}
        </a>
        .
      </p>
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
      <Button asChild variant="teal">
        <Link href="#contact-form">Send a Message</Link>
      </Button>
    </div>
  );
}
