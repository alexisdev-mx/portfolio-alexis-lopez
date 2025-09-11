"use client";

import Link from "next/link";
//import ThemeToggle from "../ui/ThemeToggle";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [open, mounted]);

  const MenuPortal =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              className="absolute right-0 top-0 h-full w-[80vw] max-w-xs bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-l border-gray-200 dark:border-gray-800 shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiX className="text-xl" />
              </button>

              <nav className="flex flex-col gap-4">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="pt-4">
                  {/* <ThemeToggle /> */}
                </div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/85 dark:bg-gray-900/85 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg text-gray-900 dark:text-gray-100">
          Alexis <span className="text-accent">López</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent focus:text-accent"
            >
              {l.label}
            </a>
          ))}
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile button, siempre legible */}
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 shadow-sm"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <FiMenu className="text-xl" />
        </button>
      </nav>

      {MenuPortal}
    </header>
  );
}
