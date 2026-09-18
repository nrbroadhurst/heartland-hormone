import { SITE } from "@/lib/site";

export type ContactPayload = {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  interest?: string;
  contactMethod?: string;
  message?: string;
};

export function formatContactBody(data: ContactPayload): string {
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

async function sendWithResend(data: ContactPayload, apiKey: string) {
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Heartland Hormone Website <onboarding@resend.dev>";
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
      text: formatContactBody(data),
    }),
  });
  if (!res.ok) {
    throw new Error(`resend:${res.status}`);
  }
}

async function sendWithMaileroo(data: ContactPayload, apiKey: string) {
  const fromAddress = process.env.MAILEROO_FROM;
  if (!fromAddress) {
    throw new Error("maileroo:missing-from");
  }
  const res = await fetch("https://smtp.maileroo.com/api/v2/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({
      from: {
        address: fromAddress,
        display_name: "Heartland Hormone Website",
      },
      to: [{ address: SITE.email, display_name: SITE.name }],
      reply_to: { address: data.email, display_name: data.name },
      subject: `Website appointment request from ${data.name}`,
      plain: formatContactBody(data),
    }),
  });
  const json = (await res.json().catch(() => null)) as {
    success?: boolean;
  } | null;
  if (!res.ok || json?.success === false) {
    throw new Error(`maileroo:${res.status}`);
  }
}

async function sendWithSendgrid(data: ContactPayload, apiKey: string) {
  const from =
    process.env.SENDGRID_FROM_EMAIL ?? process.env.CONTACT_FROM_EMAIL;
  if (!from) {
    throw new Error("sendgrid:missing-from");
  }
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: SITE.email }],
        },
      ],
      from: { email: from, name: "Heartland Hormone Website" },
      reply_to: { email: data.email, name: data.name },
      subject: `Website appointment request from ${data.name}`,
      content: [{ type: "text/plain", value: formatContactBody(data) }],
    }),
  });
  if (!res.ok) {
    throw new Error(`sendgrid:${res.status}`);
  }
}

export async function sendContactEmail(data: ContactPayload): Promise<boolean> {
  const mailerooKey = process.env.MAILEROO_API_KEY;
  if (mailerooKey && process.env.MAILEROO_FROM) {
    await sendWithMaileroo(data, mailerooKey);
    return true;
  }

  const sendgridKey = process.env.SENDGRID_API_KEY;
  if (sendgridKey && (process.env.SENDGRID_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL)) {
    await sendWithSendgrid(data, sendgridKey);
    return true;
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    await sendWithResend(data, resendKey);
    return true;
  }

  return false;
}
