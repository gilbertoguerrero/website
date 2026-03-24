"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Los enlaces antiguos a /diagnostico llevan al inicio, sección metodología.
 */
export default function DiagnosticoRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      sessionStorage.setItem("scrollToId", "metodologia");
    } catch {
      // ignore
    }
    router.replace("/");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-sm text-slate-500">
      Redirigiendo…
    </div>
  );
}
