const tools = [
  { name: "Terraform", label: "Terraform" },
  { name: "Kubernetes", label: "Kubernetes" },
  { name: "AWS", label: "AWS" },
  { name: "Prometheus", label: "Prometheus" },
  { name: "Grafana", label: "Grafana" },
  { name: "ArgoCD", label: "ArgoCD" },
];

export default function SocialProof() {
  return (
    <section id="herramientas" className="border-y border-slate-700/50 bg-slate-800/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Herramientas con las que trabajo
          </h2>
          <p className="max-w-xl text-slate-400">
            Stack probado en producción para infraestructura, CI/CD y
            observabilidad.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-800/50 px-5 py-3 transition hover:border-cyan-400/30 hover:bg-slate-800"
            >
              <span className="text-lg font-semibold text-white">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
