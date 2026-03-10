const services = [
  {
    title: "AWS Architecture",
    description:
      "Arquitecturas resilientes y escalables en Amazon Web Services con foco en costos y rendimiento.",
    highlights: ["Kubernetes", "Terraform", "CI/CD", "Observabilidad"],
  },
  {
    title: "GCP Architecture",
    description:
      "Soluciones cloud-native en Google Cloud Platform, desde diseño hasta despliegue y monitoreo.",
    highlights: ["Kubernetes", "Terraform", "CI/CD", "Observabilidad"],
  },
  {
    title: "Azure Architecture",
    description:
      "Implementación y optimización de cargas de trabajo en Microsoft Azure con prácticas enterprise.",
    highlights: ["Kubernetes", "Terraform", "CI/CD", "Observabilidad"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Arquitectura cloud en los principales proveedores con las mejores
            prácticas de la industria.
          </p>
        </div>
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
      </div>
    </section>
  );
}
