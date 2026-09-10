# DESIGN — Club Social y Deportivo de Máximo Paz

Sistema de diseño del sitio web oficial. Este archivo es la fuente de verdad para
decisiones visuales: colores, tipografía, componentes y tono de la marca.

## Personalidad

Moderno, deportivo e institucional. El club es rojo y blanco: la web debe sentirse
enérgica y clara, nunca recargada. Jerarquía fuerte, mucho aire, titulares condensados
en mayúsculas.

## Paleta

| Rol | Token | Hex | Uso |
|---|---|---|---|
| Primario | `brand.red` | `#D9232E` | CTAs, acentos, banda de actividades, hover |
| Primario oscuro | `brand.dark` | `#A81323` | Gradientes, estados activos, footer de tarjetas |
| Tinta | `brand.navy` | `#0B1F3F` | **Único azul, uso escaso**: títulos sobre blanco, footer |
| Fondo | `surface` | `#F6F6F7` | Fondo general de página |
| Superficie | blanco | `#FFFFFF` | Tarjetas, header |
| Neutros | `neutral-500/600/700` | — | Texto secundario |
| Útiles | verde WhatsApp `#25D366`, Instagram (gradiente o `#E1306C` solo en botón IG) | — | Botones de contacto |

Reglas:
- Rojo + blanco dominan. El azul navy aparece **solo** como tinta de títulos y en el
  footer; nunca como color de fondo grande.
- Nada de azules brillantes (evitar `blue-500`, `blue-700` de Tailwind).
- Gradientes permitidos: `from-brand.navy via-neutral-900 to-brand.dark` (hero) y
  `from-brand.dark to-brand.red` (bandas CTA).

## Tipografía

- **Display**: `Barlow Condensed` (pesos 600/700, mayúsculas, tracking amplio) →
  titulares, nombres de actividades, nav. Variable CSS: `--font-display`.
- **Texto**: `Inter` (400/500/600) → párrafos, labels, botones. Variable: `--font-sans`.
- **Manuscrita**: `Caveat` (600/700) → frases de marca tipo firma ("Social, siempre
  Social"). Solo acentos emocionales, en mayúsculas/minúsculas, levemente rotada
  (`-rotate-2`) y con subrayado marcador. Variable: `--font-hand`. Nunca para body.
- Escala: hero `text-5xl→7xl`, H2 de sección `text-3xl→4xl`, body `text-base/lg`.
- Números de teléfono: `font-medium tabular-nums`.

## Layout

- Ancho de contenido: `max-w-6xl mx-auto px-4 sm:px-6`.
- Header sticky blanco con blur (`bg-white/90 backdrop-blur`), borde inferior sutil.
- Footer navy `#0B1F3F` con texto blanco, redes y copyright.
- Radios: `rounded-2xl` en tarjetas, `rounded-full` en chips/píldoras,
  `rounded-lg` en botones.
- Sombras suaves (`shadow-sm` por defecto, `shadow-xl` en hover) + `hover:-translate-y-1`
  con `transition`.

## Componentes

### Botones
- **Primario**: `bg-brand-red text-white font-semibold rounded-lg px-5 py-3
  hover:bg-brand-dark`.
- **Secundario (sobre rojo)**: `border border-white/70 text-white hover:bg-white
  hover:text-brand-red`.
- **WhatsApp**: `bg-[#25D366] text-white` con ícono. **Instagram**: `bg-neutral-900
  text-white` con ícono (no usar el rosa de IG como fondo de card).

### Tarjeta de actividad
- Blanca, `rounded-2xl`, borde `border-neutral-200`, acento superior rojo
  (`border-t-4 border-t-brand-red`).
- Ícono de la actividad (SVG blanco) sobre círculo rojo `bg-brand-red` 56–64px.
- Título en display condensado navy; profe en `neutral-600`; botones WA/IG al pie.
- Hover: elevación + sombra.

### Secciones
- Kicker rojo pequeño en mayúsculas sobre el título de sección
  (ej. “· ACTIVIDADES ·”).
- Bandas CTA: gradiente rojo, texto blanco, botón blanco con texto rojo.

## Contenido y tono

- Español (Argentina), voseo. Nombres de secciones: Inicio, Actividades, Cuotas,
  “Quiero ser socio/a”.
- No inventar datos (fechas, historia, cifras). Solo contenido confirmado.

## Imágenes

- Escudo: `/escudo_social.svg` (SVG blanco + rojo). Sobre fondos oscuros usarlo
  directamente; sobre blanco, dentro de contenedor rojo o navy.
- Fotos: `next/image` con `remotePatterns` configurado en `next.config.ts`
  (CDN `tisolercdn.nyc3.cdn.digitaloceanspaces.com`).
- Íconos de actividades son SVG **blancos**: siempre sobre fondo rojo/navy.

## Antipatrones

- Fondo de página completo con foto (ensucia el contenido): la foto va solo en el hero.
- Más de dos colores en un mismo bloque.
- Botones rojos sobre fondo rojo sin separación.
- Texto largo centrado en home; para eso, secciones con ancho controlado.
