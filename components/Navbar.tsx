"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToSection(id: string) {
  try {
    sessionStorage.setItem("scrollToId", id);
  } catch {
    // Ignore storage failures (privacy modes, etc.)
  }
  // La navegación se hará con el router para evitar hashes en la URL.
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    let id: string | null = null;
    try {
      id = sessionStorage.getItem("scrollToId");
    } catch {
      id = null;
    }

    if (!id) return;

    // Esperamos a que el DOM de la página destino esté listo.
    const t = window.setTimeout(() => {
      scrollToId(id as string);
      try {
        sessionStorage.removeItem("scrollToId");
      } catch {
        // ignore
      }
    }, 50);

    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => {
            if (pathname === "/") scrollToId("inicio");
            else {
              goToSection("inicio");
              router.push("/");
            }
          }}
          className="text-left text-lg font-semibold tracking-tight text-white transition hover:text-cyan-400"
        >
          Gilberto Guerrero
        </button>
        <div className="flex gap-6 text-sm font-medium">
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("sobre-mi");
              else {
                goToSection("sobre-mi");
                router.push("/");
              }
            }}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            02. Sobre mí
          </button>
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("experiencia");
              else {
                goToSection("experiencia");
                router.push("/");
              }
            }}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            03. Experiencia
          </button>
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("servicios");
              else {
                goToSection("servicios");
                router.push("/");
              }
            }}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            04. Asesorías
          </button>
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("skills");
              else {
                goToSection("skills");
                router.push("/");
              }
            }}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            05. Skills
          </button>
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("contacto");
              else {
                goToSection("contacto");
                router.push("/");
              }
            }}
            className="text-slate-300 transition hover:text-cyan-400"
          >
            06. Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
