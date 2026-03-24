"use client";

import { useState } from "react";

type EmpresaLogoProps = {
  name: string;
  /** Archivo en `public/logos/{slug}.svg` o `.png`. */
  slug: string;
};

export function EmpresaLogo({ name, slug }: EmpresaLogoProps) {
  const [format, setFormat] = useState<"svg" | "png" | "text">("svg");

  const src =
    format === "svg"
      ? `/logos/${slug}.svg`
      : format === "png"
        ? `/logos/${slug}.png`
        : null;

  return (
    <div className="flex w-[112px] flex-col items-center gap-2.5 rounded-xl border border-slate-200/90 bg-slate-100 p-3 shadow-sm sm:w-[136px]">
      <div className="flex h-11 w-full items-center justify-center rounded-lg bg-white/90">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt=""
            className="max-h-10 w-auto max-w-full object-contain object-center"
            loading="lazy"
            onError={() => {
              setFormat((prev) => (prev === "svg" ? "png" : "text"));
            }}
          />
        ) : (
          <div
            className="flex h-10 w-full items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50"
            aria-hidden
          >
            <span className="text-xs text-slate-400">—</span>
          </div>
        )}
      </div>
      <span className="text-center text-[11px] font-medium leading-tight text-slate-700 sm:text-xs">
        {name}
      </span>
    </div>
  );
}
