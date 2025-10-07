# Guía básica: ¿Cómo está estructurado este proyecto (React + Vite)?

Esta guía está pensada para alguien que empieza desde cero. Aquí te explico qué es cada archivo/carpeta importante y cómo ejecutar el proyecto.


## 1) ¿Qué son React y Vite?
- React: una librería de JavaScript para construir interfaces de usuario con componentes (bloques reutilizables de UI).
- Vite: una herramienta que arranca el proyecto muy rápido y te muestra los cambios al instante mientras programas.

Con ambos, puedes crear páginas web modernas de manera simple y veloz.


## 2) Estructura de carpetas y archivos principales
(La tuya puede tener más archivos, pero estos son los clave)

- index.html
- src/
  - main.tsx
  - App.tsx
  - App.css
  - index.css (si existe)
  - assets/ (imágenes, íconos, etc.)
- public/ (archivos estáticos que se copian tal cual al build)
- package.json (scripts y dependencias del proyecto)
- vite.config.ts (configuración de Vite)
- tsconfig*.json (configuración de TypeScript)

A continuación te explico los más importantes para empezar:

### index.html
- Es el archivo HTML base que carga el navegador.
- Dentro tiene un elemento con id="root". Ahí es donde React "pinta" tu aplicación.
- Carga el script de `src/main.tsx`, que arranca React.

### src/main.tsx
- Es el punto de entrada de la app en React.
- Busca el elemento `#root` del `index.html` y le dice a React que renderice el componente principal `App` ahí.

### src/App.tsx
- Es el componente principal de tu página.
- Aquí es donde escribes el contenido visible (títulos, párrafos, botones, etc.).
- En esta plantilla he dejado un ejemplo de página con:
  - Encabezado (header) con título y navegación
  - Contenido principal (main) con secciones
  - Un contador para mostrar interactividad (estado)
  - Pie de página (footer)

### src/App.css e src/index.css
- Aquí hay estilos (CSS) que definen cómo se ve la página (colores, tamaños, espaciados, etc.).
- Puedes modificar estos archivos para cambiar la apariencia.

### assets/
- Carpeta para imágenes, íconos u otros recursos.

### public/
- Archivos estáticos que se copian tal cual cuando haces el build (por ejemplo, un favicon personalizado).

### package.json
- Define scripts y dependencias.
- Scripts típicos:
  - `npm run dev`: inicia el servidor de desarrollo (para programar).
  - `npm run build`: prepara tu app para producción (optimizada y lista para publicar).
  - `npm run preview`: sirve localmente el resultado del build para revisarlo.

### vite.config.ts
- Configuración de Vite (generalmente no necesitas tocarlo para empezar).


## 3) ¿Cómo ejecuto el proyecto?
1. Instala dependencias (solo la primera vez):
   - `npm install`
2. Arranca el servidor de desarrollo:
   - `npm run dev`
3. Abre en tu navegador la URL que aparezca en la terminal (por lo general http://localhost:5173).

Cada vez que guardes cambios en los archivos, verás la página actualizarse al instante.


## 4) ¿Dónde cambio el contenido de la página?
- Abre `src/App.tsx`. Ahí está la estructura de la página de ejemplo (header, main, footer) y un botón contador.
- Cambia textos dentro de etiquetas como `<h1>`, `<p>`, etc.
- Si quieres agregar estilos, abre `src/App.css` y modifica/clona las clases.

Ejemplo: cambiar el título principal
```tsx
// En src/App.tsx
<h1>Mi primera página con React + Vite</h1>
// Cámbialo por, por ejemplo:
<h1>Bienvenido a mi sitio</h1>
```


## 5) ¿Qué es un "componente" en React?
- Es un bloque reutilizable de UI.
- `App` es un componente.
- Puedes crear más componentes (archivos `.tsx`) y usarlos dentro de `App` como si fueran etiquetas HTML.

Ejemplo (opcional):
```tsx
function Saludo() {
  return <p>¡Hola! Soy un componente.</p>;
}

export default function App() {
  return (
    <div>
      <h1>Mi sitio</h1>
      <Saludo />
    </div>
  );
}
```


## 6) Glosario rápido
- JSX/TSX: sintaxis que permite escribir HTML dentro de JavaScript/TypeScript para describir la UI.
- Estado (state): datos que cambian con el tiempo (ej. el número del contador).
- Propiedades (props): datos que pasas a los componentes para que se comporten de cierta manera.
- Renderizar: pintar en pantalla.


## 7) Siguientes pasos sugeridos
- Cambia textos e imágenes a lo que necesites.
- Crea un nuevo componente (por ejemplo, un componente `Tarjeta`) y úsalo varias veces en `App`.
- Ajusta estilos en `App.css` para personalizar tu diseño.

¡Listo! Con esto deberías entender lo básico de la estructura y poder empezar a modificar tu página.