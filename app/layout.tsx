import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-TPJ8ZWRJ";

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
    title: "Gilberto Guerrero | Consultor SRE & DevOps para empresas en LATAM",
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
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
