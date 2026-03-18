import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilberto Guerrero | Consultor SRE & DevOps para empresas en LATAM",
  description:
    "Consultor senior en SRE y DevOps que ayuda a empresas en LATAM a escalar su infraestructura, optimizar costos cloud y mejorar su confiabilidad. Experiencia en ecommerce y educación online con compañías como Dafiti, BigFood, Siesa Ecommerce e Innova Schools.",
  openGraph: {
    title:
      "Gilberto Guerrero | Consultor SRE & DevOps para empresas en LATAM",
    description:
      "Asesoría en SRE y DevOps para empresas que necesitan escalar sin perder confiabilidad. Experiencia en ecommerce y educación online en LATAM.",
    url: "https://www.gilbertoguerrero.com",
    type: "website",
    locale: "es_LA",
    siteName: "Gilberto Guerrero",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilberto Guerrero | Consultor SRE & DevOps",
    description:
      "Consultor senior en SRE y DevOps para empresas en LATAM. Madurez SRE, DevOps, costos cloud y plataformas en producción.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TR3GF9ZPP1"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TR3GF9ZPP1');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
