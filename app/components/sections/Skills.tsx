"use client";
import { frameworksTools, languages, others, type Skill } from "@/lib/data";
import { motion } from "framer-motion";

function SkillItem({ s }: { s: Skill }) {
  const Icon = s.icon;
  return (
    <div
      className="group flex flex-col items-center justify-center gap-2 rounded-lg card-surface p-4
                 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      title={s.name}
    >
      <Icon className="text-2xl text-gray-800 dark:text-gray-100 opacity-90 group-hover:opacity-100" aria-hidden />
      <span className="text-sm text-gray-800 dark:text-gray-100">{s.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Lenguajes, frameworks, herramientas y otros.</p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {languages.map((s) => <SkillItem key={s.name} s={s} />)}
        </motion.div>

        <h3 className="mt-10 text-xl font-semibold">Frameworks & Tools</h3>
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {frameworksTools.map((s) => <SkillItem key={s.name} s={s} />)}
        </motion.div>

        <h3 className="mt-10 text-xl font-semibold">Otros</h3>
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {others.map((s) => <SkillItem key={s.name} s={s} />)}
        </motion.div>
      </div>
    </section>
  );
}
