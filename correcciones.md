# Correcciones aplicadas

## 1) Hero principal y páginas (`src/pages/Inicio.tsx`, `src/components/layout/PageWrapper.tsx`)

- Se reemplazó el crossfade con `backgroundImage` en `<div>` por capas `<img>` absolutas.
- Se añadieron optimizaciones en imágenes:
  - `decoding="async"`
  - `fetchPriority` (alta para la primera imagen, baja para las demás)
  - `will-change: opacity` en el crossfade
- Se **eliminaron las costosas combinaciones** de `mix-blend-multiply` y `mix-blend-luminosity` (5 instancias en total en los bloques de ambientes), reemplazándolas por overlays CSS directos mediante colores sólidos (`bg-primary/50` y opacidad base pura).
- Se aplicó aceleración de GPU explícita (`transform-gpu`) a las tarjetas con animación al pasar el cursor.
- Se simplificó la transición del envoltorio base de la página `PageWrapper.tsx`, eliminando la animación vertical de salida `y` (translación), lo que redujo drásticamente el costo de reflow en todo el árbol DOM al cambiar de rutas.

## 2) Componentes iterativos y transiciones (Eliminación de `transition-all`)

Se detectó y reemplazó un abuso sistémico de `transition-all` en 22+ instancias a lo largo del proyecto, lo cual provocaba que el navegador evaluara e intentara animar todas las propiedades computadas en cada interacción.
- Se cambiaron a propiedades específicas:
  - En tarjetas interactivas (ej. `ValorItem`, `HitoTimeline`, `ProyectoCard`, `Lineas`, `Titulacion`) ahora se usa `transition-[border-color,box-shadow]` o `transition-[color,border-color,box-shadow]`.
  - En botones y links "Leer más" (`Inicio`, `Noticias`) ahora se usa `transition-[gap]`.
  - En formularios (`FormContacto`) ahora se usa `transition-[border-color,box-shadow]`.
  - En links del footer ahora se usa `transition-[color,transform]`.
  - En iconos flotantes (`FloatingSocials`, `RedesSociales`) y organigramas ahora se usa `transition-[transform,box-shadow]`.

## 3) Iframe de YouTube (`src/pages/Inicio.tsx`)

- Se agregó carga diferida y política de referencia más estricta:
  - `loading="lazy"`
  - `referrerPolicy="strict-origin-when-cross-origin"`

## 4) Elementos Fijos/Pegajosos (Navbar y Footer)

- **Navbar (`src/components/layout/Navbar.tsx`):**
  - Se optimizó el listener de scroll para reducir renders (`requestAnimationFrame`, `{ passive: true }`).
  - Se eliminó el costoso `drop-shadow-md` sobre los logos en la cabecera sticky.
- **Footer (`src/components/layout/Footer.tsx`):**
  - Se cambió el uso del filtro `brightness-200 drop-shadow` por un simple `invert` en el logo.

## 5) Animaciones de Layout Corregidas (`Accordion.tsx` y `AnnouncementBanner.tsx`)

- Se erradicaron completamente las animaciones basadas en `height: 'auto'`.
- En `AnnouncementBanner.tsx` y `Accordion.tsx` (para preguntas frecuentes y apartados expandibles) se cambió a enfoques guiados por la GPU:
  - Transformaciones basadas en escala (`scaleY`) y variaciones de opacidad (`opacity`).
  - Declaración del eje de origen `origin-top`.
  - Propiedades explícitas del compositor con `will-change: transform, opacity`.

## 6) Carga Estructural y Code-Splitting Masivo (`src/router/index.tsx`)

- En lugar de forzar al usuario a descargar toda la web, se modificó el enrutador para implementar `React.lazy()` en 20+ componentes y rutas secundarias.
- Únicamente la ruta raíz (`Inicio.tsx`) se carga de forma inmediata ("eager loading"). Las demás rutas están envueltas en un límite de `Suspense` y traen su "chunk" respectivo bajo demanda.

## 7) Optimizaciones de Empaquetado (`vite.config.ts` y `package.json`)

- Se configuro Vite (`rollupOptions`) para la separación eficiente del bundle, agrupando el código externo en "vendor chunks":
  - `vendor-react` (React y Router).
  - `vendor-motion` (Framer Motion).
  - `vendor-icons` (Lucide React).
- Se habilitó la separación de código CSS (`cssCodeSplit`).
- Se desinstaló la dependencia `animejs` que ocupaba espacio en el "lockfile" y package.json sin brindar utilidad real al carecer de uso.

## 8) Conflictos en el DOM e index.html (`PageHero.tsx`)

- En `PageHero.tsx` se renombró la id del patrón SVG de fondo de `id="dots"` a `id="page-hero-dots"` previniendo así un cruce de trazado y repintado perjudicial en navegadores Firefox al convivir en memoria con el mismo selector del hero principal.
- En el `index.html` se aseguró la carga de fuentes no bloqueante de Google Fonts (`&display=swap`) y los correspondientes `preload` iniciales.