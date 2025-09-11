"use client";
import { education, certifications } from "@/lib/data";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="educacion" className="section">
      <div className="container">
        <h2 className="section-title">Educación & Certificaciones</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <h3 className="text-xl font-semibold">Educación</h3>
            <ul className="mt-3 space-y-2">
              {education.map((e) => (
                <li key={e.title} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{e.place}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}>
            <h3 className="text-xl font-semibold">Certificaciones</h3>
            <ul className="mt-3 space-y-2">
              {certifications.map((c) => (
                <li key={c.title} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-200">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
