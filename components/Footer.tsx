import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const linkClass =
  "inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-400">
            © {currentYear} Gilberto Guerrero. Arquitecto Cloud, Consultor SRE & DevOps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
            <Link
              href="https://www.linkedin.com/company/gilbertoguerrero"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <FaLinkedin className="h-5 w-5 shrink-0" aria-hidden />
              LinkedIn
            </Link>
            <Link
              href="https://www.facebook.com/gilbertoguerrerooficial"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <FaFacebook className="h-5 w-5 shrink-0" aria-hidden />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/gilbertoguerrerooficial/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <FaInstagram className="h-5 w-5 shrink-0" aria-hidden />
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@gilbertoguerrerooficial"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <FaYoutube className="h-5 w-5 shrink-0" aria-hidden />
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
