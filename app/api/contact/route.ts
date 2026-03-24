import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL ?? "gguerrero@gilbertoguerrero.com";

const RECAPTCHA_EXPECTED_ACTION = "contact";

type SiteVerifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

async function verifyRecaptchaV3(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return false;
  }
  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const data = (await res.json()) as SiteVerifyResponse;
  if (!data.success) {
    return false;
  }
  if (data.action !== RECAPTCHA_EXPECTED_ACTION) {
    return false;
  }
  if (typeof data.score !== "number" || data.score < minScore) {
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  try {
    const { name, email, message, captchaToken } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    if (!captchaToken || typeof captchaToken !== "string") {
      return NextResponse.json(
        { error: "Falta la verificación antispam." },
        { status: 400 }
      );
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY no está configurada");
      return NextResponse.json(
        { error: "Verificación antispam no configurada en el servidor." },
        { status: 500 }
      );
    }

    const captchaOk = await verifyRecaptchaV3(captchaToken);
    if (!captchaOk) {
      return NextResponse.json(
        { error: "La verificación antispam no fue válida. Intenta de nuevo." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Servicio de email no configurado." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Website <no-reply@gilbertoguerrero.com>",
      to: toEmail,
      replyTo: email,
      subject: `Nuevo mensaje desde el sitio - ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email de contacto", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 500 });
  }
}
