import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} Gilberto Guerrero. Arquitecto Cloud & SRE.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://linkedin.com/in/gilbertoguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              LinkedIn
            </Link>
            <Link
              href="https://gilbertoguerrero.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              Web
            </Link>
            <Link
              href="https://youtube.com/@gilbertoguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
