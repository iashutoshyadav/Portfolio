// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/contact";
import { createTransport } from "@/lib/mailer";

export const runtime = "nodejs";

// --- CORS helpers (adjust origin if you want to lock it down) ---
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // set to your site origin for stricter security
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders as any });
}

// --- tiny in-memory rate limit (per IP) ---
const hits = new Map<string, { count: number; ts: number }>();
function limited(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > windowMs) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count++;
  return rec.count > limit;
}

// robust IP extraction (Vercel/Reverse proxy friendly)
function getIp(req: Request) {
  const h = new Headers(req.headers);
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return h.get("x-real-ip") || "unknown";
}

// accept JSON or multipart/form-data
async function readContactPayload(req: Request) {
  const ctype = req.headers.get("content-type") || "";
  if (ctype.includes("application/json")) {
    return await req.json();
  }
  if (ctype.includes("multipart/form-data")) {
    const fd = await req.formData();
    return {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
  }
  // fallback try json
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v || v.trim() === "") {
    throw new Error(
      `Missing environment variable: ${name}. Add it to .env.local and restart the dev server.`
    );
  }
  return v;
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req);
    if (limited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Try again in a minute." },
        { status: 429, headers: corsHeaders as any }
      );
    }

    // Read + validate body
    const body = await readContactPayload(req);
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", details: parsed.error.flatten() },
        { status: 400, headers: corsHeaders as any }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Env checks (helpful messages)
    const to = requireEnv("CONTACT_TO_EMAIL");
    const smtpUser = requireEnv("SMTP_USER");

    const transporter = createTransport();

    // Optional: verify the transporter once (useful in dev)
    // await transporter.verify();

    const text =
      `New contact message\n\n` +
      `From: ${name} <${email}>\n` +
      `Subject: ${subject}\n\n` +
      `${message}`;

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`, // authenticated sender
      replyTo: `${name} <${email}>`,   // so you can reply to the visitor
      to,
      subject: `Contact: ${subject}`,
      text,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
      `,
    });

    return NextResponse.json(
      { ok: true, message: "Message sent" },
      { status: 200, headers: corsHeaders as any }
    );
  } catch (err: any) {
    console.error("CONTACT_API_ERROR:", err);
    const msg =
      typeof err?.message === "string" ? err.message : "Failed to send message";
    return NextResponse.json(
      { ok: false, error: msg },
      { status: 500, headers: corsHeaders as any }
    );
  }
}
