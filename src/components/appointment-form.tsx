"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { clinic, visitReasons } from "@/lib/clinic";

type FormState = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  reason: "",
  message: "",
};

export function AppointmentForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  function validate(next: FormState) {
    const nextErrors: Partial<FormState> = {};
    if (next.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    const phoneDigits = next.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      nextErrors.phone = "Enter a phone number we can reach you at.";
    }
    if (next.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      nextErrors.email = "That email does not look complete.";
    }
    if (!next.reason) {
      nextErrors.reason = "Choose what you would like help with.";
    }
    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/15 bg-card p-6 sm:p-8"
      >
        <CheckCircle2 className="size-8 text-primary" />
        <h2 className="font-heading mt-4 text-2xl font-semibold">
          We received your request
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          The clinic will follow up to confirm a time. If you need to speak with
          someone sooner, call{" "}
          <a href={clinic.phoneHref} className="font-medium text-foreground">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
        <Button
          className="mt-6 h-10 px-4"
          variant="outline"
          onClick={() => {
            setStatus("idle");
            setErrors({});
          }}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          error={errors.name}
        >
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            className="h-11 px-3"
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            className="h-11 px-3"
            onChange={(event) =>
              setValues((current) => ({ ...current, phone: event.target.value }))
            }
          />
        </Field>
      </div>

      <Field
        id="email"
        label="Email"
        hint="Optional — helpful if we need to send forms."
        error={errors.email}
      >
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          className="h-11 px-3"
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
        />
      </Field>

      <Field id="reason" label="What brings you in?" error={errors.reason}>
        <Select
          value={values.reason || null}
          onValueChange={(value) =>
            setValues((current) => ({
              ...current,
              reason: String(value ?? ""),
            }))
          }
        >
          <SelectTrigger
            id="reason"
            className="h-11 w-full min-w-0 px-3"
            aria-invalid={Boolean(errors.reason)}
          >
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent align="start" alignItemWithTrigger={false}>
            {visitReasons.map((reason) => (
              <SelectItem key={reason.value} value={reason.value}>
                {reason.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field
        id="message"
        label="Anything we should know"
        hint="Optional. Symptoms, recent labs, or questions are all useful."
      >
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          className="min-h-28 px-3"
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
        />
      </Field>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          The request could not be sent. Call {clinic.phoneDisplay} and we will
          get you scheduled.
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-11 w-full px-5 text-base sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request a visit"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Submitting this form requests a call back. It does not create a patient
        relationship or guarantee an appointment time.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
      {error ? (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
