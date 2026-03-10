export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-400">
          Arquitecto Cloud & Senior SRE
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Gilberto Guerrero
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Diseño y optimizo infraestructura en la nube para que tu negocio escale
          sin frenos: <strong className="text-cyan-400">reducción de costos</strong>
          , <strong className="text-cyan-400">escalabilidad</strong> y{" "}
          <strong className="text-cyan-400">arquitectura moderna</strong> en AWS,
          GCP y Azure.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Hablar sobre tu proyecto
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-slate-800"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
