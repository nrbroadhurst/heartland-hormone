import { MEDICAL_DISCLAIMER, PRICING_DISCLAIMER } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MedicalDisclaimer({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <p
      className={cn(
        compact ? "text-xs leading-relaxed" : "text-sm leading-relaxed",
        className,
      )}
    >
      {MEDICAL_DISCLAIMER}
    </p>
  );
}

export function PricingDisclaimer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-md border border-gold/40 bg-teal/5 px-5 py-4 text-sm leading-relaxed text-charcoal/85",
        className,
      )}
    >
      {PRICING_DISCLAIMER}
    </div>
  );
}
