import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CALENDLY_URL =
  "https://calendly.com/gguerrero-gilbertoguerrero/30min";

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <section className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
          <div className="lg:w-3/5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
              SRE & DevOps Health Check
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Deja de apagar incendios. Obtén un roadmap de ingeniería en 5
              días.
            </h1>
            <p className="mb-5 text-base text-slate-300 sm:text-lg">
              Auditoría profunda de costos cloud, fiabilidad y velocidad de
              despliegue para empresas que están escalando en LATAM. Dirigido a
              CTOs, Heads of Engineering y líderes de plataformas que quieren
              claridad sobre riesgos y próximos pasos.
            </p>
            <div className="mb-4 flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Agendar diagnóstico inicial (30 min)
              </a>
              <p className="text-xs text-slate-400">
                Llamada exploratoria para validar encaje y definir alcance del
                diagnóstico.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5">
            <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-5 text-sm text-slate-200 shadow-lg shadow-cyan-500/5">
              <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                ¿Es para tu equipo?
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Tu factura de AWS/GCP/Azure sube mes a mes y no tienes
                    claro por qué.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Los despliegues son lentos o riesgosos, y cada release se
                    siente como un pequeño incidente.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Tu equipo pasa más tiempo reaccionando a alertas que
                    entregando nuevas funcionalidades.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Los 3 pilares del diagnóstico
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-900/80 text-xs font-semibold text-cyan-300">
                01
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Optimización de costos (FinOps)
              </h3>
              <p className="mb-2 text-sm text-slate-300">
                Analizamos tu cuenta cloud para identificar recursos o patrones
                de uso que generen gasto innecesario.
              </p>
              <p className="text-xs text-slate-400">
                Objetivo: hallar ahorros rápidos sin comprometer la
                confiabilidad, y dejar claras las palancas de costo a mediano
                plazo.
              </p>
            </article>
            <article className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-900/80 text-xs font-semibold text-cyan-300">
                02
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Resiliencia y observabilidad
              </h3>
              <p className="mb-2 text-sm text-slate-300">
                Revisamos cómo monitoreas tus servicios (logs, métricas, trazas
                y alertas) y qué tan preparados están para fallos.
              </p>
              <p className="text-xs text-slate-400">
                Objetivo: detectar puntos únicos de falla y mejorar la
                visibilidad antes de que el cliente final note el problema.
              </p>
            </article>
            <article className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-900/80 text-xs font-semibold text-cyan-300">
                03
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Eficiencia de entrega (CI/CD)
              </h3>
              <p className="mb-2 text-sm text-slate-300">
                Evaluamos tu pipeline de CI/CD, la automatización de despliegues
                y la integración con servicios en EKS/ECS.
              </p>
              <p className="text-xs text-slate-400">
                Objetivo: eliminar cuellos de botella, reducir toil manual y
                subir la confianza en cada release.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Qué recibes al finalizar el diagnóstico
              </h2>
              <p className="mb-4 text-sm text-slate-300">
                En un máximo de 5 días hábiles, recibirás un{" "}
                <span className="font-semibold text-cyan-300">
                  roadmap de ingeniería
                </span>{" "}
                claro y accionable, pensado para los próximos 90 días.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Un PDF con el estado actual de tus prácticas SRE/DevOps
                    (costos, resiliencia, CI/CD).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Lista de{" "}
                    <span className="font-semibold text-cyan-300">
                      Quick Wins
                    </span>{" "}
                    (acciones de alto impacto que puedes ejecutar en semanas).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Propuestas de{" "}
                    <span className="font-semibold text-cyan-300">
                      cambios estructurales
                    </span>{" "}
                    (arquitectura, procesos, cultura) con esfuerzo estimado.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>
                    Una sesión de devolución para revisar el roadmap con tu
                    equipo y resolver preguntas.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-400">
                A partir de este diagnóstico, podemos decidir juntos si tiene
                sentido un acompañamiento continuo o un proyecto cerrado
                (CI/CD, EKS/ECS, observabilidad, etc.).
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 text-sm text-slate-300">
              <h3 className="mb-3 text-lg font-semibold text-white">
                Cómo funciona el proceso
              </h3>
              <ol className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold text-cyan-300">1.</span>{" "}
                  Llamada inicial de 30 minutos para entender contexto y
                  validar encaje.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">2.</span>{" "}
                  Acceso controlado a la información necesaria (read‑only,
                  sesiones guiadas, etc.).
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">3.</span>{" "}
                  Análisis durante 3–5 días hábiles.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">4.</span>{" "}
                  Entrega del PDF de roadmap y sesión de devolución.
                </li>
              </ol>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Agendar diagnóstico inicial (30 min)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

