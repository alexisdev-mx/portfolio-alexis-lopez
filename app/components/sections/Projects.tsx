"use client";
import Image from "next/image";
import { projects } from "@/lib/data";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === openId);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">Una selección de trabajos y soluciones.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }}>
              <Card>
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={p.image}
                    alt={`Imagen del proyecto ${p.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{p.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => {
                      const Icon = t.icon;
                      return (
                        <span key={t.name} className="chip">
                          <Icon aria-hidden /> {t.name}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <Button onClick={() => setOpenId(p.id)}>Ver más</Button>
                    {p.github && (
                      <a
                        className="inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-100 hover:text-[--color-accent]"
                        href={p.github} target="_blank" rel="noreferrer" aria-label="Ir al repositorio"
                      >
                        <FiGithub /> Código
                      </a>
                    )}
                    {p.demo && (
                      <a
                        className="inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-100 hover:text-[--color-accent]"
                        href={p.demo} target="_blank" rel="noreferrer" aria-label="Abrir demo en vivo"
                      >
                        <FiExternalLink /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Modal open={!!openId} onClose={() => setOpenId(null)} title={selected?.name}>
          {selected && (
            <div className="space-y-3 text-gray-800 dark:text-gray-100">
              <p className="text-muted">{selected.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-100">
                {selected.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div className="flex items-center gap-4 pt-2">
                {selected.github && <a className="inline-flex items-center gap-2 hover:text-[--color-accent]" href={selected.github} target="_blank" rel="noreferrer"><FiGithub /> Repositorio</a>}
                {selected.demo && <a className="inline-flex items-center gap-2 hover:text-[--color-accent]" href={selected.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Demo</a>}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
