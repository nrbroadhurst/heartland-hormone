"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const INTEREST_OPTIONS = [
  { value: "mens-hormone", label: "Men's Hormone Consultation" },
  { value: "womens-hormone", label: "Women's Hormone Consultation" },
  { value: "weight-management", label: "Weight Management Consultation" },
  { value: "general", label: "General question" },
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a phone number").optional().or(z.literal("")),
  interest: z.string().min(1, "Please choose a visit type"),
  message: z.string().min(10, "Please enter a message (at least 10 characters)"),
  website: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm({
  defaultInterest = "general",
}: {
  defaultInterest?: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: defaultInterest,
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactValues) {
    if (data.website) {
      setStatus("success");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          interest: data.interest,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset({
        name: "",
        email: "",
        phone: "",
        interest: defaultInterest,
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-5"
      noValidate
    >
      <p className="rounded-md border border-gold/30 bg-teal/5 px-4 py-3 text-sm text-charcoal/80">
        This form is for <strong>scheduling requests and general questions</strong>.
        Please do not include symptoms, diagnoses, medications or other health
        details. Health information should only be shared through a secure intake
        after booking.
      </p>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-teal">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-teal">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-teal">
          Phone <span className="font-normal text-charcoal/60">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-teal">
          Visit type
        </label>
        <select
          id="interest"
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("interest")}
        >
          {INTEREST_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.interest.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-teal">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "success" && (
        <p className="rounded-md bg-teal/10 px-4 py-3 text-sm text-teal" role="status">
          Thank you. Your message was received. We will respond shortly.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" variant="teal" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
