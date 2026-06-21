# Diagnóstico de rendimiento (móvil + Firefox)

## 1) Animaciones y transiciones: qué se usa y qué se anima

- **Librería principal:** `framer-motion` (uso extendido en páginas y componentes).
  - Ejemplos: `src/pages/Inicio.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/AnnouncementBanner.tsx`, `src/components/layout/PageHero.tsx`, `src/components/layout/PageWrapper.tsx`.
- **Transiciones Tailwind/CSS:** también hay muchas clases utilitarias (`transition-*`, `duration-*`, `hover:*`).
- **Librerías inactivas:** `animejs` figuraba en el `package.json` pero no era utilizado en ninguna parte del código fuente.

### Propiedades animadas detectadas (más frecuentes)

- **Compositor-friendly (mejor):**
  - `opacity`
  - `transform` vía `x`, `y`, `scale`, `rotate` (Framer Motion)
  - `transition-transform` y `transition-opacity`
- **Potencialmente costosas (paint/layout):**
  - `height: auto` en la animación de apertura de paneles expansibles (`Accordion.tsx`). Esto causa "layout thrashing".
  - Abuso extremo de `transition-all` (más de 22 instancias detectadas en CTAs, tarjetas, Navbar, Footer). Esto anima propiedades innecesarias (como el padding, margin, dimensiones) en cada hover.
  - Filtros CSS costosos evaluados en scroll o interacciones, como `drop-shadow-md` en logos fijos y `brightness-200` en el Footer.
  - `mix-blend-multiply` y `mix-blend-luminosity` (5 instancias detectadas en `Inicio.tsx`). Estas propiedades fuerzan cálculos especiales de composición por píxel entre capas superpuestas, lo que causa un estrés significativo de renderizado en Firefox y móviles, percibido como lag o stuttering.

## 2) Tailwind: aceleración por hardware

- Faltaban directivas de composición explícita (`transform-gpu` o `will-change`) en bloques críticos, lo cual es vital para enviar los recálculos directamente al compositor de la tarjeta gráfica y evitar sobrecargar el hilo principal.

## 3) Videos y multimedia

- **`<video>`:** no se encontraron etiquetas `<video>` en `src/`.
- **`<iframe>` encontrados:**
  1. YouTube en `src/pages/Inicio.tsx`
  2. Google Maps en `src/components/contacto/MapaUbicacion.tsx`

### Atributos observados

- **YouTube (`Inicio.tsx`)**
  - Inicialmente sin atributos de `loading="lazy"`.
- **Google Maps (`MapaUbicacion.tsx`)**
  - Tenía `loading="lazy"`, `allowFullScreen`, `referrerPolicy`.

## 4) Manejo de imágenes (`<img>`)

- Hay varias imágenes con `loading="lazy"` en tarjetas/listados.
- Algunas imágenes principales sufrían de falta de decodificación asíncrona (`decoding="async"`) y priorización de carga de LCP (`fetchPriority`).
- Logos y recursos pesados cargados inicialmente bloqueando visualizaciones rápidas (ej. logo UNT sin dimensiones fijas que causaba saltos de contenido - CLS).

## 5) Carga del paquete (Bundle) y Vite

- **Falta de Code Splitting:** El archivo `src/router/index.tsx` importaba estáticamente más de 20 páginas de forma simultánea. Esto provocaba que el usuario tuviera que descargar casi la totalidad de la aplicación solo para ver la pantalla de inicio, causando retrasos significativos en la primera pintada.
- **Configuración de Vite incompleta:** No había separación de dependencias de terceros (como `react` o `framer-motion`) en "chunks" específicos (vendor chunks) ni división de CSS (`cssCodeSplit`).

## 6) Conflictos de DOM

- El patrón SVG de puntos `id="dots"` se reutilizaba estáticamente tanto en el Hero de `Inicio.tsx` como en el de `PageHero.tsx`, provocando colisiones de IDs y comportamiento impredecible de pintado en Firefox.

## 7) Conclusión breve (bueno vs. mejorable)

### Bueno
- Base de animaciones centrada en `transform/opacity` en la mayor parte de `framer-motion`.
- Uso de `loading="lazy"` en muchas imágenes e iframe de mapa.

### Mejorable (ya detectado como causantes directos del lag)
- Propiedades de mezcla (`mix-blend-mode`) en imágenes con hover.
- Abuso de `transition-all`.
- Animaciones de layout remanentes (`height: auto`).
- Arquitectura monolítica del bundle que penalizaba el tiempo de carga inicial.
- Filtros excesivos en elementos estáticos pegajosos (sticky).