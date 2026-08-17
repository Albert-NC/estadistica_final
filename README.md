# Portal Web de la Escuela Profesional de Estadística - UNT

Esta es una aplicación web moderna, modular y escalable construida con **React 18**, **TypeScript**, **Vite 6** y **TailwindCSS**, diseñada para la **Escuela Profesional de Estadística** de la **Universidad Nacional de Trujillo (UNT)**.

## Características Principales

- 🚀 **Performance Optimizado:** Implementado con Vite, code-splitting (React.lazy) y animaciones aceleradas por hardware (Framer Motion) para evitar stuttering y asegurar un alto rendimiento en dispositivos móviles.
- 🎨 **Diseño Moderno y Premium:** UI/UX pulida con TailwindCSS, garantizando una estética institucional (UNT) pero adaptada a estándares web contemporáneos.
- 📱 **Totalmente Responsivo:** Adaptable a todos los dispositivos (móviles, tablets, escritorios).
- 🧩 **Modular:** Sistema de constantes donde toda la información (misión, visión, docentes, plan de estudios, etc.) se encuentra en la carpeta `src/constants/` para un fácil reemplazo.
- 🎓 **Sección de Admisión Integrada:** Módulo de modalidades de ingreso (Examen Ordinario, CEPUNT, etc.) adaptadas a la Universidad Nacional de Trujillo.
- ⚡ **SEO Amigable:** Rutas pre-configuradas y estructura semántica.

## Estructura de Datos (Personalización)

Toda la información "dura" de la escuela ha sido extraída del código principal y agrupada en la carpeta `src/constants/`. Para personalizar esta plantilla o actualizar información, **se modifican los siguientes archivos**:

- `academico.ts`: Plan de estudios, perfil del egresado, trámites y titulación.
- `autoridades.ts`: Información del Director(a) de escuela y directores de departamento.
- `contacto.ts`: Teléfonos, correos, enlaces a redes sociales (mapa por defecto apunta a la sede UNT Trujillo).
- `docentes.ts`: Lista de la plana docente.
- `identidad.ts`: Misión, visión, reseña histórica y valores.
- `investigacion.ts`: Líneas de investigación, proyectos y convenios institucionales.
- `noticias.ts`: Eventos y noticias destacadas para el feed principal.

## Requisitos Previos

- **Node.js** (v18.0.0 o superior recomendado, v20+)
- **npm**, **yarn**, **pnpm** o **bun**

## Instalación y Ejecución Local

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Albert-NC/estadistica_final.git
   cd estadistica_final
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```sh
   npm run dev
   ```

4. Abre tu navegador y navega a `http://localhost:5173`.

## Scripts Disponibles

En el proyecto puedes ejecutar los siguientes comandos:

- `npm run dev`: Inicia el servidor de desarrollo local con HMR y soporte para red (`vite --host`).
- `npm run build`: Valida tipos de TypeScript (`tsc -b`) y genera los archivos optimizados para producción en la carpeta `dist/`.
- `npm run preview`: Permite previsualizar localmente la build generada para producción.
- `npm run lint`: Ejecuta el linter (ESLint) para verificar la calidad del código.
- `npm run lint-fix`: Corrije automáticamente los errores y advertencias detectados por ESLint.
- `npm run format`: Formatea todo el código fuente del proyecto utilizando Prettier.

## Despliegue en Producción

Para construir el proyecto para producción:

```sh
npm run build
```

Este comando generará una carpeta `dist/` con los archivos optimizados listos para subir a cualquier servicio de hosting (ej. Vercel, Netlify, o un servidor propio de la UNT). Si utilizas Vercel, el archivo `vercel.json` incluido ya maneja las rutas de React Router.

## Optimizaciones de Rendimiento Aplicadas

Se han realizado optimizaciones avanzadas de rendimiento para asegurar una navegación fluida, reduciendo drásticamente los cuellos de botella de **Paint** (repintado) y del hilo principal:

1. 🎬 **Fachada de Video (YouTube Facade):** Reemplazo de la carga directa del `<iframe>` de YouTube por el componente [`YoutubeVideo.tsx`](file:///home/cazil/proyectos/CERTIFICACIONES/plantillaEscuelas/src/components/ui/YoutubeVideo.tsx). Muestra una miniatura de alta resolución y solo monta el reproductor dinámicamente en respuesta a un clic del usuario. Esto ahorra ~1.5MB de JS de terceros y evita que corran subprocesos innecesarios en la carga inicial.
2. ⚡ **Sombras Aceleradas por GPU (Opacity Shadow Hack):** Las tarjetas en [`Inicio.tsx`](file:///home/cazil/proyectos/CERTIFICACIONES/plantillaEscuelas/src/pages/Inicio.tsx) y [`Noticias.tsx`](file:///home/cazil/proyectos/CERTIFICACIONES/plantillaEscuelas/src/pages/Noticias.tsx) que se animan con Framer Motion en escala o traslación ya no transicionan el CSS `box-shadow` directamente (lo cual forzaba repintados costosos). En su lugar, el componente [`Card.tsx`](file:///home/cazil/proyectos/CERTIFICACIONES/plantillaEscuelas/src/components/ui/Card.tsx) y los accesos rápidos usan una capa absoluta con la sombra pre-calculada que transiciona su `opacity` (GPU-friendly) al hacer hover.
3. 🖼️ **Control Inteligente de Capas GPU en Carrusel:** El carrusel de imágenes del Hero principal ahora activa `will-change: opacity` únicamente en la imagen activa y la previa que está transicionando. Para las imágenes ocultas (`opacity: 0`), se restablece a `auto`, liberando memoria de texturas en la GPU y evitando sobrecarga del compositor del navegador.

## Especificaciones Tecnológicas

- **Lenguaje:** [TypeScript 5.7+](https://www.typescriptlang.org/)
- **Librería UI:** [React 18.3](https://react.dev/)
- **Tooling & Bundler:** [Vite 6.2](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS 3.4](https://tailwindcss.com/) + [PostCSS 8](https://postcss.org/) & [Autoprefixer](https://github.com/postcss/autoprefixer)
- **Animaciones:** [Framer Motion 11.11](https://www.framer.com/motion/)
- **Enrutamiento:** [React Router DOM v7.9](https://reactrouter.com/)
- **Iconos:** [Lucide React 0.468](https://lucide.dev/)
- **Utilidades UI:** [Clsx 2.1](https://github.com/lukeed/clsx)
- **Calidad de Código:** [ESLint 9.37](https://eslint.org/) + [Prettier 3.6](https://prettier.io/)

