import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/send-contact-email";

const schema = z.object({
  name: z.string().min(2).max(120),
  firstName: z.string().max(80).optional(),
  lastName: z.string().max(80).optional(),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  interest: z.string().max(80).optional(),
  visit: z.string().max(80).optional(),
  contactMethod: z.string().max(40).optional(),
  message: z.string().max(5000).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const emailed = await sendContactEmail(parsed.data);
    if (!emailed) {
      return NextResponse.json({ ok: false, emailed: false }, { status: 503 });
    }
    return NextResponse.json({ ok: true, emailed: true });
  } catch {
    return NextResponse.json({ error: "Could not send message" }, { status: 502 });
  }
}
