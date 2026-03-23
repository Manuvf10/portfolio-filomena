# Filomena — Web de estudio creativo (Next.js + TypeScript)

Repositorio listo para producción para la web de **Filomena**, una agencia creativa con enfoque editorial/fashion.

## 1) Instalar dependencias

```bash
npm install
```

## 2) Ejecutar en local

```bash
npm run dev
```

Abre `http://localhost:3000`.

## 3) Configurar variables de entorno

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env.local
```

2. Añade tu endpoint de Formspree:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/tu_id
```

> Si no configuras esta variable, el formulario responderá con éxito simulado para facilitar desarrollo local.

## 4) Subir a GitHub

```bash
git init
git add .
git commit -m "Initial Filomena website"
git branch -M main
git remote add origin <TU_REPO_GITHUB>
git push -u origin main
```

## 5) Desplegar en Vercel

1. Importa el repositorio en Vercel.
2. Framework detectado: **Next.js**.
3. Añade la variable `FORMSPREE_ENDPOINT` en Project Settings → Environment Variables.
4. Deploy.

## 6) Cómo cambiar textos

- Traducciones y copys: `src/i18n/dictionaries.ts`
- Navegación: `src/content/navigation.ts`
- Ajustes globales (email, redes, nombre): `src/content/settings.ts`

## 7) Cómo añadir proyectos nuevos

1. Añade el item en `src/content/projects.ts`.
2. Añade sus textos en ambos idiomas en `src/i18n/dictionaries.ts` (`projects.list`).
3. Añade su categoría traducida en `projects.categories`.
4. Guarda la imagen en `public/images/projects` o video en `public/videos`.

## 8) Cómo conectar el formulario

Este proyecto usa una API route (`src/app/api/contact/route.ts`) que reenvía a Formspree.

Flujo:
- `ContactForm` hace `POST` a `/api/contact`.
- La API valida datos con `zod`.
- Si `FORMSPREE_ENDPOINT` está configurado, reenvía a Formspree.

## 9) Cómo cambiar imágenes

Carpetas preparadas:
- `public/images/projects`
- `public/images/branding`
- `public/images/ui`
- `public/images/placeholders`

Sustituye archivos manteniendo nombres, o actualiza rutas en `src/content/projects.ts`.

## 10) Cómo cambiar colores y estilos

- Tokens de color y fuentes: `tailwind.config.ts`
- Estilos globales y utilidades: `src/app/globals.css`
- Componentes visuales: `src/components/*`

## Estructura general

```txt
src/
  app/
    [locale]/
      about/
      club/
      contact/
      projects/
      services/
      layout.tsx
      page.tsx
    api/contact/route.ts
    layout.tsx
    page.tsx
  components/
  content/
  i18n/
  lib/
  types/
public/
  images/
  videos/
```

## Idiomas e i18n

- Idiomas activos: `es`, `en`.
- Middleware redirige rutas sin locale a `/{locale}`.
- Selector de idioma en header (`LanguageSwitcher`).

## SEO

- Metadata global en `src/app/layout.tsx`.
- Metadata por página con `generateMetadata` + helper `createMetadata`.
- Open Graph base configurado.

## Scripts útiles

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```
