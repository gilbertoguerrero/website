export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row">
        <div className="text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            01. Arquitecto Cloud & Senior SRE
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hola, soy <span className="text-cyan-300">Gilberto Guerrero</span>.
          </h1>
          <h2 className="mb-6 text-xl font-medium text-slate-200 sm:text-2xl">
            Diseño y opero plataformas cloud seguras, escalables y eficientes.
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
            Ayudo a empresas a pasar de infraestructuras frágiles y costosas a
            entornos{" "}
            <span className="text-cyan-300">
              observables, automatizados y listos para producción
            </span>
            , aplicando principios de SRE, DevOps y buenas prácticas de
            arquitectura.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Hablemos de tu plataforma
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-slate-800"
            >
              Ver experiencia
            </a>
          </div>
        </div>
        <div className="w-full max-w-md rounded-xl border border-slate-700/60 bg-slate-900/80 p-5 text-sm text-slate-200 shadow-lg shadow-cyan-500/5">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
            const developer = {"{"}
          </p>
          <div className="space-y-1 font-mono text-xs sm:text-sm">
            <p>
              <span className="text-cyan-400">name</span>:{" "}
              <span className="text-amber-200">&#39;Gilberto Guerrero&#39;</span>,
            </p>
            <p>
              <span className="text-cyan-400">role</span>:{" "}
              <span className="text-amber-200">
                &#39;Cloud Architect & Senior SRE&#39;
              </span>
              ,
            </p>
            <p>
              <span className="text-cyan-400">focus</span>: [
              <span className="text-emerald-300">
                &#39;arquitecturas escalables&#39;
              </span>
              , <span className="text-emerald-300">&#39;DevOps / SRE&#39;</span>,{" "}
              <span className="text-emerald-300">&#39;optimización de costos&#39;</span>
              ],
            </p>
            <p>
              <span className="text-cyan-400">cloud</span>: [
              <span className="text-emerald-300">&#39;AWS&#39;</span>,{" "}
              <span className="text-emerald-300">&#39;GCP&#39;</span>,{" "}
              <span className="text-emerald-300">&#39;Azure&#39;</span>],
            </p>
            <p>
              <span className="text-cyan-400">location</span>:{" "}
              <span className="text-amber-200">&#39;Remoto · LATAM / Global&#39;</span>,
            </p>
          </div>
          <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
            {"};"}
          </p>
        </div>
      </div>
    </section>
  );
}

