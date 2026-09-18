import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const APPOINTMENT_TYPES = [
  {
    label: "New Patient Consultation (60 minutes)",
    href: "#contact-form",
  },
  {
    label: "Follow-Up Visit (15-20 minutes)",
    href: "/patient-portal",
  },
] as const;

export function BookingWidget() {
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
        Select your appointment type:
      </p>
      <ul className="space-y-3 mb-6">
        {APPOINTMENT_TYPES.map((type) => (
          <li key={type.label}>
            <Link
              href={type.href}
              className="flex min-h-11 items-center rounded-md border border-gold/30 px-4 py-3 text-sm font-medium text-teal hover:border-gold hover:bg-teal/5"
            >
              {type.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-sm text-charcoal/80 leading-relaxed mb-3">
        Follow-up visits are booked in the Heartland patient portal (OptiMantra).
        Sign in with the personal email on your patient account — the address
        that received your portal invite. Never sign in with the clinic contact
        email.
      </p>
      <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
        New patients do not have a portal login yet. Choose New Patient
        Consultation above or call{" "}
        <a
          href={`tel:${SITE.phoneTel}`}
          className="text-teal underline underline-offset-2"
        >
          {SITE.phone}
        </a>{" "}
        so we can schedule your first visit and send your invite.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="teal">
          <Link href="/patient-portal">Patient Portal Instructions</Link>
        </Button>
        <Button asChild variant="outline-teal">
          <Link href="#contact-form">New Patient? Send a Message</Link>
        </Button>
      </div>
    </div>
  );
}
