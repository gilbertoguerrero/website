export default function About() {
  return (
    <section
      id="sobre-mi"
      className="border-t border-slate-700/50 bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row">
        <div className="lg:w-1/3">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            02. Sobre mí
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Arquitectura Cloud & SRE para negocios que necesitan escalar.
          </h2>
        </div>
        <div className="space-y-4 text-slate-300 lg:w-2/3">
          <p>
            Hola, soy <span className="font-semibold text-white">Gilberto Guerrero</span>, 
            arquitecto cloud y SRE. Ayudo a compañías a diseñar, modernizar y operar 
            infraestructura en la nube con foco en <span className="text-cyan-300">confiabilidad</span>,{" "}
            <span className="text-cyan-300">escalabilidad</span> y{" "}
            <span className="text-cyan-300">optimización de costos</span>.
          </p>
          <p>
            Trabajo con entornos multi-cloud (AWS, GCP, Azure), infraestructura como código 
            (Terraform) y plataformas basadas en Kubernetes, aplicando prácticas DevOps y 
            SRE para que los equipos de desarrollo puedan desplegar con seguridad y rapidez.
          </p>
          <p>
            Me gusta bajar la complejidad técnica a diagramas claros, documentación accionable 
            y planes de implementación que alineen a negocio, equipos de seguridad, desarrollo 
            y operaciones.
          </p>
        </div>
      </div>
    </section>
  );
}

