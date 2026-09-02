import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sherry L. Broadhurst, NP, AGACNP-BC, owner of Heartland Hormone & Wellness Clinic in Overland Park, Kansas.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <p className="text-xs font-semibold tracking-[0.18em] text-terracotta uppercase">
        About
      </p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        A Kansas City clinician who opened a clinic for the visits that never
        fit in a hospital hallway.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {clinic.name} is owned and led by {clinic.owner.name},{" "}
        {clinic.owner.credential}. The clinic sits at {clinic.addressLine1} in
        Overland Park — close enough for patients across Johnson County and the
        wider metro to come in without making a day of it.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Sherry is a board-certified Adult-Gerontology Acute Care Nurse
            Practitioner. Before opening this practice she cared for adults in
            hospital and specialty settings in the Kansas City area, including
            work in nephrology and acute care. That background shows up in how
            she practices here: she reads the labs, she watches the whole
            picture, and she will tell you when hormone treatment is not the
            right next step.
          </p>
          <p>
            Too many patients — especially women in midlife — are told they are
            too old, too complicated, or “within normal limits” while they are
            not sleeping, not thinking clearly, and not feeling like themselves.
            This clinic exists so those visits have a home: enough time, a
            workup that matches the story, and follow-up that does not disappear
            after the first prescription.
          </p>
          <p>
            {clinic.legalName} is a nurse practitioner organization. Care is
            individualized. Nothing on this website is a diagnosis or a promise
            of treatment.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-xl font-semibold">
              Credentials at a glance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed">
            <Fact label="Clinician" value={`${clinic.owner.name}, ${clinic.owner.credential}`} />
            <Fact label="Role" value={clinic.owner.title} />
            <Fact
              label="Board certification"
              value="Adult-Gerontology Acute Care Nurse Practitioner (AGACNP-BC)"
            />
            <Fact
              label="Clinic"
              value={`${clinic.addressLine1}, ${clinic.addressLine2}`}
            />
            <Fact label="Phone" value={clinic.phoneDisplay} />
          </CardContent>
        </Card>
      </div>

      <ButtonLink href="/contact" className="mt-12 h-12 px-6 text-base">
        Request a visit
        <ArrowRight />
      </ButtonLink>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-foreground">{value}</p>
    </div>
  );
}
