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
];

export default function Services() {
  return (
    <section id="servicios" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            04. Asesorías
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Servicios de asesoría SRE y DevOps
          </h2>
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
          No solo implemento herramientas: te acompaño a construir una operación SRE y
          DevOps madura, con una hoja de ruta clara y foco en confiabilidad, velocidad
          de entrega y costos cloud.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 transition hover:border-cyan-400/30 hover:bg-slate-800"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
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
        <div className="mt-10 rounded-xl border border-slate-700/60 bg-slate-800/40 p-6 text-sm text-slate-300 sm:p-8">
          <h3 className="mb-2 text-lg font-semibold text-white">
            Modelos de trabajo y costos
          </h3>
          <p className="mb-3">
            Trabajo con paquetes de diagnóstico y acompañamiento mensual (retainer) para
            que puedas avanzar por etapas. Según tu contexto, definimos juntos si tiene
            más sentido comenzar con un diagnóstico acotado o con un proyecto de
            implementación específico.
          </p>
          <p className="mb-2">
            Prefiero mantener una conversación directa para ajustar el modelo a tu
            realidad, pero siempre con transparencia en el alcance y la inversión antes
            de iniciar.
          </p>
          <p className="text-slate-400">
            Si quieres hablar de costos y del formato que mejor encaja con tu empresa,
            puedes{" "}
            <a
              href="#contacto"
              className="text-cyan-300 underline-offset-2 hover:underline"
            >
              agendar un diagnóstico sin costo
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
