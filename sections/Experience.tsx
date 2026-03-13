const experiences = [
  {
    period: "Actualidad",
    role: "Cloud Architect & Senior SRE",
    company: "Consultoría independiente",
    location: "Remoto · LATAM / Global",
    bullets: [
      "Diseño de arquitecturas cloud resilientes en AWS, GCP y Azure.",
      "Definición de pipelines CI/CD, observabilidad y estrategias de alta disponibilidad.",
      "Acompañamiento técnico a CTOs y equipos para migraciones y modernización.",
      "Experiencia en plataformas de e‑commerce y educación online con picos de tráfico.",
    ],
  },
  {
    period: "Roles anteriores",
    role: "DevOps / SRE / Infra Engineer",
    company: "Diversas compañías de producto y servicios",
    location: "Híbrido / Remoto",
    bullets: [
      "Automatización de infraestructura con Terraform y herramientas de orquestación.",
      "Implementación de monitoreo, alertas y tableros con Prometheus, Grafana y similares.",
      "Hardening de entornos, gestión de secretos y buenas prácticas de seguridad.",
      "Soporte a equipos de producto de comercio electrónico y plataformas educativas.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="border-t border-slate-700/50 bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            03. Experiencia
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dónde he aportado más valor.
          </h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.role + exp.period}
              className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <p className="text-sm font-medium text-cyan-300">{exp.period}</p>
                <p className="text-sm text-slate-400">
                  {exp.location}
                </p>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {exp.role}{" "}
                <span className="text-cyan-300">@ {exp.company}</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {exp.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

