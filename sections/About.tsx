const empresas = [
  "Dafiti",
  "BigFood",
  "Innova Schools",
  "Siesa Ecommerce",
  "Grupo Educate",
  "Los Tres Editores",
];

const stack = [
  "AWS",
  "GCP",
  "Azure",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Prometheus",
  "Grafana",
  "EKS / ECS",
  "SLO / SLI",
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t border-slate-700/50 bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Sobre mí
        </p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Credibilidad en SRE y DevOps, con foco en negocio.
        </h2>
        <div className="mb-10 max-w-2xl space-y-4 text-slate-300">
          <p>
            Soy <span className="font-semibold text-white">Gilberto Guerrero</span>, CEO y
            consultor senior en SRE y DevOps. Acompaño a empresas a operar la nube con{" "}
            <span className="text-cyan-300">confiabilidad</span>,{" "}
            <span className="text-cyan-300">escala</span> y{" "}
            <span className="text-cyan-300">costos bajo control</span>.
          </p>
          <p className="text-sm text-slate-400">
            Mucha experiencia en <span className="text-slate-300">e‑commerce</span> y{" "}
            <span className="text-slate-300">educación online</span> en Colombia, Brasil,
            México, Chile y Argentina.
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Equipos y empresas con las que he trabajado
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {empresas.map((nombre) => (
              <span
                key={nombre}
                className="rounded-lg border border-slate-600/60 bg-slate-800/50 px-3 py-2 text-sm font-medium text-slate-200"
              >
                {nombre}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Stack y prácticas
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-cyan-300/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
