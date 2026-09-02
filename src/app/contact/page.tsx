import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";

import { AppointmentForm } from "@/components/appointment-form";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a visit at Heartland Hormone & Wellness Clinic, 14400 Metcalf Ave, Overland Park, KS. Call (913) 915-4569.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
          Contact
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Request a visit
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Call, come by after you have a time confirmed, or send the form. We
          will follow up to schedule — this is not a walk-in clinic.
        </p>

        <ul className="mt-8 space-y-5">
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-5 text-terracotta" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a href={clinic.phoneHref} className="text-foreground">
                {clinic.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 text-terracotta" />
            <div>
              <p className="text-sm font-medium">Address</p>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground"
              >
                {clinic.addressLine1}
                <br />
                {clinic.addressLine2}
              </a>
            </div>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-5 text-terracotta" />
            <div>
              <p className="text-sm font-medium">Hours</p>
              <p className="text-foreground">{clinic.hours}</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl border border-primary/10 bg-card p-6 sm:p-8">
        <h2 className="font-heading text-2xl font-semibold">Tell us how to reach you</h2>
        <p className="mt-2 mb-6 text-sm text-muted-foreground">
          If the form is empty, nothing has been sent yet. Required fields are
          name, phone, and the reason for your visit.
        </p>
        <AppointmentForm />
      </div>
    </div>
  );
}
