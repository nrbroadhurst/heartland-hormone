import { FadeIn } from "@/components/FadeIn";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/lib/services";
import { SITE } from "@/lib/site";
import {
  CalendarCheck,
  FlaskConical,
  ClipboardList,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export type Step = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

const DEFAULT_STEPS: Step[] = [
  {
    title: "Schedule Your Consultation",
    description:
      `Meet with your provider to discuss your symptoms, health history, and treatment goals. ${SITE.consultLength}`,
    icon: CalendarCheck,
  },
  {
    title: "Complete Laboratory Testing and Evaluation",
    description:
      "Laboratory testing is required before your consultation so results are available for review during your appointment. Testing and evaluation help determine potential causes of symptoms and guide treatment recommendations.",
    icon: FlaskConical,
  },
  {
    title: "Review Your Results and Treatment Plan",
    description:
      "Your provider will review your symptoms, health history, laboratory findings, and treatment goals. If treatment is recommended, an individualized care plan will be developed and discussed, including expected benefits, risks, monitoring requirements, and follow-up.",
    icon: ClipboardList,
  },
  {
    title: "Ongoing Care and Monitoring",
    description:
      "Regular follow-up visits and monitoring help keep treatment safe, effective and aligned with your goals. First hormone care follow-up is typically 6 to 8 weeks later, then approximately every 6 months once stable. Visits may be in office or by virtual visit when appropriate.",
    icon: RefreshCw,
  },
];

export function StepList({
  steps = DEFAULT_STEPS,
  numbered = true,
}: {
  steps?: Step[];
  numbered?: boolean;
}) {
  return (
    <ol className="grid gap-8 md:grid-cols-2">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <FadeIn key={step.title} delay={i * 0.06}>
            <li className="relative flex gap-4 rounded-md border border-gold/20 bg-cream p-6">
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md bg-teal text-cream">
                {numbered ? (
                  <span className="font-display text-lg">{i + 1}</span>
                ) : Icon ? (
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                ) : null}
              </div>
              <div>
                <h3 className="font-display text-xl text-teal tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/85">
                  {step.description}
                </p>
              </div>
            </li>
          </FadeIn>
        );
      })}
    </ol>
  );
}

export function ServiceExpectSteps({
  items,
}: {
  items: string[];
}) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-sm font-display text-teal">
            {i + 1}
          </span>
          <p className="pt-1 text-charcoal/90 leading-relaxed">{item}</p>
        </li>
      ))}
    </ol>
  );
}

/** Re-export for service pages that need icon typing */
export type { Service };
export { ServiceIcon };
