"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const INTEREST_OPTIONS = [
  { value: "mens-hormone", label: "Men's Hormone Care" },
  { value: "womens-hormone", label: "Women's Hormone & Menopause Care" },
  { value: "weight-management", label: "Medical Weight Management" },
  { value: "general", label: "General Question" },
] as const;

const INTEREST_VALUES = new Set<string>(
  INTEREST_OPTIONS.map((option) => option.value),
);

const CONTACT_METHOD_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "either", label: "Either" },
] as const;

const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a phone number"),
  interest: z.string().min(1, "Please choose a preferred service"),
  contactMethod: z.string().min(1, "Please choose a contact method"),
  message: z.string().optional(),
  website: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm({
  defaultInterest = "general",
}: {
  defaultInterest?: string;
}) {
  const interestDefault = INTEREST_VALUES.has(defaultInterest)
    ? defaultInterest
    : "general";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: interestDefault,
      contactMethod: "either",
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
      const payload = {
        name: `${data.firstName} ${data.lastName}`.trim(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        contactMethod: data.contactMethod,
        message: data.message ?? "",
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => null)) as {
        emailed?: boolean;
      } | null;
      if (!res.ok || !result?.emailed) {
        throw new Error("Failed");
      }
      setStatus("success");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: interestDefault,
        contactMethod: "either",
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
      autoComplete="off"
    >
      <p className="rounded-md border border-gold/30 bg-teal/5 px-4 py-3 text-sm text-charcoal/80">
        This form is intended for scheduling requests and general inquiries.
        Clinical information will be collected securely during the patient
        intake process after an appointment has been scheduled.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-teal">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-700" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-teal">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-700" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-teal">
          Email
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("email")}
          autoComplete="off"
          data-lpignore="true"
          data-1p-ignore="true"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-teal">
          Phone
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
          Preferred Service
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
        <label htmlFor="contactMethod" className="mb-1.5 block text-sm font-medium text-teal">
          Preferred Contact Method
        </label>
        <select
          id="contactMethod"
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("contactMethod")}
        >
          {CONTACT_METHOD_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.contactMethod && (
          <p className="mt-1 text-sm text-red-700" role="alert">
            {errors.contactMethod.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-teal">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Please provide a brief scheduling request or general question."
          className="w-full rounded-md border border-gold/40 bg-cream px-3 py-2.5 text-charcoal focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          {...register("message")}
        />
      </div>

      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "success" && (
        <p className="rounded-md bg-teal/10 px-4 py-3 text-sm text-teal" role="status">
          Thank you. Your appointment request was sent to the clinic. We will
          respond shortly.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          The message could not be emailed. Please call {SITE.phone}.
        </p>
      )}

      <Button type="submit" variant="teal" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
