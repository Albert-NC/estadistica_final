export const gradoAcademico = "Bachiller en Ciencias Estadísticas";
export const tituloProfesional = "Ingeniero Estadístico";

export const perfilIngresante = [
  { area: "Formación Lógico-Matemática", descripcion: "Excelente formación en lógico-matemática y capacidad analítica para asimilar métodos cuantitativos complejos." },
  { area: "Comunicación y Lenguaje", descripcion: "Excelente capacidad de comunicación oral y escrita, así como conocimientos de idioma inglés a nivel básico." },
  { area: "Conducta Ética", descripcion: "Proceder con ética, adhiriéndose a principios de justicia, libertad, solidaridad, tolerancia y veracidad." },
  { area: "Cultura Cívica y Humanística", descripcion: "Información básica en ciencias naturales, sociales, formales y cultura humanística en perspectiva histórica nacional y mundial." },
  { area: "Relaciones Interpersonales", descripcion: "Habilidades intra e interpersonales de autodominio y compañerismo para integrarse y desempeñarse con éxito en equipos de trabajo." },
  { area: "Vocación de Liderazgo", descripcion: "Capacidad de iniciativa y liderazgo orientados al bienestar de la comunidad y a la promoción de cambios estructurales." }
];

export const perfilEgresado = [
  {
    area: "GESTIONA LA RECOLECCIÓN",
    descripcion: "Gestiona el proceso de recolección de datos, de acuerdo al plan de investigación o estudio diseñado, utilizando técnicas para validar los instrumentos de recolección y evaluar su confiabilidad."
  },
  {
    area: "PROCESA DATOS",
    descripcion: "Procesa el conjunto de datos recolectados, utilizando métodos estadísticos, herramientas y recursos tecnológicos, para obtener una base de datos confiable."
  },
  {
    area: "ANALIZA E INTERPRETA",
    descripcion: "Organiza, interpreta y presenta los resultados obtenidos a partir de la aplicación de modelos, métodos y técnicas estadísticas pertinentes a la naturaleza y objetivo de estudio de forma creativa, buscando el impacto de los interesados, sin perder objetividad y con responsabilidad social."
  },
  {
    area: "TOMA DECISIONES",
    descripcion: "Gestiona la utilización de los resultados obtenidos evidenciando una elevada conciencia ético-moral, ciudadana y medioambiental, para la toma de decisiones en la incorporación de mejoras de procesos productivos y de servicios, teniendo en cuenta la normatividad vigente."
  },
  {
    area: "CUIDADO AMBIENTAL",
    descripcion: "Se compromete activamente con el cuidado del medio ambiente y la promoción de la diversidad cultural en todos sus ámbitos de desempeño."
  },
  {
    area: "INVESTIGACIÓN CIENTÍFICA",
    descripcion: "Diseña, ejecuta y aprueba trabajos de investigación científica de acuerdo con la Ley Universitaria N° 30220 y el Reglamento del Registro Nacional de Trabajos de Investigación (RENATI)."
  },
  {
    area: "COMUNICACIÓN GLOBAL",
    descripcion: "Demuestra conocimiento y dominio comunicativo de un idioma extranjero, con especial énfasis en el idioma inglés o lengua nativa."
  }
];

export const planEstudios = [
  {
    ciclo: "I Ciclo",
    cursos: [
      { codigo: "12906", nombre: "Introducción al Análisis Matemático", creditos: 4, tipo: "Obligatorio" },
      { codigo: "12905", nombre: "Fundamentos de Álgebra Lineal para Estadística", creditos: 4, tipo: "Obligatorio" },
      { codigo: "12904", nombre: "Física General", creditos: 4, tipo: "Obligatorio" },
      { codigo: "12900", nombre: "Desarrollo del Pensamiento Lógico Matemático", creditos: 3, tipo: "Obligatorio" },
      { codigo: "12907", nombre: "Lectura Crítica y Redacción de Textos Académicos", creditos: 3, tipo: "Obligatorio" },
      { codigo: "12901", nombre: "Desarrollo Personal", creditos: 3, tipo: "Obligatorio" },
      { codigo: "12911", nombre: "Taller I: Técnicas de Comunicación Eficaz / Música / Liderazgo / Deporte / Teatro", creditos: 1, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "II Ciclo",
    cursos: [
      { codigo: "12912", nombre: "Análisis Matemático", creditos: 4, tipo: "Obligatorio" },
      { codigo: "12916", nombre: "Estadística General", creditos: 4, tipo: "Obligatorio" },
      { codigo: "12919", nombre: "Fundamentos de Programación para Estadística", creditos: 4, tipo: "Obligatorio" },
      { codigo: "12917", nombre: "Ética, Convivencia Humana y Ciudadanía", creditos: 3, tipo: "Obligatorio" },
      { codigo: "12921", nombre: "Sociedad, Cultura y Ecología", creditos: 3, tipo: "Obligatorio" },
      { codigo: "12914", nombre: "Cultura Investigativa y Pensamiento Crítico", creditos: 3, tipo: "Obligatorio" },
      { codigo: "12924", nombre: "Taller II: Manejo de TIC / Danzas Folclóricas / Deporte / Música", creditos: 1, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "III Ciclo",
    cursos: [
      { codigo: "13773", nombre: "Probabilidades I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "13774", nombre: "Estadística Multidimensional", creditos: 5, tipo: "Obligatorio" },
      { codigo: "13775", nombre: "Análisis Matemático para Estadística", creditos: 5, tipo: "Obligatorio" },
      { codigo: "13776", nombre: "Micro y Macro Economía", creditos: 4, tipo: "Obligatorio" },
      { codigo: "13777", nombre: "Operaciones Censales", creditos: 3, tipo: "Electivo" },
      { codigo: "13778", nombre: "Psicometría", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "IV Ciclo",
    cursos: [
      { codigo: "13779", nombre: "Probabilidades II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "13780", nombre: "Muestreo I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "13781", nombre: "Ecuaciones Diferenciales y Álgebra Lineal", creditos: 4, tipo: "Obligatorio" },
      { codigo: "13782", nombre: "Investigación Operativa I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "13783", nombre: "Base de Datos", creditos: 3, tipo: "Electivo" },
      { codigo: "13784", nombre: "Defensa Nacional", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "V Ciclo",
    cursos: [
      { codigo: "2773", nombre: "Inferencia Estadística I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "2774", nombre: "Muestreo II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "2775", nombre: "Ingeniería Económica", creditos: 4, tipo: "Obligatorio" },
      { codigo: "2776", nombre: "Investigación Operativa II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "2777", nombre: "Estadística Espacial", creditos: 3, tipo: "Electivo" },
      { codigo: "2778", nombre: "Ingeniería Ambiental", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "VI Ciclo",
    cursos: [
      { codigo: "6.1", nombre: "Inferencia Estadística II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "6.2", nombre: "Aseguramiento de la Calidad I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "6.3", nombre: "Ingeniería de Métodos", creditos: 4, tipo: "Obligatorio" },
      { codigo: "6.4", nombre: "Práctica Pre Profesional 1", creditos: 5, tipo: "Obligatorio" },
      { codigo: "6.5", nombre: "Didáctica de la Estadística", creditos: 3, tipo: "Electivo" },
      { codigo: "6.6", nombre: "Investigación Aplicada", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "VII Ciclo",
    cursos: [
      { codigo: "7.1", nombre: "Análisis de Regresión I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "7.2", nombre: "Aseguramiento de la Calidad II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "7.3", nombre: "Producción Industrial", creditos: 4, tipo: "Obligatorio" },
      { codigo: "7.4", nombre: "Demografía", creditos: 5, tipo: "Obligatorio" },
      { codigo: "7.5", nombre: "Procesos Estocásticos", creditos: 3, tipo: "Electivo" },
      { codigo: "7.6", nombre: "Análisis de Riesgos", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "VIII Ciclo",
    cursos: [
      { codigo: "8.1", nombre: "Análisis de Regresión II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "8.2", nombre: "Diseño y Análisis de Experimentos I", creditos: 5, tipo: "Obligatorio" },
      { codigo: "8.3", nombre: "Proyectos de Inversión", creditos: 4, tipo: "Obligatorio" },
      { codigo: "8.4", nombre: "Realidad Nacional", creditos: 5, tipo: "Obligatorio" },
      { codigo: "8.5", nombre: "Estadística de Tránsito", creditos: 3, tipo: "Electivo" },
      { codigo: "8.6", nombre: "Bioestadística y Epidemiología", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "IX Ciclo",
    cursos: [
      { codigo: "9.1", nombre: "Econometría", creditos: 5, tipo: "Obligatorio" },
      { codigo: "9.2", nombre: "Diseño y Análisis de Experimentos II", creditos: 5, tipo: "Obligatorio" },
      { codigo: "9.3", nombre: "Análisis Multivariado", creditos: 5, tipo: "Obligatorio" },
      { codigo: "9.4", nombre: "Metodología de la Investigación Científica", creditos: 4, tipo: "Obligatorio" },
      { codigo: "9.5", nombre: "Minería de Datos", creditos: 3, tipo: "Electivo" },
      { codigo: "9.6", nombre: "Estadística para Hidrología", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "X Ciclo",
    cursos: [
      { codigo: "10.1", nombre: "Práctica Pre Profesional 2", creditos: 8, tipo: "Obligatorio" },
      { codigo: "10.3", nombre: "Trabajo de investigación", creditos: 5, tipo: "Obligatorio" },
      { codigo: "10.2", nombre: "S.T. Investigación de mercados", creditos: 5, tipo: "Electivo" },
      { codigo: "10.4", nombre: "S.T. Investigación de organizaciones", creditos: 5, tipo: "Electivo" },
      { codigo: "10.5", nombre: "S.T. Investigación Agropecuaria", creditos: 5, tipo: "Electivo" },
      { codigo: "10.6", nombre: "S.T. Planificación para el Desarrollo", creditos: 5, tipo: "Electivo" }
    ]
  }
];

export const titulacion = [
  {
    modalidad: "Sustentación de Tesis",
    descripcion: "Elaboración, presentación y defensa pública de una tesis de investigación original sobre una metodología estadística o su aplicación a problemáticas reales.",
    requisitos: [
      "Haber obtenido el Grado Académico de Bachiller en Ciencias Estadísticas.",
      "Aprobación del Plan de Tesis por el Comité Técnico respectivo.",
      "Constancia de no adeudar bienes ni valores a la institución."
    ]
  },
  {
    modalidad: "Trabajo de Suficiencia Profesional",
    descripcion: "Presentación de un informe técnico detallado que sistematice y evalúe la aplicación de metodologías estadísticas durante la actividad laboral profesional.",
    requisitos: [
      "Haber obtenido el Grado Académico de Bachiller en Ciencias Estadísticas.",
      "Acreditar un mínimo de tres (3) años de servicios profesionales consecutivos en labores propias de la especialidad."
    ]
  },
  {
    modalidad: "Examen de Capacidad Profesional",
    descripcion: "Aprobación de una evaluación teórica y práctica ante jurado evaluador, enfocada en la resolución de problemas complejos del quehacer del Ingeniero Estadístico.",
    requisitos: [
      "Haber obtenido el Grado Académico de Bachiller en Ciencias Estadísticas.",
      "Aprobación de la evaluación según el reglamento específico de la Facultad."
    ]
  }
];

export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Requisitos y procedimiento para la obtención del Grado Académico de Bachiller en Ciencias Estadísticas.",
    requisitos: [
      "Haber completado y aprobado satisfactoriamente los estudios curriculares (total de créditos del plan).",
      "Elaboración, sustentación y aprobación de un Trabajo de Investigación (según Ley N° 30220 / RENATI).",
      "Acreditar el conocimiento de un idioma extranjero (de preferencia inglés) a nivel básico.",
      "Constancia de no adeudar a la universidad."
    ],
    pdfUrl: `${import.meta.env.BASE_URL}docs/Requisitos_Bachiller.pdf`
  },
  {
    id: "titulo",
    titulo: "Título de Ingeniero",
    descripcion: "Requisitos y procedimiento para la obtención del Título Profesional de Ingeniero Estadístico.",
    requisitos: [
      "Copia autenticada del Grado Académico de Bachiller en Ciencias Estadísticas.",
      "Haber aprobado cualquiera de las modalidades de titulación vigentes (Tesis, Suficiencia Profesional o Examen de Capacidad).",
      "Constancia de conocimiento de idioma extranjero a nivel intermedio (requisito para matricularse en el X ciclo).",
      "Constancias administrativas de no adeudo correspondientes."
    ],
    pdfUrl: `${import.meta.env.BASE_URL}docs/Requisitos_Titulo.pdf`
  }
];
