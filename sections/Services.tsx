const services = [
  {
    title: "Asesoría SRE de alto nivel",
    description:
      "Evaluación de madurez, definición de SLO/SLI y diseño de una operación confiable alineada al negocio.",
    highlights: [
      "Evaluación de madurez SRE",
      "SLO / SLI & error budgets",
      "Gestión de incidentes",
      "Cultura y procesos SRE",
    ],
  },
  {
    title: "Consultoría DevOps & CI/CD",
    description:
      "Diseño y optimización de pipelines de integración y entrega continua, integrados con despliegues en Kubernetes (EKS) y contenedores en ECS, con foco en calidad, seguridad y rollback seguro.",
    highlights: [
      "Pipelines CI/CD",
      "DevSecOps",
      "Automatización de despliegues en EKS/ECS",
      "Flujos Dev–Ops",
    ],
  },
  {
    title: "Infraestructura como código & plataformas",
    description:
      "Implementación de infraestructura como código y bases para plataformas internas orientadas a equipos de producto.",
    highlights: [
      "Terraform / IaC",
      "Plataformas sobre Kubernetes",
      "Entornos reproducibles",
      "Buenas prácticas multi-cloud",
    ],
  },
  {
    title: "Acompañamiento y mentoring",
    description:
      "Trabajo cercano con CTOs y equipos para instalar capacidades SRE y DevOps más allá de un proyecto puntual.",
    highlights: [
      "Mentoring a equipos",
      "Sesiones 1:1 y grupales",
      "Revisión de arquitecturas",
      "Roadmaps de madurez",
    ],
  },
  {
    title: "Health Check y roadmap en 5 días",
    description:
      "Paquete cerrado: en pocos días auditamos costos cloud, CI/CD y fiabilidad, y entregamos un plan de acción real, no solo hallazgos sueltos.",
    highlights: [
      "PDF con estado y prioridades",
      "Quick wins y cambios estructurales",
      "Sesión de cierre con tu equipo",
    ],
  },
  {
    title: "Modelos de colaboración",
    description:
      "Madurez SRE, pipelines, plataformas y acompañamiento con ruta clara: definimos juntos si arrancamos por un diagnóstico, un retainer o un proyecto acotado.",
    highlights: [
      "Diagnóstico puntual",
      "Retainer / acompañamiento",
      "Proyecto cerrado (CI/CD, K8s, etc.)",
      "Alcance e inversión claros",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-3">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Asesorías
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Qué hago contigo
          </h2>
        </div>
        <div className="mb-10 max-w-3xl rounded-xl border border-cyan-500/25 bg-cyan-500/[0.06] p-5 sm:p-6">
          <p className="text-base font-medium leading-relaxed text-slate-100 sm:text-lg">
            No te vendo horas, te vendo claridad. En 5 días auditamos tus costos, tu CI/CD
            y tu fiabilidad para entregarte un plan de acción real.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 transition hover:border-cyan-400/30 hover:bg-slate-800"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mb-4 text-slate-400">{service.description}</p>
              <ul className="flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-700/70 px-2.5 py-1 text-xs font-medium text-cyan-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium text-slate-400">¿Siguiente paso?</p>
          <a
            href="#contacto"
            className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-cyan-400 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-300"
          >
            Agendar llamada exploratoria (30 min)
          </a>
        </div>
      </div>
    </section>
  );
}
