# Plan de Sprints - Portfolio Alexis López

## Sprint 1 (Corrección básica y consistencia)
- Arreglar codificación/acentos corruptos en todos los textos (layout, secciones, data y metadatos).
- Unificar configuración de Next (mantener `next.config.mjs` con imágenes remotas, eliminar o completar `next.config.ts`).
- Adaptar configuración a Tailwind v4 (quitar `tailwind.config.ts` obsoleto o documentar su inutilidad).
- Revisar y documentar variables de entorno (ej. `FORMSPREE_ENDPOINT`) y flujos de contacto.
- Actualizar README con instrucciones reales del proyecto.

## Sprint 2 (UI/UX y responsividad)
- Corregir el tema inconsistente entre móvil/escritorio (revisar `next-themes`, `ThemeProvider` y estado inicial de tema).
- Revisar nav/header móvil: menú lateral, accesos rápidos, bloqueo de scroll y colores en dark/light.
- Hacer responsivo todo el layout: espaciados, grids y tipografías en secciones Hero, Projects, Contact y timelines.
- Ajustar botones y chips para estados hover/focus/active accesibles en móvil y desktop.
- Mejorar Hero (texto legible, CTAs consistentes) y fondos/gradientes para performance en móvil.

## Sprint 3 (Contenido real y SEO)
- Sustituir placeholders (dominio, redes sociales, repos/demos de proyectos, imágenes) por datos reales.
- Completar descripción de proyectos y experiencia (fechas, logros medibles, tecnologías clave).
- Revisar y mejorar metadatos SEO/OG/Twitter con el dominio final y slugs limpios.
- Actualizar robots/sitemap con dominio definitivo y rutas relevantes.

## Sprint 4 (Performance, accesibilidad y calidad)
- Migrar secciones que puedan ser Server Components/SSG (evitar `use client` innecesario y `dynamic` sin beneficio).
- Auditar accesibilidad (focus visible, aria-labels, contraste, skip links) y corregir findings.
- Revisar uso de imágenes (lazy loading, `sizes`, compresión) y animaciones (Framer Motion) para no degradar LCP en móvil.
- Añadir pruebas rápidas: lint, typecheck y al menos pruebas de render smoke para componentes críticos.
- Validar formulario de contacto end-to-end (mock/sandbox vs. endpoint real).

## Sprint 5 (Entrega y hardening)
- Revisión final en staging (dark/light, móvil/desktop) con checklist de regresión.
- Incorporar monitoreo básico (ej. Vercel Analytics o similar) y manejo de errores en `/api/contact`.
- Preparar plan de despliegue y rollback; definir variables y secretos en el host.
- Documentar decisiones técnicas y futuros “nice-to-have” (blog, CMS, i18n, analytics avanzados).
