"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-400"
        >
          Gilberto Guerrero
        </Link>
        <div className="flex gap-6">
          <Link
            href="#servicios"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Servicios
          </Link>
          <Link
            href="#herramientas"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Herramientas
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
