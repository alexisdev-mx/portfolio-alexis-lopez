"use client";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div className="mt-8 relative">
          <div aria-hidden className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
          <ul className="space-y-8">
            {experience.map((item, i) => (
              <motion.li
                key={item.company}
                className="relative pl-10 md:pl-14"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div aria-hidden className="absolute left-0 md:left-2 top-1.5 h-3 w-3 rounded-full bg-accent shadow" />
                <h3 className="text-lg font-semibold">{item.role} — <span className="opacity-80">{item.company}</span></h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
