export const gradoAcademico = "Bachiller en [Nombre de la Especialidad]";
export const tituloProfesional = "[Título Profesional]";

export const perfilIngresante = [
  { area: "Razonamiento Matemático", descripcion: "Sólida base en matemática y capacidad de razonamiento lógico-cuantitativo." },
  { area: "Ciencias Naturales", descripcion: "Conocimientos básicos de química, física y biología." },
  { area: "Conciencia Ambiental", descripcion: "Interés y sensibilidad por la conservación del ambiente y el desarrollo sostenible." },
  { area: "Pensamiento Crítico", descripcion: "Capacidad de análisis, reflexión y resolución de problemas." },
  { area: "Comunicación", descripcion: "Habilidad para comprender y expresar ideas de forma clara, oral y escrita." },
  { area: "Trabajo en Equipo", descripcion: "Disposición para colaborar en proyectos multidisciplinarios." },
  { area: "Vocación Científica", descripcion: "Curiosidad, observación y disposición para la investigación y la experimentación." },
  { area: "Responsabilidad", descripcion: "Compromiso, ética y actitud proactiva frente a su formación." }
];

export const perfilEgresado = [
  {
    area: "DISEÑA",
    descripcion: "sistemas y tecnologías para la prevención, control y tratamiento de la contaminación del agua, aire y suelo, aplicando principios de la ingeniería."
  },
  {
    area: "EVALÚA",
    descripcion: "el impacto ambiental de proyectos y actividades, formulando estudios y planes de manejo ambiental conforme a la normativa vigente."
  },
  {
    area: "GESTIONA",
    descripcion: "de manera sostenible los recursos naturales, los residuos sólidos y los sistemas de gestión ambiental en organizaciones públicas y privadas."
  },
  {
    area: "INVESTIGA",
    descripcion: "problemáticas ambientales, generando conocimiento e innovación tecnológica para contribuir al desarrollo sostenible y la resiliencia frente al cambio climático."
  }
];

export const planEstudios = [
  {
    ciclo: "I Ciclo",
    cursos: [
      { codigo: "I-01", nombre: "[Asignatura 1]", creditos: 4, tipo: "Obligatorio" },
      { codigo: "I-02", nombre: "[Asignatura 2]", creditos: 4, tipo: "Obligatorio" },
      { codigo: "I-03", nombre: "[Asignatura 3]", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "II Ciclo",
    cursos: [
      { codigo: "II-01", nombre: "[Asignatura 4]", creditos: 4, tipo: "Obligatorio" },
      { codigo: "II-02", nombre: "[Asignatura 5]", creditos: 3, tipo: "Obligatorio" },
      { codigo: "II-03", nombre: "[Asignatura 6]", creditos: 3, tipo: "Electivo" }
    ]
  }
];

export const titulacion = [
  {
    modalidad: "Tesis",
    descripcion: "Elaboración, presentación y sustentación de un trabajo de investigación original que aborde una problemática ambiental aplicando la ingeniería.",
    requisitos: [
      "Grado de Bachiller en [Nombre de la Especialidad]",
      "Aprobación del proyecto de tesis",
      "Constancia de egresado"
    ]
  },
  {
    modalidad: "Trabajo de Suficiencia Profesional",
    descripcion: "Demostración de competencias profesionales mediante la sistematización de una experiencia laboral en el campo de la especialidad.",
    requisitos: [
      "Grado de Bachiller en [Nombre de la Especialidad]",
      "Acreditar mínimo 1 año de experiencia profesional documentada"
    ]
  }
];

export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Requisitos y procedimiento para la obtención del Grado Académico de Bachiller en [Nombre de la Especialidad].",
    requisitos: [
      "Constancia de egresado (haber aprobado el total de créditos del plan de estudios).",
      "Constancia de dominio de idioma extranjero a nivel básico.",
      "Aprobación del Trabajo de Investigación.",
      "Constancia de no adeudar a la universidad."
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Bachiller.pdf`
  },
  {
    id: "titulo",
    titulo: "Título Profesional",
    descripcion: "Requisitos y procedimiento para obtener el Título Profesional.",
    requisitos: [
      "Copia autenticada del Grado Académico de Bachiller.",
      "Aprobación de Tesis o Trabajo de Suficiencia Profesional.",
      "Constancia de no adeudar a la universidad.",
      "Ejemplares impresos y digitales del trabajo de investigación."
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Titulo.pdf`
  }
];
