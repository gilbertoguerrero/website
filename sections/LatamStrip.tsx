const paises = [
  { nombre: "Colombia", iso: "co" },
  { nombre: "México", iso: "mx" },
  { nombre: "Brasil", iso: "br" },
  { nombre: "Chile", iso: "cl" },
  { nombre: "Argentina", iso: "ar" },
] as const;

export default function LatamStrip() {
  return (
    <div className="border-y border-slate-700/40 bg-slate-800/25 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="sr-only">
          Países donde hay experiencia: {paises.map((p) => p.nombre).join(", ")}.
        </p>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {paises.map((p) => (
            <span
              key={p.iso}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-900/50 px-3 py-1.5"
            >
              {/* Imagen PNG (flagcdn): se ve bien en Windows; los emojis de bandera a menudo muestran "CO", "MX", etc. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/w40/${p.iso}.png`}
                srcSet={`https://flagcdn.com/w80/${p.iso}.png 2x`}
                alt=""
                width={40}
                height={27}
                className="h-[22px] w-auto shrink-0 rounded-sm object-cover shadow-sm ring-1 ring-black/20 sm:h-[26px]"
                loading="lazy"
              />
              <span className="text-sm font-medium text-slate-200">{p.nombre}</span>
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-[0.9375rem]">
          <span className="font-medium text-slate-300">
            Experiencia regional en las plataformas tecnológicas líderes de LATAM.
          </span>{" "}
          Especialista en resolver retos críticos de gran escala en tecnologías cloud,
          optimización de costos y alta disponibilidad en la región, en plataformas como
          AWS, GCP y Azure.
        </p>
      </div>
    </div>
  );
}
