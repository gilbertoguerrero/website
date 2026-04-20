"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const RECAPTCHA_ACTION = "contact";

type ContactFormProps = {
  /** Clave de sitio reCAPTCHA (desde RECAPTCHA_SITE_KEY en el servidor). */
  recaptchaSiteKey: string;
  /** Si true, solo el formulario (títulos los pone la sección padre). */
  embedded?: boolean;
};

export default function ContactForm({
  recaptchaSiteKey,
  embedded = false,
}: ContactFormProps) {
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [scriptLoadError, setScriptLoadError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /** Si el script ya está en el DOM (p. ej. tras remount en React Strict Mode), onLoad no vuelve a ejecutarse. */
  useEffect(() => {
    if (!recaptchaSiteKey || typeof window === "undefined" || !window.grecaptcha) {
      return;
    }
    window.grecaptcha.ready(() => {
      setRecaptchaReady(true);
    });
  }, [recaptchaSiteKey]);

  async function getRecaptchaToken(): Promise<string | null> {
    if (typeof window === "undefined" || !window.grecaptcha) {
      return null;
    }
    try {
      return await window.grecaptcha.execute(recaptchaSiteKey, {
        action: RECAPTCHA_ACTION,
      });
    } catch (err) {
      console.error("reCAPTCHA execute falló", err);
      return null;
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setErrorMessage(null);

    if (!recaptchaSiteKey) {
      setErrorMessage(
        "Falta RECAPTCHA_SITE_KEY en la configuración del servidor (Vercel / .env.local)."
      );
      setStatus("error");
      return;
    }

    if (!recaptchaReady || !window.grecaptcha) {
      setErrorMessage(
        "La verificación de seguridad aún se está cargando. Espera un momento e intenta de nuevo."
      );
      setStatus("error");
      return;
    }

    let captchaToken: string | null = null;
    await new Promise<void>((resolve) => {
      window.grecaptcha.ready(() => resolve());
    });
    captchaToken = await getRecaptchaToken();

    if (!captchaToken) {
      setErrorMessage(
        "No se pudo completar la verificación antispam. Recarga la página e intenta de nuevo."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, captchaToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(data?.error ?? "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setErrorMessage("Error de red. Intenta nuevamente.");
      setStatus("error");
    }
  }

  const script = recaptchaSiteKey ? (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`}
      strategy="afterInteractive"
      onLoad={() => {
        setScriptLoadError(null);
        if (typeof window !== "undefined" && window.grecaptcha) {
          window.grecaptcha.ready(() => setRecaptchaReady(true));
        }
      }}
      onError={() => {
        setScriptLoadError(
          "No se pudo cargar la verificación de seguridad. Si usas un bloqueador de anuncios, permite scripts de Google en este sitio o prueba otra red."
        );
      }}
    />
  ) : null;

  const form = (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 sm:p-8"
    >
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
          Nombre y empresa
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="Tu nombre completo y el de tu empresa"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
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
      <p className="mb-4 text-center text-xs text-slate-500">
        Este sitio está protegido por reCAPTCHA y aplican la{" "}
        <a
          className="text-slate-400 underline hover:text-cyan-400"
          href="https://policies.google.com/privacy"
          rel="noopener noreferrer"
          target="_blank"
        >
          Política de privacidad
        </a>{" "}
        y los{" "}
        <a
          className="text-slate-400 underline hover:text-cyan-400"
          href="https://policies.google.com/terms"
          rel="noopener noreferrer"
          target="_blank"
        >
          Términos de servicio
        </a>{" "}
        de Google.
      </p>
      <button
        type="submit"
        disabled={status === "sending" || !recaptchaSiteKey || !recaptchaReady}
        className="w-full rounded-lg bg-cyan-400 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:opacity-70"
      >
        {!recaptchaSiteKey
          ? "Falta configurar reCAPTCHA"
          : !recaptchaReady
            ? "Preparando envío seguro..."
            : status === "sending"
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
      {scriptLoadError && (
        <p className="mt-3 text-center text-sm text-amber-400">{scriptLoadError}</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">
          {errorMessage ?? "Error al enviar. Intenta de nuevo."}
        </p>
      )}
    </form>
  );

  if (embedded) {
    return (
      <>
        {script}
        {form}
      </>
    );
  }

  return (
    <section id="contacto" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {script}
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
        {form}
      </div>
    </section>
  );
}
