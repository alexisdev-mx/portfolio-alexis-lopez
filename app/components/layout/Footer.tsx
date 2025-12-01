import { FiGithub, FiLinkedin, FiX } from "react-icons/fi";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a aria-label="LinkedIn" href={SITE.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiLinkedin />
          </a>
          <a aria-label="GitHub" href={SITE.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiGithub />
          </a>
          <a aria-label="X (Twitter)" href={SITE.socials.twitter} target="_blank" rel="noreferrer" className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiX />
          </a>
        </div>
      </div>
    </footer>
  );
}
