import { Check } from "lucide-react";

export function TreatmentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-charcoal/90 leading-relaxed">
          <Check
            className="h-4 w-4 shrink-0 mt-1 text-gold"
            strokeWidth={1.5}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
