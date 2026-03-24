import { EmpresaLogo } from "@/components/EmpresaLogo";

const empresas = [
  { name: "Dafiti", slug: "dafiti" },
  { name: "Robin Food", slug: "robinfood" },
  { name: "Innova Schools", slug: "innovaschools" },
  { name: "Siesa Ecommerce", slug: "siesa" },
  { name: "Grupo Educate", slug: "grupoeducatecolombia" },
  { name: "Los Tres Editores", slug: "lostreseditores" },
] as const;

const stack = [
  "AWS",
  "GCP",
  "Azure",
  "Kubernetes",
  "EKS / ECS",
  "Terraform",
  "CI/CD",
  "Prometheus",
  "Grafana",
  "SLO / SLI",
  "Go",
  "Python",
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
            Experiencia profunda en <span className="text-slate-300">e‑commerce</span> y{" "}
            <span className="text-slate-300">educación online</span> en la región.
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Equipos y empresas con las que he trabajado
          </p>
          <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {empresas.map((empresa) => (
              <EmpresaLogo
                key={empresa.slug}
                name={empresa.name}
                slug={empresa.slug}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Cloud, plataformas y automatización
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
