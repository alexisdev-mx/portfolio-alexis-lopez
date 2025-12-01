"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const fadeUp = shouldReduce
    ? {}
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const fadeUpDelayed = shouldReduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 } };
  const fadeUpDelayed2 = shouldReduce
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 } };

  return (
    <section className="relative section">
      {/* Fondo con gradiente/partículas sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />
        <div className="absolute -top-32 sm:-top-40 left-1/2 h-[360px] w-[360px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container max-w-5xl text-center">
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          {...fadeUp}
        >
          Ing. Alexis López Lira —{" "}
          <span className="text-accent">
            Desarrollador de Software, Automatizaciones e IA
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-200"
          {...fadeUpDelayed}
        >
          Creando soluciones innovadoras para el futuro.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUpDelayed2}
        >
          {/* Botón primario: con fallback de color por si falla la var CSS */}
          <Link
            href="#proyectos"
            className="
    inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-medium
    shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]
    text-white
    bg-[#1E3A8A] bg-[--color-primary] hover:opacity-90
    dark:text-black
    dark:bg-[#06B6D4] dark:bg-[--color-primary-dark]
  "
          >
            Ver Proyectos
          </Link>

          {/* Botón ghost: en dark le damos fondo translúcido + texto blanco */}
          <Link
            href="#contacto"
            className="
    inline-flex w-full sm:w-auto items-center justify-center rounded-md px-5 py-3 text-sm font-medium
    border focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]
    bg-transparent text-gray-800 border-gray-300 hover:bg-gray-100
    dark:text-white dark:border-gray-600 dark:bg-white/10 dark:hover:bg-white/15
  "
          >
            Contáctame
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
