"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="section-title">Sobre mí</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-200 leading-relaxed">
            Soy Ingeniero en Sistemas Computacionales, apasionado por la creación de soluciones innovadoras que integren desarrollo,
            automatización e inteligencia artificial. Con más de cinco años de experiencia, he trabajado en proyectos que van desde
            aplicaciones web modernas hasta automatizaciones complejas y sistemas de IA aplicados a casos de uso reales.
          </p>
          <p className="mt-3 text-gray-600 dark:text-gray-200 leading-relaxed">
            Me enfoco en entregar productos de alto rendimiento, accesibles y escalables, con una experiencia de usuario impecable.
          </p>
        </motion.div>

        <motion.div className="relative h-72 md:h-80 rounded-xl overflow-hidden" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=60"
            alt="Alexis en entorno tecnológico"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
