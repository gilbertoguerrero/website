"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simular envío; reemplazar por tu endpoint o servicio (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contacto
          </h2>
          <p className="text-slate-400">
            Cuéntame tu proyecto o necesidad de infraestructura cloud.
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
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="Tu nombre"
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
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              placeholder="Describe tu proyecto o consulta..."
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
          {status === "sent" && (
            <p className="mt-3 text-center text-sm text-cyan-400">
              Gracias. Te responderé pronto.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-center text-sm text-red-400">
              Error al enviar. Intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
