# AGENTS.md

Guía para agentes de código que trabajan en este repositorio.

## Proyecto

Sitio web oficial del **Club Social y Deportivo de Máximo Paz** (ARG).
Link-hub institucional: home con accesos rápidos, actividades por disciplina y
contacto de cuotas.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 3 (config en `tailwind.config.ts`, tokens en `app/globals.css`)
- Fuentes vía `next/font/google`: Barlow Condensed (display) + Inter (texto)
- Deploy: Docker multi-stage (`Dockerfile`, `docker-compose.yml`) + GitHub Actions
  SSH a droplet (`.github/workflows/deploy.yml`)

## Comandos

```bash
pnpm install        # instalar dependencias (gestor: pnpm, ver packageManager)
pnpm dev            # dev server en http://localhost:3000 (puerto Docker: 3047)
pnpm build          # build de producción (output: standalone)
pnpm start          # servir build
pnpm lint           # eslint (eslint-config-next)
```

No hay suite de tests: verificar cambios con `pnpm build && pnpm lint`.

## Estructura

```
app/
  layout.tsx        # Header/Footer + fuentes + metadata global
  page.tsx          # Home: hero + accesos rápidos
  actividades/      # Grid de actividades (datos en ACTIVIDADES, page.tsx)
  cuotas/           # Contactos de tesorería (WhatsApp)
  globals.css       # Tailwind + tokens CSS
components/         # Header, Footer, ActivityCard
public/             # Escudo, íconos de actividades (SVG blancos), íconos sociales
DESIGN.md           # Sistema de diseño (leer antes de tocar estilos)
```

## Convenciones

- **Leer `DESIGN.md` antes de cualquier cambio visual.** Resumido: rojo `#D9232E`
  y blanco dominan; azul navy `#0B1F3F` solo como tinta/footer; nada de azules
  brillantes; titulares Barlow Condensed en mayúsculas.
- Idioma del sitio: español (Argentina), voseo. Código y commits en inglés o
  español indistinto, seguir el estilo de `git log`.
- Los íconos de actividades (`public/*.svg`) son **blancos**: van siempre sobre
  fondo rojo/navy.
- Teléfonos: formato local `3460-XXXXXX`; link a `https://wa.me/<sin prefijo>`.
- Enlaces externos: `target="_blank"` + `rel="noopener noreferrer"`.
- Datos de actividades: array tipado en `app/actividades/page.tsx`
  (`icono`, `actividad`, `profe`, `contacto`, `contactoMostra`, `instagram`).
- Imágenes remotas: usar `next/image` y declarar el dominio en `remotePatterns`
  de `next.config.ts`.
- No inventar contenido (historia, cifras, horarios) sin confirmación del club.

## Gotchas

- `pnpm` es obligatorio (hay `pnpm-lock.yaml`); no generar `package-lock.json`
  ni `yarn.lock`.
- El Dockerfile usa `corepack`; la versión de pnpm se fija en `packageManager`
  de `package.json`.
- `output: 'standalone'` en `next.config.ts`: el runner de Docker copia solo
  `.next/standalone`, `.next/static` y `public`.
- pnpm 10 ignora scripts de build de dependencias (sharp, unrs-resolver) por
  defecto; está bien para este proyecto.
