# Agostina Bellido — Portfolio (Community Manager)

Landing page de una sola página. Stack: React 19 + Vite + Tailwind CSS + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev
```

## Pendiente antes de producción final

- Reemplazar los placeholders de foto (hero, "Sobre mí" y las 8 capturas de "Casos") por imágenes reales. Los componentes están en `src/components/ui/ImagePlaceholder.jsx` — se reemplazan por `<img>` cuando haya fotos.
- Completar en `src/data/content.js`:
  - `cases`: rubro real de cada uno de los 8 clientes.
  - `contact.whatsapp`: número real (hoy `5490000000000`).
  - `contact.email`: email real (hoy `hola@agostinabellido.com`).
  - `contact.linkedin`: URL real de LinkedIn.
- Definir si los planes muestran precios concretos o se mantienen como "Consultar valor".

## Diseño

Basado en el handoff de diseño en `design_handoff_landing_page/` (paleta, tipografía y copy) combinado con los efectos de interacción (scroll reveal, cursor personalizado, botones magnéticos, contador animado) adaptados de una plantilla de referencia.
