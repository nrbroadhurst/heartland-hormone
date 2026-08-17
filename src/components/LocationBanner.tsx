import { SITE } from "@/lib/site";
import { MapPin } from "lucide-react";

export function LocationBanner({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "inline-flex items-center gap-2 text-sm text-cream/90"
          : "flex items-center justify-center gap-2 bg-teal-dark px-4 py-3 text-center text-sm text-cream"
      }
    >
      <MapPin className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
      <p>{SITE.locationLine}</p>
    </div>
  );
}
