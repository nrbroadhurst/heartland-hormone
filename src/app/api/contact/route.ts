import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE, emailComposeUrl, emailMailtoUrl } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2).max(120),
  firstName: z.string().max(80).optional(),
  lastName: z.string().max(80).optional(),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  interest: z.string().max(80).optional(),
  contactMethod: z.string().max(40).optional(),
  message: z.string().max(5000).optional(),
});

function formatBody(data: z.infer<typeof schema>): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "(not provided)"}`,
    `Interest: ${data.interest || "(not provided)"}`,
    `Preferred contact: ${data.contactMethod || "(not provided)"}`,
    "",
    data.message?.trim() ? data.message.trim() : "(no message)",
  ].join("\n");
}

function composeUrls(data: z.infer<typeof schema>) {
  const subject = `Website appointment request from ${data.name}`;
  const body = formatBody(data);
  return {
    outlookUrl: emailComposeUrl({ subject, body }),
    mailtoUrl: emailMailtoUrl({ subject, body }),
  };
}

async function sendWithResend(data: z.infer<typeof schema>, apiKey: string) {
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Heartland Hormone Website <onboarding@resend.dev>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SITE.email],
      reply_to: data.email,
      subject: `Website appointment request from ${data.name}`,
      text: formatBody(data),
    }),
  });
  if (!res.ok) {
    throw new Error(`resend:${res.status}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await sendWithResend(parsed.data, resendKey);
      return NextResponse.json({ ok: true, emailed: true });
    }

    return NextResponse.json({
      ok: true,
      emailed: false,
      ...composeUrls(parsed.data),
    });
  } catch {
    return NextResponse.json({ error: "Could not send message" }, { status: 502 });
  }
}
