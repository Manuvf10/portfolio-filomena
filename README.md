# Filomena — Creative Studio Website

Sitio bilingüe (ES/EN) para Filomena, estudio creativo 360 con dirección editorial.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## 1) Instalar dependencias

```bash
npm install
```

## 2) Ejecutar en local

```bash
npm run dev
```

Abrir `http://localhost:3000`.

## 3) Variables de entorno

```bash
cp .env.example .env.local
```

Configurar:

```env
FORMSPREE_ENDPOINT=https://formspree.io/f/tu_form_id
```

Si no se configura, la API de contacto responde con éxito simulado para desarrollo.

## 4) Estructura del proyecto

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
    globals.css
    layout.tsx
    page.tsx
  components/
    Header.tsx
    Footer.tsx
    HeroSection.tsx
    ServiceList.tsx
    ProjectsGrid.tsx
    ContactForm.tsx
    ...
  content/
    services.ts
    projects.ts
    navigation.ts
    settings.ts
  i18n/
    config.ts
    dictionaries.ts
  lib/
  types/
public/
  images/
  videos/
```

## 5) Editar contenido

### Textos y traducciones

- `src/i18n/dictionaries.ts`

### Servicios

- Estructura y orden: `src/content/services.ts`
- Copys: `src/i18n/dictionaries.ts` → `services.list`

### Proyectos

- Items, categorías y tipo de media: `src/content/projects.ts`
- Copys: `src/i18n/dictionaries.ts` → `projects.list`

### Navegación y datos globales

- Navegación: `src/content/navigation.ts`
- Email/redes/ubicación: `src/content/settings.ts`

## 6) Sustituir imágenes

Carpetas:

- `public/images/projects`
- `public/images/branding`
- `public/images/ui`
- `public/images/placeholders`
- `public/videos`

Sustituye archivos y/o actualiza rutas en `src/content/projects.ts`.

## 7) Formulario de contacto

- Frontend: `src/components/ContactForm.tsx`
- Endpoint: `src/app/api/contact/route.ts`
- Validación: `zod`
- Reenvío: Formspree (`FORMSPREE_ENDPOINT`)

## 8) SEO

- Metadata global: `src/app/layout.tsx`
- Metadata por página: `generateMetadata` en cada ruta localizada
- Helper: `src/lib/metadata.ts`

## 9) Despliegue en Vercel

1. Subir repositorio a GitHub.
2. Importar en Vercel.
3. Configurar `FORMSPREE_ENDPOINT` en Environment Variables.
4. Deploy.

## 10) Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```
