import { ScrollToButton } from "@/components/ScrollToButton";
import CalendlyBooking from "@/sections/CalendlyBooking";
import ContactForm from "@/sections/ContactForm";

type ContactoProps = {
  calendlyBaseUrl?: string;
  recaptchaSiteKey: string;
};

export default function Contacto({ calendlyBaseUrl, recaptchaSiteKey }: ContactoProps) {
  return (
    <section
      id="contacto"
      className="border-t border-slate-700/50 bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Contacto
        </p>
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Da el siguiente paso
        </h2>
        <p className="mb-8 max-w-2xl text-slate-400">
          Reserva una sesión estratégica directamente en mi calendario para revisar tu arquitectura.
          Si prefieres iniciar la conversación por escrito, enviame un correo.
        </p>

        <CalendlyBooking calendlyBaseUrl={calendlyBaseUrl} embedded />

        <div className="mx-auto mt-16 max-w-xl border-t border-slate-700/60 pt-12">
          <h3 className="mb-2 text-xl font-semibold text-white">O envíame un correo</h3>
          <p className="mb-6 text-sm text-slate-400">
            Cuéntame en qué estado está tu operación; te respondo con un siguiente paso
            concreto.
          </p>
          <ContactForm recaptchaSiteKey={recaptchaSiteKey} embedded />
        </div>
      </div>
    </section>
  );
}
