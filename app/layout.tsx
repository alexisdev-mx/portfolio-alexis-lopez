import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ejemplo-portfolio-alexis.com"),
  title: "Ing. Alexis López Lira — Portafolio | Software, Automatizaciones e IA",
  description: "Portafolio profesional de Alexis López Lira: desarrollo de software, automatizaciones e inteligencia artificial.",
  openGraph: {
    title: "Ing. Alexis López Lira — Portafolio",
    description: "Desarrollo de software, automatizaciones e IA.",
    url: "https://www.ejemplo-portfolio-alexis.com",
    siteName: "Portafolio Alexis",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60",
        width: 1200,
        height: 630,
        alt: "Portafolio Alexis"
      }
    ],
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. Alexis López Lira — Portafolio",
    description: "Desarrollo de software, automatizaciones e IA.",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=60"],
    creator: "@allyrax_tech"
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9FAFB" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2937" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Enlace para saltar directamente al contenido (accesibilidad) */}
          <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-black px-3 py-2 rounded">
            Saltar al contenido
          </a>
          <Header />
          <main id="contenido">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
