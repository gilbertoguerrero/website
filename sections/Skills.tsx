const frontend = ["HTML5", "CSS3", "JavaScript / TypeScript", "React / Next.js"];

const backend = [
  "Node.js",
  "Python",
  "Go",
  "APIs REST / GraphQL",
];

const cloud = [
  "AWS",
  "Google Cloud Platform",
  "Microsoft Azure",
  "Kubernetes",
  "Terraform",
  "CI/CD (GitHub Actions, ArgoCD)",
  "Prometheus / Grafana",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-700/50 bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            05. Skills & Tecnologías
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tecnologías con las que trabajo.
          </h2>
          <p className="mt-3 text-slate-400">
            Un stack orientado a arquitecturas modernas, automatización y operación confiable en producción.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Frontend</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {frontend.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Backend</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {backend.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Cloud & DevOps</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {cloud.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

