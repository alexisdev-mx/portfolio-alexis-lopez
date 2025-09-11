import { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiGo,
  SiKotlin,
  SiTypescript,
  SiOpenjdk,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiFlask,
  SiAngular,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiDjango
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa6";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Mas Boletos",
    role: "Desarrollador",
    period: "junio 2021 – febrero 2025",
    description: "Mejora de software y optimización de procesos."
  },
  {
    company: "SolSer Information Technology",
    role: "Desarrollador de Software e IA",
    period: "marzo 2025 – actualidad",
    description: "Desarrollo de aplicaciones y soluciones de IA."
  }
];

export type Skill = { name: string; icon: IconType };

export const languages: Skill[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: SiOpenjdk }, // reemplazo estable si SiJava no existe en tu versión
  { name: "PHP", icon: SiPhp },
  { name: "Go", icon: SiGo },
  { name: "Kotlin", icon: SiKotlin },
  { name: "TypeScript", icon: SiTypescript }
];

export const frameworksTools: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "Angular", icon: SiAngular },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker }
];

export const others: Skill[] = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL Server", icon: FaMicrosoft },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql }
];

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string; // url (webp)
  tech: Skill[];
  github?: string;
  demo?: string;
  details: string[];
};

export const projects: Project[] = [
  {
    id: "flowmail-ai",
    name: "FlowMail AI",
    description: "FlowMail AI lee, clasifica y actúa sobre tus correos electrónicos...",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=60",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Python", icon: SiPython },
      { name: "TensorFlow", icon: SiTensorflow }
    ],
    github: "https://github.com/placeholder/flowmail-ai",
    demo: "https://demo.example.com/flowmail-ai",
    details: [
      "Clasificación automática con IA y etiquetas inteligentes.",
      "Acciones automáticas configurables (responder, archivar, escalar).",
      "Panel de control con analítica de productividad."
    ]
  },
  {
    id: "all-ia",
    name: "ALL-IA",
    description:
      "RAG diseñado para resolver el problema de encontrar información precisa...",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=900&auto=format&fit=crop&q=60",
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Docker", icon: SiDocker }
    ],
    github: "https://github.com/placeholder/all-ia",
    demo: "https://demo.example.com/all-ia",
    details: [
      "Búsqueda semántica con embeddings y FAISS.",
      "Controles de dominio y contexto.",
      "Integración con panel de administración."
    ]
  },
  {
    id: "alamanofix",
    name: "AlaManoFix",
    description:
      "Plataforma digital diseñada para conectar a personas con profesionales verificados...",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&q=60",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "MongoDB", icon: SiMongodb }
    ],
    github: "https://github.com/placeholder/alamanofix",
    demo: "https://demo.example.com/alamanofix",
    details: [
      "Perfiles verificados y reseñas confiables.",
      "Búsqueda y filtros por ubicación y especialidad.",
      "Pagos seguros y mensajes integrados."
    ]
  }
];

export const education = [
  {
    title: "Ingeniero en Sistemas Computacionales",
    place: "TecNM Campus San Juan del Río"
  }
];

export const certifications = [
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { title: "DevOps TOTAL", issuer: "Udemy" },
  { title: "The Complete Agentic AI Engineering Course", issuer: "Lab/Academy" }
];
