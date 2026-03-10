import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import SocialProof from "@/sections/SocialProof";
import ContactForm from "@/sections/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
