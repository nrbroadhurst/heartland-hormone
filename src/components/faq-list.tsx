import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/clinic";

export function FaqList({
  items = faqs,
}: {
  items?: readonly { question: string; answer: string }[];
}) {
  return (
    <div className="w-full">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group border-b border-border py-1 last:border-b-0"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 rounded-lg py-3 text-left text-base font-medium outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
          </summary>
          <p className="pb-3 text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
