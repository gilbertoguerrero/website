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
}

const navItemClass = "text-slate-300 transition hover:text-cyan-400 whitespace-nowrap";
const navContactClass =
  "rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-500/15 whitespace-nowrap";

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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
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
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium md:gap-x-5">
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("sobre-mi");
              else {
                goToSection("sobre-mi");
                router.push("/");
              }
            }}
            className={navItemClass}
          >
            Sobre mí
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
            className={navItemClass}
          >
            Asesorías
          </button>
          <button
            type="button"
            onClick={() => {
              if (pathname === "/") scrollToId("metodologia");
              else {
                goToSection("metodologia");
                router.push("/");
              }
            }}
            className={navItemClass}
          >
            Health Check
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
            className={navContactClass}
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
