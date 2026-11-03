import { Button } from "@/components/ui/button";
import { BookOnlineButton } from "@/components/BookOnlineButton";
import { PHONE, PORTAL_URL, SITE, phoneHref } from "@/lib/site";

export function BookingWidget() {
  return (
    <div className="rounded-md border border-gold/40 bg-cream p-6 md:p-8">
      <p className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-3">
        Contact &amp; Booking
      </p>
      <h3 className="font-display text-2xl text-teal tracking-wide mb-6">
        Book or log in
      </h3>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <BookOnlineButton variant="teal" size="lg" />
        <Button asChild variant="outline-teal" size="lg">
          <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
            Patient Login
          </a>
        </Button>
      </div>
      <p className="mt-6 text-sm text-charcoal/80 leading-relaxed">
        <a
          href={phoneHref() ?? `tel:${SITE.phoneTel}`}
          className="text-teal underline underline-offset-2"
        >
          {PHONE}
        </a>
      </p>
    </div>
  );
}
