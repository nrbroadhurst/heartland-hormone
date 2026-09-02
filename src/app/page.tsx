import {
  ArrowRight,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Leaf,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clinic, faqs, services } from "@/lib/clinic";

const steps = [
  {
    title: "A real conversation",
    body: "We start with what you have been feeling, what you have already tried, and what you want back.",
    icon: Stethoscope,
  },
  {
    title: "Labs with a purpose",
    body: "Testing is ordered to answer a clinical question — not a scattershot panel you never hear about again.",
    icon: FlaskConical,
  },
  {
    title: "A plan you can follow",
    body: "If treatment is indicated, you leave knowing what, why, and when we will check in.",
    icon: ClipboardList,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="prairie-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <Badge variant="secondary" className="h-7 px-3 text-[0.7rem] tracking-wide">
              Overland Park, Kansas
            </Badge>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Hormone care that treats you like a person, not a panel.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {clinic.name} is a nurse practitioner–led clinic for adults who
              want time, labs, and a plan — not a five-minute refill.{" "}
              {clinic.owner.name}, {clinic.owner.credential}, sees patients by
              appointment at {clinic.addressLine1}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="h-12 px-6 text-base">
                Request a visit
                <ArrowRight />
              </ButtonLink>
              <a
                href={clinic.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-6 text-base font-medium hover:bg-muted"
              >
                <Phone className="size-4" />
                {clinic.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{clinic.hours}</p>
          </div>
          <HeroPanel />
        </div>
      </section>

      <section className="border-y border-primary/10 bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:grid-cols-3 sm:px-6">
          <Stat label="Led by" value="Sherry Broadhurst, NP" />
          <Stat label="Clinic" value="Overland Park, KS" />
          <Stat label="Focus" value="Hormone & wellness care" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
              Care
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              What we help with
            </h2>
            <p className="mt-3 text-muted-foreground">
              Hormone shifts show up as sleep, mood, weight, drive, and energy.
              We look at the whole picture before we talk about treatment.
            </p>
          </div>
          <ButtonLink href="/services" variant="outline" className="h-10 px-4">
            All services
            <ArrowRight />
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} className="bg-card/80">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/65 uppercase">
            How a visit works
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Unhurried on purpose.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
              >
                <step.icon className="size-6 text-terracotta" />
                <p className="mt-4 text-xs font-medium tracking-[0.14em] text-primary-foreground/55 uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
            Your clinician
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {clinic.owner.name}, {clinic.owner.credential}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sherry is a board-certified Adult-Gerontology Acute Care Nurse
            Practitioner and the owner of {clinic.legalName}. She brings
            hospital and specialty experience — including acute care and
            nephrology work in the Kansas City area — to a clinic built for
            patients who have been told they are “fine” while still feeling
            unwell.
          </p>
          <ButtonLink href="/about" variant="outline" className="mt-6 h-10 px-4">
            Meet Sherry
            <ArrowRight />
          </ButtonLink>
        </div>
        <Card className="bg-secondary/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <HeartPulse className="size-5 text-terracotta" />
              What patients can expect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>Time to tell the story, not a rushed intake form and a goodbye.</p>
            <p>Lab results explained in plain language, including what we will not treat.</p>
            <p>Follow-up that is part of the plan, not an afterthought.</p>
          </CardContent>
        </Card>
      </section>

      <section className="border-t border-primary/10 bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
              Questions
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Before you call
            </h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk it through? Call{" "}
              <a href={clinic.phoneHref} className="font-medium text-foreground">
                {clinic.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-4 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="prairie-band text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready when you are.
            </h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="size-4" />
              {clinic.addressLine1}, {clinic.addressLine2}
            </p>
          </div>
          <ButtonLink
            href="/contact"
            className="h-12 bg-primary-foreground px-6 text-base text-primary hover:bg-primary-foreground/90"
          >
            Request a visit
            <Leaf />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-heading text-xl font-semibold">{value}</p>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-8 text-primary-foreground shadow-sm">
      <PrairieArt />
      <p className="relative text-xs font-semibold tracking-[0.18em] text-primary-foreground/65 uppercase">
        Heartland Hormone
      </p>
      <p className="relative mt-4 font-heading text-3xl font-semibold leading-snug">
        Care for the season you are in — not the age someone wrote on a chart.
      </p>
      <ul className="relative mt-8 space-y-3 text-sm text-primary-foreground/85">
        <li>Women’s hormone health, including perimenopause and menopause</li>
        <li>Men’s hormone evaluation and follow-up</li>
        <li>Thyroid, metabolic, and wellness labs reviewed with you</li>
      </ul>
    </div>
  );
}

function PrairieArt() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
      viewBox="0 0 400 360"
      aria-hidden="true"
    >
      <path
        d="M0 230 C80 200 140 250 200 220 C270 185 330 230 400 200 L400 360 L0 360 Z"
        fill="currentColor"
      />
      <path
        d="M0 260 C90 230 160 280 230 250 C300 220 350 255 400 240 L400 360 L0 360 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
