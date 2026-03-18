"use client";

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToSection(id: string) {
  if (typeof window === "undefined") return;
  if (window.location.pathname === "/") {
    scrollToId(id);
  } else {
    window.location.href = `/#${id}`;
  }
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => goToSection("inicio")}
          className="text-left text-lg font-semibold tracking-tight text-white transition hover:text-cyan-400"
        >
          Gilberto Guerrero
        </button>
        <div className="flex gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => goToSection("sobre-mi")}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            02. Sobre mí
          </button>
          <button
            type="button"
            onClick={() => goToSection("experiencia")}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            03. Experiencia
          </button>
          <button
            type="button"
            onClick={() => goToSection("servicios")}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            04. Asesorías
          </button>
          <button
            type="button"
            onClick={() => goToSection("skills")}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            05. Skills
          </button>
          <button
            type="button"
            onClick={() => goToSection("contacto")}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            06. Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
