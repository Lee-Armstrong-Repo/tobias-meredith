import { Resend } from "resend";
import { site } from "../../../../content/site";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  style?: string;
  placement?: string;
  idea?: string;
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = (await request.json()) as BookingPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; ignore silently.
  if (body.website?.trim()) {
    return Response.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const style = String(body.style || "").trim();
  const placement = String(body.placement || "").trim();
  const idea = String(body.idea || "").trim();

  if (!name || !email || !idea) {
    return Response.json(
      { error: "Name, email, and idea are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || idea.length > 5000 || email.length > 200) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Booking email is not configured yet." },
      { status: 503 },
    );
  }

  const to = process.env.BOOKING_TO_EMAIL || site.email;
  const from =
    process.env.BOOKING_FROM_EMAIL || "Tobias Meredith <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const text = [
    `New consultation enquiry from ${name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Style: ${style || "—"}`,
    `Placement: ${placement || "—"}`,
    "",
    "Idea:",
    idea,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Tattoo consultation enquiry — ${name}`,
    text,
  });

  if (error) {
    console.error("Resend booking error:", error);
    return Response.json(
      { error: "Could not send your enquiry. Please try again or email directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
