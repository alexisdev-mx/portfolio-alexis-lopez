import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: `${SITE.name} — Portafolio | Software, Automatizaciones e IA`,
  description: `Portafolio profesional de ${SITE.name}: desarrollo de software, automatizaciones e inteligencia artificial.`,
  openGraph: {
    title: `${SITE.name} — Portafolio`,
    description: "Desarrollo de software, automatizaciones e IA.",
    url: SITE.domain,
    siteName: "Portafolio Alexis López",
    images: [
      {
        url: SITE.ogImage,
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
    title: `${SITE.name} — Portafolio`,
    description: "Desarrollo de software, automatizaciones e IA.",
    images: [SITE.ogImage],
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
