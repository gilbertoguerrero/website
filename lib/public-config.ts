/**
 * Valores que el cliente necesita pero que en Vercel conviene definir sin prefijo
 * NEXT_PUBLIC_. Se leen aquí solo en el servidor y se pasan como props a los
 * componentes "use client".
 *
 * Si aún usas NEXT_PUBLIC_* en .env, también se respetan como respaldo.
 */

export function getCalendlyBaseUrl(): string | undefined {
  const v =
    process.env.CALENDLY_URL?.trim() || process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  return v || undefined;
}

export function getRecaptchaSiteKey(): string {
  return (
    process.env.RECAPTCHA_SITE_KEY?.trim() ||
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ||
    ""
  );
}

/** Enlace directo (p. ej. página /diagnostico): usa env o la misma URL por defecto que el embed. */
export function getCalendlyLinkHref(): string {
  return getCalendlyBaseUrl() ?? "https://calendly.com/gguerrero-gilbertoguerrero/30min";
}
