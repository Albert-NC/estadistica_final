export const director = {
  nombre: "[Nombre del Director/a]",
  cargo: "Director de la Escuela Profesional de [Nombre de la Escuela]",
  correo: "direccion.escuela@unitru.edu.pe",
  bio: "Reseña académica y profesional del director/a de la Escuela, detallando su grado académico, áreas de especialización y trayectoria profesional.",
  foto: null // Placeholder
};

export const coordinadores = [
  {
    nombre: "[Nombre del Coordinador/a]",
    cargo: "Coordinador Académico",
    correo: "academico.escuela@unitru.edu.pe"
  },
  {
    nombre: "[Nombre del Coordinador/a]",
    cargo: "Coordinador de Investigación",
    correo: "investigacion.escuela@unitru.edu.pe"
  },
  {
    nombre: "[Nombre del Coordinador/a]",
    cargo: "Coordinador de Prácticas Preprofesionales",
    correo: "practicas.escuela@unitru.edu.pe"
  }
];

export const organigrama = {
  nombre: "Dirección de Escuela",
  cargo: "[Nombre del Director/a]",
  hijos: [
    {
      nombre: "Coordinación Académica",
      cargo: "[Nombre del Coordinador/a]",
      hijos: [
        { nombre: "Comité de Currículo", cargo: "" },
        { nombre: "Tutoría y Asesoría", cargo: "" }
      ]
    },
    {
      nombre: "Coordinación de Investigación",
      cargo: "[Nombre del Coordinador/a]"
    },
    {
      nombre: "Prácticas Preprofesionales",
      cargo: "[Nombre del Coordinador/a]"
    }
  ]
};
