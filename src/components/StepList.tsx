import { FadeIn } from "@/components/FadeIn";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/lib/services";
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
      "Choose men's hormone care, women's hormone care or medical weight management. Visits are by appointment, in person or by telehealth when eligible.",
    icon: CalendarCheck,
  },
  {
    title: "Complete Your Evaluation",
    description:
      "Medical history, symptoms, medication review, laboratory testing and other evaluation as appropriate.",
    icon: FlaskConical,
  },
  {
    title: "Begin Your Personalized Treatment Plan",
    description:
      "If treatment is clinically appropriate, your provider will discuss options, risks, benefits, alternatives and expected follow-up.",
    icon: ClipboardList,
  },
  {
    title: "Ongoing Monitoring & Adjustment",
    description:
      "Follow-up, medication adjustments, laboratory review and ongoing communication.",
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
