"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = {
  question: string;
  answer: ReactNode;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              {typeof item.answer === "string"
                ? item.answer.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))
                : item.answer}
            </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
