import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL ?? "gguerrero@gilbertoguerrero.com";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada");
      return NextResponse.json(
        { error: "Servicio de email no configurado." },
        { status: 500 },
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
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 },
    );
  }
}

