import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "./components/sections/Hero";
const About = dynamic(() => import("./components/sections/About"), { ssr: true });
const Experience = dynamic(() => import("./components/sections/Experience"), { ssr: true });
const Skills = dynamic(() => import("./components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("./components/sections/Projects"), { ssr: true });
const Education = dynamic(() => import("./components/sections/Education"), { ssr: true });
const Contact = dynamic(() => import("./components/sections/Contact"), { ssr: true });

export const dynamicParams = false; // fuerza SSG

export default function Page() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="container py-10">Cargando...</div>}>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </Suspense>
    </>
  );
}
