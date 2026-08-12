// Plana docente. Cada docente:
//   - grado: el cargo/grado académico (Doctor, Magíster, Licenciado…)
//   - cursoPrincipal: la categoría/modalidad académica (Principal D.E., Asociado T.C., etc.)
//   - especialidades: lista que aparece al voltear la card (reverso). Agrega 2-3 por docente.
//   - foto: ruta de la foto o null (muestra silueta placeholder)
export const docentes = [
  // 1. Profesor Rubio (Director de Escuela)
  {
    nombre: "Dr. Luis Alberto Rubio Jacobo",
    grado: "Doctor",
    cursoPrincipal: "Asociado D.E.",
    especialidades: ["Geoestadística", "Modelos de interpolación", "Análisis espacial"],
    foto: "/images/docentes/LUIS ALBERTO RUBIO JACOBO.webp",
    descripcion: "Docente y especialista en estadística espacial, geoestadística aplicada y modelos de interpolación en la Universidad Nacional de Trujillo.",
    linkTrabajo: {
      titulo: "Ver Tesis y Trabajos",
      url: "https://repositorio.unitru.edu.pe/collections/beb24350-804a-4da6-a293-b4e77db91771/search?spc.page=1&query=Dr.%20Luis%20Alberto%20Rubio%20Jacobo"
    }
  },
  // 2. Siguientes 4 profesores principales
  {
    nombre: "Dra. Rosa Deidamia Gutiérrez de Alarcón",
    grado: "Doctora",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Estadística social", "Metodología de la investigación", "Diseño de encuestas"],
    foto: "/images/docentes/ROSA DEIDAMIA GUTIÉRREZ DE ALARCÓN.webp"
  },
  {
    nombre: "MSc. Manuel Antonio Sisniegas Gonzales",
    grado: "Maestro",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Inferencia estadística", "Estimación paramétrica", "Pruebas de hipótesis"],
    foto: "/images/docentes/MANUEL ANTONIO SISNIEGAS GONZALES.webp"
  },
  {
    nombre: "MSc. Martha Renee Cardoso Vigil",
    grado: "Maestra",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Probabilidad aplicada", "Procesos estocásticos", "Modelos probabilísticos"],
    foto: "/images/docentes/MARTHA RENEE CARDOSO VIGIL.webp"
  },
  {
    nombre: "Dra. Rosa Adriana Chu Campos",
    grado: "Doctora",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Modelos lineales", "Econometría", "Análisis de varianza"],
    foto: "/images/docentes/ROSA ADRIANA CHU CAMPOS.webp"
  },
  // 3. Jefes de comités (Coordinadores)
  {
    nombre: "Dr. Carlos Alberto Minchón Medina",
    grado: "Doctor",
    cursoPrincipal: "Principal T.C.",
    especialidades: ["Control estadístico de calidad", "Metodologías Seis Sigma", "Optimización de procesos"],
    foto: "/images/docentes/CARLOS ALBERTO MINCHÓN MEDINA.webp"
  },
  {
    nombre: "MSc. Silvana America Sanchez Pereda",
    grado: "Maestra",
    cursoPrincipal: "Auxiliar T.C.",
    especialidades: ["Teoría de probabilidad", "Estadística general", "Fundamentos matemáticos"],
    foto: "/images/docentes/SILVANA AMERICA SANCHEZ PEREDA.webp"
  },
  {
    nombre: "MSc. Aurora Rosa Neciosup Obando",
    grado: "Maestra",
    cursoPrincipal: "Asociado T.C.",
    especialidades: ["Programación en R", "Simulación Montecarlo", "Software estadístico"],
    foto: "/images/docentes/AURORA ROSA NECIOSUP OBANDO.webp"
  },
  {
    nombre: "MSc. Roger Demetrio Reyna Segura",
    grado: "Maestro",
    cursoPrincipal: "Asociado D.E.",
    especialidades: ["Estadística descriptiva", "Presentación de datos", "Análisis exploratorio"],
    foto: "/images/docentes/ROGER DEMETRIO REYNA SEGURA.webp"
  },
  // 4. Los demás docentes
  {
    nombre: "Dr. Wilson Guillermo Diaz Araujo",
    grado: "Doctor",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Pronósticos estadísticos", "Modelos ARIMA", "Análisis de series temporales"],
    foto: "/images/docentes/WILSON GUILLERMO DIAZ ARAUJO.webp"
  },
  {
    nombre: "Dr. Enrique Ipanaqué Centeno",
    grado: "Doctor",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Componentes principales", "Análisis discriminante", "Análisis de conglomerados"],
    foto: "/images/docentes/ENRIQUE IPANAQUÉ CENTENO.webp"
  },
  {
    nombre: "Dra. Lucy Angélica Yglesias Alva",
    grado: "Doctora",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Diseño experimental", "Análisis no paramétrico", "Optimización experimental"],
    foto: "/images/docentes/LUCY ANGÉLICA YGLESIAS ALVA.webp"
  },
  {
    nombre: "Dr. Carlos Alfonso Risco Dávila",
    grado: "Doctor",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Estadística demográfica", "Cálculo actuarial", "Tablas de mortalidad"],
    foto: "/images/docentes/CARLOS ALFONSO RISCO DÁVILA.webp"
  },
  {
    nombre: "Dr. Jorge Luis Meléndez Rosales",
    grado: "Doctor",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Estadística teórica", "Teoría de la medida", "Fundamentos de probabilidad"],
    foto: "/images/docentes/JORGE LUIS MELÉNDEZ ROSALES.webp"
  },
  {
    nombre: "Dra. Laura Margot Rivera Leon",
    grado: "Doctora",
    cursoPrincipal: "Principal T.C.",
    especialidades: ["Bioestadística", "Análisis de supervivencia", "Epidemiología cuantitativa"],
    foto: "/images/docentes/LAURA MARGOT RIVERA LEON.webp"
  },
  {
    nombre: "Dra. Maria Teresita Del Niño Jesús Rojas  García",
    grado: "Doctora",
    cursoPrincipal: "Principal D.E.",
    especialidades: ["Teoría de muestreo", "Diseño de muestras", "Encuestas complejas"],
    foto: "/images/docentes/MARIA TERESITA DEL NIÑO JESUS ROJAS  GARCÍA.webp"
  },
  {
    nombre: "MSc. Mariana Lucia Cuadra Moreno",
    grado: "Maestra",
    cursoPrincipal: "Asociado D.E.",
    especialidades: ["Estadística psicométrica", "Diseños biométricos", "Análisis factorial"],
    foto: "/images/docentes/MARIANA LUCIA CUADRA MORENO.webp"
  },
  {
    nombre: "Dr. Carlos Danter Tapia Sanchez",
    grado: "Doctor",
    cursoPrincipal: "Asociado T.C.",
    especialidades: ["Estadística aplicada a ingeniería", "Modelado de sistemas", "Análisis de variabilidad"],
    foto: "/images/docentes/CARLOS DANTER TAPIA SANCHEZ.webp"
  },
  {
    nombre: "Dra. Daphne Jannet Timaná Palacios",
    grado: "Doctora",
    cursoPrincipal: "Auxiliar T.C.",
    especialidades: ["Econometría de datos de panel", "Modelos de regresión avanzada", "Análisis de impacto económico"],
    foto: "/images/docentes/DAPHNE JANNET TIMANÁ PALACIOS.webp"
  },
  {
    nombre: "MSc. Maria Isabel Izquierdo Henriquez",
    grado: "Maestra",
    cursoPrincipal: "Auxiliar D.E.",
    especialidades: ["Estadística elemental", "Didáctica de la estadística", "Análisis de datos cuantitativos"],
    foto: "/images/docentes/MARIA ISABEL IZQUIERDO HENRIQUEZ.webp"
  },
  {
    nombre: "MSc. Martha Solano Coello",
    grado: "Maestra",
    cursoPrincipal: "Auxiliar T.C.",
    especialidades: ["Metodología científica", "Redacción académica", "Estadística aplicada a la educación"],
    foto: "/images/docentes/MARTHA SOLANO COELLO.webp"
  },
  {
    nombre: "MSc. José Brian Claros Reyna",
    grado: "Maestro",
    cursoPrincipal: "Contratado Tipo B",
    especialidades: ["Visualización de datos", "Ciencia de datos en Python", "Modelado predictivo"],
    foto: "/images/docentes/brayan claros.webp"
  }
];
