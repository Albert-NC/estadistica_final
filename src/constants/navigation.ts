/**
 * Fuente ÚNICA de navegación del sitio.
 * Alimenta el Navbar (menú principal + desplegables AGRUPADOS por subcategoría),
 * la barra de pestañas de cada sección (SectionTabs) y los Breadcrumbs.
 *
 * Modelo de datos:
 *   sección  = { name, path, groups: [grupo] }
 *   grupo    = { label, items: [item] }
 *   item     = { name, path, external?, navAs? }
 *
 * Patrón "navbar granular → página agrupada":
 *   Un `item` representa UNA página (y por tanto UNA pestaña). Si además trae
 *   `navAs`, el Navbar lo MUESTRA desglosado en varias etiquetas finas (cada una
 *   con su #ancla), pero todas llevan a la misma página. Así el menú es granular
 *   (Misión, Visión) mientras las pestañas/rutas se mantienen agrupadas (Misión y
 *   Visión = 1 pestaña). Ej.: clic en "Visión" → /nosotros/mision-vision#vision.
 *
 * "Admisión" NO está aquí: vive en el panel lateral (FloatingAdmissions), por eso
 * se exporta aparte como ADMISION_GROUPS.
 */
/** Una entrada navegable (página o, dentro de `navAs`, una etiqueta con ancla). */
export interface NavLeaf {
  name: string;
  path: string;
  external?: boolean;
  navAs?: NavLeaf[];
}

/** Subcategoría de un desplegable: una etiqueta con sus items. */
export interface NavGroup {
  label: string;
  items: NavLeaf[];
}

/** Sección del menú principal; puede tener grupos (desplegable) o no (enlace simple). */
export interface NavSection {
  name: string;
  path: string;
  groups?: NavGroup[];
}

export const NAV_LINKS: NavSection[] = [
  { name: 'Inicio', path: '/' },
  {
    name: 'Nosotros',
    path: '/nosotros',
    groups: [
      {
        label: 'Identidad',
        items: [
          { name: 'Historia', path: '/nosotros/historia' },
          {
            name: 'Misión y Visión',
            path: '/nosotros/mision-vision',
            navAs: [
              { name: 'Misión', path: '/nosotros/mision-vision#mision' },
              { name: 'Visión', path: '/nosotros/mision-vision#vision' },
            ],
          },
        ],
      },
      {
        label: 'Formación',
        items: [
          {
            name: 'Objetivos',
            path: '/nosotros/objetivos',
            navAs: [
              { name: 'Objetivos educativos', path: '/nosotros/objetivos#educativos' },
              { name: 'Objetivos académicos', path: '/nosotros/objetivos#academicos' },
            ],
          },
          {
            name: 'Perfiles',
            path: '/nosotros/perfiles',
            navAs: [
              { name: 'Perfil de ingreso', path: '/nosotros/perfiles#ingreso' },
              { name: 'Perfil de egreso', path: '/nosotros/perfiles#egreso' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Organización',
    path: '/organizacion',
    groups: [
      {
        label: 'Autoridades',
        items: [
          {
            name: 'Dirección',
            path: '/organizacion/direccion',
            navAs: [
              { name: 'Director de escuela', path: '/organizacion/direccion#escuela' },
              { name: 'Director de departamento', path: '/organizacion/direccion#departamento' },
            ],
          },
        ],
      },
      {
        label: 'Personal',
        items: [
          { name: 'Docentes', path: '/organizacion/docentes' },
          { name: 'Administrativos', path: '/organizacion/administrativos' },
        ],
      },
      {
        label: 'Comités',
        items: [
          {
            name: 'Comités',
            path: '/organizacion/comites',
            navAs: [
              { name: 'Calidad (Autoevaluación / Acreditación)', path: '/organizacion/comites#calidad' },
              { name: 'Coteccu', path: '/organizacion/comites#coteccu' },
              { name: 'Consejería y tutoría', path: '/organizacion/comites#consejeria' },
              { name: 'Comité de Investigación', path: '/organizacion/comites#investigacion' },
              { name: 'Comisión', path: '/organizacion/comites#comision' },
            ],
          },
        ],
      },
      {
        label: 'Estructura',
        items: [
          { name: 'Estructura organizacional', path: '/organizacion/estructura' },
        ],
      },
    ],
  },
  {
    name: 'Académico',
    path: '/academico',
    groups: [
      {
        label: 'Plan de estudios',
        items: [
          { name: 'Malla curricular', path: '/academico/malla-curricular' },
        ],
      },
      {
        label: 'Recursos',
        items: [
          { name: 'Laboratorios', path: '/academico/laboratorios' },
          { name: 'Bienestar', path: '#', external: true },
        ],
      },
      {
        label: 'Vinculación',
        items: [
          { name: 'Responsabilidad social', path: '/academico/responsabilidad-social' },
          { name: 'Convenios', path: '/academico/convenios' },
          { name: 'Movilidad', path: '/academico/movilidad' },
        ],
      },
    ],
  },
  {
    name: 'Investigación',
    path: '/investigacion',
    groups: [
      {
        label: 'Producción',
        items: [
          { name: 'Líneas de investigación', path: '/investigacion/lineas' },
          { name: 'Publicaciones', path: '/investigacion/publicaciones' },
          { name: 'Revistas', path: '/investigacion/revistas' },
        ],
      },
      {
        label: 'Proyectos',
        items: [
          {
            name: 'Proyectos',
            path: '/investigacion/proyectos',
            navAs: [
              { name: 'Proyectos de investigación', path: '/investigacion/proyectos#investigacion' },
              { name: 'Proyectos y tesis', path: '/investigacion/proyectos#tesis' },
            ],
          },
        ],
      },
    ],
  },
  { name: 'Contacto', path: '/contacto' },
];

/**
 * Contenido de "Admisión" para el panel lateral (FloatingAdmissions).
 * Mismo modelo de grupos. Las estadísticas son enlaces externos (↗).
 */
export const ADMISION_GROUPS: NavGroup[] = [
  {
    label: 'Postulantes',
    items: [
      { name: 'Guía del postulante', path: '/admision/guia' },
    ],
  },
  {
    label: 'Estadísticas (últimos 5 años)',
    items: [
      { name: 'Ingresantes', path: '#', external: true },
      { name: 'Matriculados', path: '#', external: true },
      { name: 'Graduados', path: '#', external: true },
      { name: 'Titulados', path: '#', external: true },
    ],
  },
  {
    label: 'Documentos',
    items: [
      { name: 'Resoluciones', path: '/admision/resoluciones' },
    ],
  },
];

/** Devuelve la entrada de sección (con sus grupos) a partir de su ruta base. */
export const getSection = (basePath: string): NavSection | undefined =>
  NAV_LINKS.find((link) => link.path === basePath);

/** Aplana los grupos de una sección a su lista de items (1 item = 1 página/pestaña). */
export const flattenItems = (groups: NavGroup[] = []): NavLeaf[] =>
  groups.flatMap((group) => group.items);

/**
 * Items internos (navegables dentro del sitio) de una sección, deduplicados por
 * página. Excluye externos. Lo usan SectionTabs (1 pestaña por página) y las
 * rutas anidadas.
 */
export const getInternalItems = (section: NavSection | undefined): NavLeaf[] =>
  flattenItems(section?.groups).filter((item) => !item.external);

/**
 * Enlaces granulares para el Navbar: expande `navAs` en varias etiquetas finas.
 * Si un item no tiene `navAs`, se muestra tal cual.
 */
export const expandNavLinks = (items: NavLeaf[] = []): NavLeaf[] =>
  items.flatMap((item) => item.navAs ?? [item]);
