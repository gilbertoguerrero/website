import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import LatamStrip from "@/sections/LatamStrip";
import About from "@/sections/About";
import Services from "@/sections/Services";
import MetodologiaDiagnostico from "@/sections/MetodologiaDiagnostico";
import Contacto from "@/sections/Contacto";
import { getCalendlyBaseUrl, getRecaptchaSiteKey } from "@/lib/public-config";

export default function Home() {
  const calendlyBaseUrl = getCalendlyBaseUrl();
  const recaptchaSiteKey = getRecaptchaSiteKey();

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <LatamStrip />
        <About />
        <Services />
        <MetodologiaDiagnostico />
        <Contacto calendlyBaseUrl={calendlyBaseUrl} recaptchaSiteKey={recaptchaSiteKey} />
      </main>
      <Footer />
    </div>
  );
}
