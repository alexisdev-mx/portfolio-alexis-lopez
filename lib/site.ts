const domain = (process.env.NEXT_PUBLIC_SITE_URL || "https://alexislopez.dev").replace(/\/$/, "");

export const SITE = {
  name: "Ing. Alexis López Lira",
  role: "Desarrollador de Software, Automatizaciones e IA",
  domain,
  email: "alexis07isc@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/alexislopezlira",
    github: "https://github.com/allyrax",
    twitter: "https://x.com/allyrax_tech"
  },
  ogImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60"
};
