"use client";
import { useState } from "react";
import Button from "../ui/Button";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("No se pudo enviar el mensaje.");
      setState("ok");
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMsg(msg || "Error desconocido.");
      setState("error");
    }
  }

  const inputBase =
    "mt-1 w-full rounded-md border bg-white text-gray-900 placeholder-gray-500 " +
    "border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent " +
    "dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:border-gray-700";

  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes un proyecto o idea? ¡Hablemos!</p>

        <div className="mt-8 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <form onSubmit={onSubmit} className="space-y-4" aria-label="Formulario de contacto">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Nombre
                </label>
                <input id="nombre" name="nombre" required className={inputBase} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputBase} />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Mensaje
                </label>
                <textarea id="mensaje" name="mensaje" rows={5} required className={inputBase} />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button disabled={state === "loading"}>
                  {state === "loading" ? "Enviando..." : "Enviar"}
                </Button>
                <a href={`mailto:${SITE.email}`} className="text-sm underline underline-offset-4 text-gray-800 dark:text-gray-200">
                  o envíame un correo: {SITE.email}
                </a>
              </div>

              {state === "ok" && <p className="text-sm text-green-500">¡Mensaje enviado! Te responderé pronto.</p>}
              {state === "error" && <p className="text-sm text-red-500">Ocurrió un error: {errorMsg}</p>}
            </form>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
              <h3 className="text-lg font-semibold">Redes</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a className="hover:text-accent" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a className="hover:text-accent" href={SITE.socials.github} target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a className="hover:text-accent" href={SITE.socials.twitter} target="_blank" rel="noreferrer">Twitter/X</a></li>
              </ul>
              <h4 className="mt-4 font-medium">Correo</h4>
              <a className="text-sm hover:text-accent" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
