# Portfolio de Alexis López Lira
Sitio de portafolio personal (Next.js 15 + React 19 + TypeScript) con Tailwind CSS v4, Framer Motion y sección de contacto integrada a Formspree (o servicio compatible).

## Tecnologías clave
- Next.js App Router, React 19, TypeScript, fuentes con `next/font`.
- Tailwind CSS v4 (tokens en `app/globals.css`), `tailwind-merge` y PostCSS.
- Framer Motion para animaciones, `next-themes` para modo claro/oscuro, React Icons.
- API route `/api/contact` → `lib/send-email.ts` (modo simulado si no hay endpoint).

## Scripts
- `npm run dev` – servidor de desarrollo en `http://localhost:3000`.
- `npm run lint` – ESLint (flat config) con reglas Next.
- `npm run typecheck` – TypeScript sin emitir salida.
- `npm run build` – build de producción.
- `npm start` – servidor de producción (requiere `npm run build` previo).

## Configuración de entorno
1) Crea `.env.local` a partir de `.env.example`.
2) Define `NEXT_PUBLIC_SITE_URL` con el dominio público (para metadatos/robots/sitemap).
3) Define `FORMSPREE_ENDPOINT` si quieres envío real en `/api/contact` (p. ej. `https://formspree.io/f/XXXXXX`).  
   - Si no se define, el endpoint funciona en modo **simulado**: registra en consola y responde `ok` (útil para desarrollo/demo).

## Notas de Tailwind v4
- No se usa `tailwind.config.*`: los tokens y utilidades viven en `app/globals.css` mediante `@theme`, `@layer base`, `@layer utilities`.
- PostCSS está configurado en `postcss.config.mjs` con `@tailwindcss/postcss`.

## Configuración de Next.js
- El archivo activo es `next.config.mjs` (incluye `reactStrictMode` y patrones de imágenes remotas de Unsplash).
- No existe `next.config.ts`; mantener un único archivo evita conflictos de carga.

## Contacto (/api/contact)
- Valida `nombre`, `email` y `mensaje` como strings.
- Llama a `sendEmail` con el payload; propaga error 500 si el proveedor responde fallo.
- En modo simulado (sin `FORMSPREE_ENDPOINT`) no se envía correo, pero la UI recibe `ok` y limpia el formulario.

## Ejecutar en local
```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## QA rápida
- `npm run lint`
- `npm run typecheck`

## Despliegue
- Compatible con Vercel u otro host de Node 18+.
- Define variables de entorno (al menos `FORMSPREE_ENDPOINT` si quieres envío real).
- Revisa `robots.ts` y `sitemap.ts` para actualizar el dominio final antes de publicar.
