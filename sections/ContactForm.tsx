"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setErrorMessage("Error de red. Intenta nuevamente.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-6">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hablemos de la madurez SRE y DevOps de tu empresa
          </h2>
          <p className="text-slate-400">
            Cuéntame en qué estado está hoy tu operación y qué te gustaría mejorar. Te
            responderé con un siguiente paso concreto para tu contexto.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 sm:p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Nombre y empresa
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="Tu nombre y el de tu empresa"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="tu@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Descripción breve de tu reto actual
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="Por ejemplo: queremos mejorar confiabilidad, automatizar despliegues o reducir costos cloud..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-cyan-400 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:opacity-70"
          >
            {status === "sending"
              ? "Enviando..."
              : status === "sent"
                ? "Mensaje enviado"
                : "Enviar"}
          </button>
          <p className="mt-4 text-center text-xs text-slate-500">
            Si prefieres, también puedes escribirme por WhatsApp Business para coordinar
            directamente el diagnóstico.
          </p>
          {status === "sent" && (
            <p className="mt-3 text-center text-sm text-cyan-400">
              Gracias. Te responderé pronto.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-center text-sm text-red-400">
              {errorMessage ?? "Error al enviar. Intenta de nuevo."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
