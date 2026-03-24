import { ScrollToButton } from "@/components/ScrollToButton";

const pilares = [
  {
    title: "Optimización de costos (FinOps)",
    body: "Identificamos patrones y recursos que inflan tu factura cloud sin aportar confiabilidad.",
    foot: "Quick wins y palancas a mediano plazo.",
  },
  {
    title: "Resiliencia y observabilidad",
    body: "Logs, métricas, trazas y alertas: qué tan preparados estás antes de que el usuario note el fallo.",
    foot: "Puntos únicos de falla y visibilidad accionable.",
  },
  {
    title: "Eficiencia de entrega (CI/CD)",
    body: "Pipelines, despliegues en EKS/ECS y confianza en cada release.",
    foot: "Menos toil, más velocidad con control.",
  },
];

const senales = [
  "La factura cloud sube y no tienes claro por qué.",
  "Cada release se siente riesgosa o lenta.",
  "El equipo vive apagando alertas en lugar de entregar valor.",
];

export default function MetodologiaDiagnostico() {
  return (
    <section
      id="metodologia"
      className="border-t border-slate-700/50 bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Health Check SRE & DevOps
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Roadmap de ingeniería en 5 días, no solo parches.
        </h2>
        <p className="mb-10 max-w-2xl text-slate-300">
          Un health check accionable: costos cloud, fiabilidad y velocidad de despliegue.
          Pensado para CTOs, Heads of Engineering y líderes de plataforma en LATAM.
        </p>

        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr,1.1fr] lg:items-start">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 sm:p-6">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              ¿Encaja con tu equipo?
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              {senales.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Los 3 pilares del Health Check
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {pilares.map((p, i) => (
                <article
                  key={p.title}
                  className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-4"
                >
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/50 text-xs font-semibold text-cyan-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="mb-2 text-sm font-semibold text-white">{p.title}</h4>
                  <p className="mb-2 text-xs text-slate-300">{p.body}</p>
                  <p className="text-xs text-slate-500">{p.foot}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">Qué recibes</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              En hasta <span className="font-semibold text-cyan-300">5 días hábiles</span>
              , un roadmap accionable para ~90 días: PDF de estado actual (costos,
              resiliencia, CI/CD), <span className="text-cyan-300">Quick Wins</span>,
              propuestas estructurales con esfuerzo estimado y sesión de devolución con tu
              equipo. Con eso en la mesa, en la sesión de cierre vemos juntos si conviene
              seguir con <span className="font-medium text-slate-200">acompañamiento</span>{" "}
              o con un <span className="font-medium text-slate-200">proyecto cerrado</span>{" "}
              sin compromiso hasta que ambos veamos encaje.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 text-sm text-slate-300">
            <h3 className="mb-3 text-lg font-semibold text-white">Proceso</h3>
            <ol className="space-y-2">
              <li>
                <span className="font-semibold text-cyan-300">1.</span> Llamada inicial 30
                min (contexto y encaje).
              </li>
              <li>
                <span className="font-semibold text-cyan-300">2.</span> Acceso controlado
                (read-only / sesiones guiadas).
              </li>
              <li>
                <span className="font-semibold text-cyan-300">3.</span> Análisis 3–5 días
                hábiles.
              </li>
              <li>
                <span className="font-semibold text-cyan-300">4.</span> PDF + sesión de
                cierre.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <ScrollToButton
            targetId="contacto"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-lg bg-cyan-400 px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-300 sm:w-auto"
          >
            Agendar llamada exploratoria (30 min)
          </ScrollToButton>
          <p className="text-center text-sm leading-relaxed text-slate-400 sm:max-w-md sm:text-left">
            Sin compromiso: la llamada de 30 min es para validar encaje y acordar el
            siguiente paso.
          </p>
        </div>
      </div>
    </section>
  );
}
