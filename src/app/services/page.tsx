import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clinic, services } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Hormone replacement evaluation, thyroid and metabolic support, and lab-guided wellness care at Heartland Hormone & Wellness Clinic in Overland Park.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
        Services
      </p>
      <h1 className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Care built around how you actually feel.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Every plan starts with a visit and labs. Treatment is only offered when
        it is medically appropriate for you — there is no one protocol for every
        patient who walks in.
      </p>

      <div className="mt-12 grid gap-5">
        {services.map((service, index) => (
          <Card key={service.slug} className="md:grid md:grid-cols-[8rem_1fr] md:items-start">
            <CardHeader>
              <p className="font-heading text-3xl font-semibold text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </p>
            </CardHeader>
            <div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {service.details}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-16 rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10">
        <h2 className="text-3xl font-semibold">What we do not do</h2>
        <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-primary-foreground/80">
          <li>We do not promise a specific result or a one-size protocol.</li>
          <li>
            We do not treat based on internet labs or leftover prescriptions
            from another clinic without our own evaluation.
          </li>
          <li>
            We do not replace emergency care. Chest pain, stroke symptoms, or
            severe shortness of breath belong in an emergency department.
          </li>
        </ul>
        <ButtonLink
          href="/contact"
          className="mt-8 h-11 bg-primary-foreground px-5 text-primary hover:bg-primary-foreground/90"
        >
          Request a visit
          <ArrowRight />
        </ButtonLink>
      </section>

      <p className="mt-10 text-sm text-muted-foreground">
        Questions about whether a visit is a fit? Call{" "}
        <a href={clinic.phoneHref} className="font-medium text-foreground">
          {clinic.phoneDisplay}
        </a>
        .
      </p>
    </div>
  );
}
