import { NextResponse } from "next/server";

import { visitReasons } from "@/lib/clinic";

const reasons = new Set(visitReasons.map((reason) => reason.value));

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, reason, message } = body as Record<
    string,
    unknown
  >;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Phone is required." }, { status: 400 });
  }

  if (email && (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return NextResponse.json({ error: "Email is invalid." }, { status: 400 });
  }

  if (typeof reason !== "string" || !reasons.has(reason as (typeof visitReasons)[number]["value"])) {
    return NextResponse.json({ error: "Reason is required." }, { status: 400 });
  }

  if (message != null && typeof message !== "string") {
    return NextResponse.json({ error: "Message is invalid." }, { status: 400 });
  }

  // Local preview: accept the request. Wire this handler to clinic email
  // or a scheduling tool before going live.
  return NextResponse.json({ ok: true });
}
