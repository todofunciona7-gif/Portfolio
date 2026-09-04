# Handoff: Landing Page — Portafolio Community Manager (Agostina Bellido)

## Overview
Landing page de una página para ofrecer servicios de community management y gestión de redes sociales. Objetivo: presentar a la profesional, mostrar prueba social (cuentas gestionadas), métricas, servicios, proceso de trabajo, planes y contacto.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML** — muestran el look final y el comportamiento esperado, no son código de producción para copiar tal cual. La tarea es **recrear este diseño en el entorno del proyecto real** (React/Next, Vue, HTML+CSS estático, el stack que se decida en Vercel) usando sus propios patrones — o, si el proyecto arranca de cero, elegir el framework más adecuado (recomendado: Next.js, por el deploy directo en Vercel y buen SEO para landing).

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, espaciados y estructura de sección son finales. Recrear pixel a pixel usando los valores exactos listados abajo.

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| `--color-black` | `#171410` | Fondo secciones oscuras, texto principal |
| `--color-cream` | `#F7F3EA` | Fondo base del sitio |
| `--color-cream-alt` | `#EEE6D2` | Fondo de secciones alternas (Casos, FAQ) |
| `--color-yellow` | `#F4C430` | Color primario de marca — botones CTA, acentos, números destacados |
| `--color-yellow-gold` | `#C9971A` | Acento decorativo sobre fondo claro (números de servicio/proceso) |
| `--color-pastel-peach` | `#F3C6A5` | Detalle pastel — badge "Más elegido" en plan destacado (único uso) |
| `--color-text-muted` | `#55503F` | Texto secundario sobre fondo claro |
| `--color-text-muted-dark` | `#B8AC8C` | Texto secundario sobre fondo negro |
| `--color-border` | `#E2D9BE` | Bordes/divisores sobre fondo claro |
| `--color-footer-muted` | `#6B6555` | Texto de footer |
| Card oscura de plan | `#211D14` | Fondo de los planes no destacados |

Paleta: negro + amarillo como base, con un único detalle pastel (durazno) reservado para destacar el plan recomendado — no usar el pastel en otro lugar.

### Tipografía
- Display / títulos: **Libre Caslon Text** (serif, weight 400, algunos usos en italic) — Google Fonts.
- Cuerpo / UI: **Sora** (sans-serif, weights 400/500/600/700) — Google Fonts.
- Escala: H1 hero `clamp(40px, 5.6vw, 68px)`, H2 secciones `40px` (36px en "Sobre mí"), stats destacadas `56px`, número decorativo de servicio/proceso `34px`/`15px`, body `14–18px`, labels uppercase `13px` bold con `letter-spacing: 0.12em`.

### Espaciado / layout
- Contenedor máximo: `1240px`, padding lateral `48px`.
- Padding vertical estándar de sección: `96–120px` arriba/abajo (`112px` top típico).
- Grillas: hero `1.15fr / 0.85fr`; stats y precios `3 columnas`; servicios `3 columnas` (separador de 1px, color `--color-border`); casos `4 columnas`; proceso `4 columnas`; sobre mí `0.8fr / 1.2fr`.
- Radios: `2px` en botones y tarjetas, `4px` en imágenes.
- Breakpoint mobile: `860px` — todas las grillas colapsan a 1 columna (casos a 2 columnas).

## Screens / Views
Una sola vista, scroll vertical, con las siguientes secciones en orden:

1. **Header** — logo/nombre "Agostina Bellido" (serif) a la izquierda, nav (Servicios, Casos, Precios, Preguntas) al centro (oculto en mobile), botón CTA "Escribime" (fondo amarillo, texto negro) a la derecha.

2. **Hero** — label uppercase "Community Manager & gestión de redes", H1 en 3 líneas con la última palabra clave resaltada con fondo amarillo (highlight tipo marcador), párrafo de bajada, dos botones (primario negro con texto amarillo "Coordinemos una llamada", secundario outline "Ver casos"), y a la derecha una foto (placeholder, imagen personal pendiente).

3. **Stats** (fondo negro) — 3 números grandes en amarillo: "8 cuentas gestionadas", "+3.000 seguidores generados", "4 años de experiencia".

4. **Servicios** — grid de 5 tarjetas con separadores finos: Gestión de redes sociales, Creación de contenido, Diseño gráfico para posts, Estrategia y calendario editorial, Fotografía/Video. Cada tarjeta: número decorativo grande (serif, dorado), título, descripción.

5. **Casos** (fondo crema alterno) — grid de 8 placeholders de imagen (captura de cliente) + nombre "Cliente 0X" + rubro (placeholder, a completar con datos reales).

6. **Cómo trabajamos** — 4 pasos en fila con borde superior: Diagnóstico, Estrategia, Ejecución, Reporte.

7. **Planes** (fondo negro) — 3 tarjetas de precio sin montos fijos (CTA "Consultar valor"): "Esencial" e "Integral" en tarjetas oscuras con acento amarillo; "Crecimiento" (plan del medio) en fondo amarillo sólido con badge pastel "Más elegido" — es el único uso del color pastel en toda la página.

8. **Sobre mí** — foto placeholder + 2 párrafos de bio en primera persona.

9. **FAQ** (fondo crema alterno) — 5 preguntas en acordeón nativo (`<details>/<summary>`).

10. **Contacto** — título + bajada + 3 botones: WhatsApp (relleno amarillo), LinkedIn (outline), Email (outline, `mailto:`).

11. **Footer** — nombre + copyright.

## Interactions & Behavior
- Nav y botones CTA con `href="#id"` — scroll nativo a ancla (sin JS de scroll suave necesario, pero se puede agregar `scroll-behavior: smooth`).
- FAQ: acordeón nativo con `<details>`, sin animación (se puede mejorar con transición de altura si se desea).
- Sin estados de carga ni validación de formulario — no hay formulario de contacto, son links directos (wa.me, mailto, linkedin.com).
- Responsive: se colapsan las grillas a 1–2 columnas por debajo de 860px, y el nav se oculta (recomendado: agregar un menú hamburguesa al recrear en producción, no estaba en el prototipo).

## Assets
- Foto de perfil (hero) y foto "Sobre mí": placeholders, pendientes de foto real.
- 8 capturas de cuentas gestionadas (sección Casos): placeholders, pendientes de las capturas reales de cada cliente/rubro.
- Sin iconografía ni ilustraciones — el diseño es tipográfico, sin SVGs decorativos.
- Fuentes vía Google Fonts: `Libre Caslon Text` y `Sora`.

## Content / Copy (texto exacto usado)
Ver el archivo `Landing Page.html` incluido — todo el copy en español está en el HTML, listo para copiar tal cual (títulos, descripciones de servicios, pasos, features de cada plan, preguntas y respuestas de FAQ).

Pendiente de completar antes de producción:
- Rubro real de cada uno de los 8 clientes en la sección Casos.
- Número de WhatsApp real (actualmente placeholder `5490000000000`).
- Email real de contacto (actualmente placeholder `hola@agostinabellido.com`).
- URL real de LinkedIn (actualmente `https://linkedin.com`).
- Definir si los "Planes" van a mostrar precios concretos o se mantienen sin monto ("Consultar valor").

## Files
- `Landing Page.dc.html` — archivo fuente del diseño completo (referencia visual y de copy). Abrilo en el navegador para verlo; el bloque `<script data-dc-script>` al final tiene la data de servicios/casos/planes/FAQ en JS.
- `image-slot.js` — script auxiliar usado por los placeholders de imagen del prototipo (no es necesario en producción; en el código final esas cajas se reemplazan por `<img>` reales).
