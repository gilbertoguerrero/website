"use client";

import { InlineWidget } from "react-calendly";

/** URL por defecto si no hay variable de entorno */
const CALENDLY_BASE_DEFAULT = "https://calendly.com/gguerrero-gilbertoguerrero/30min";

/** Opciones de “Add to website” de Calendly (colores alineados al sitio) */
const CALENDLY_EMBED_PARAMS: Record<string, string> = {
  hide_event_type_details: "1",
  hide_gdpr_banner: "1",
  background_color: "0f172b",
  text_color: "ffffff",
  primary_color: "069db9",
};

function buildCalendlyEmbedUrl(envValue: string | undefined): string {
  const base = envValue?.trim() || CALENDLY_BASE_DEFAULT;
  let url: URL;
  try {
    url = new URL(base);
  } catch {
    return `${CALENDLY_BASE_DEFAULT}?${new URLSearchParams(CALENDLY_EMBED_PARAMS)}`;
  }
  for (const [key, value] of Object.entries(CALENDLY_EMBED_PARAMS)) {
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  }
  return url.toString();
}

type CalendlyBookingProps = {
  calendlyBaseUrl?: string;
  /** Dentro de contacto: sin envoltorio `section`, ancla `#calendly-agenda`. */
  embedded?: boolean;
};

export default function CalendlyBooking({
  calendlyBaseUrl,
  embedded = false,
}: CalendlyBookingProps) {
  const calendlyUrl = buildCalendlyEmbedUrl(calendlyBaseUrl);

  const widget = (
    <div
      className="overflow-hidden rounded-xl border border-slate-700/50 shadow-lg"
      style={{ backgroundColor: "#0f172b" }}
    >
      <InlineWidget
        url={calendlyUrl}
        styles={{
          height: "700px",
          minWidth: "320px",
        }}
      />
    </div>
  );

  if (embedded) {
    return (
      <div id="calendly-agenda" className="scroll-mt-28">
        {widget}
      </div>
    );
  }

  return (
    <section id="agenda" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-center sm:text-left">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Agenda una reunión
          </h2>
          <p className="max-w-2xl text-slate-400">
            Elige fecha y hora que te convengan. Los detalles de la videollamada los verás
            al confirmar la cita.
          </p>
        </div>
        {widget}
      </div>
    </section>
  );
}
