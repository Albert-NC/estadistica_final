export const director = {
  nombre: "Director(a) de la Escuela",
  cargo: "Dirección de Escuela",
  correo: "direccion.escuela@unitru.edu.pe",
  bio: "Breve descripción de las funciones y trayectoria del director de la escuela profesional.",
  foto: null // Placeholder
};

export const coordinadores = [
  {
    nombre: "Coordinador(a) Académico(a)",
    cargo: "Coordinación Académica",
    correo: "acad.escuela@unitru.edu.pe"
  },
  {
    nombre: "Coordinador(a) de Investigación",
    cargo: "Coordinación de Investigación",
    correo: "investiga.escuela@unitru.edu.pe"
  },
  {
    nombre: "Coordinador(a) de Prácticas Preprofesionales",
    cargo: "Coordinación de Prácticas",
    correo: "practicas.escuela@unitru.edu.pe"
  }
];

export const organigrama = {
  nombre: "Dirección de Escuela",
  cargo: "Director(a) de la Escuela",
  hijos: [
    {
      nombre: "Coordinación Académica",
      cargo: "Coordinador(a) Académico(a)",
      hijos: [
        { nombre: "Comité de Currículo", cargo: "" },
        { nombre: "Tutoría y Asesoría", cargo: "" }
      ]
    },
    {
      nombre: "Coordinación de Investigación",
      cargo: "Coordinador(a) de Investigación"
    },
    {
      nombre: "Prácticas Preprofesionales",
      cargo: "Coordinador(a) de Prácticas"
    }
  ]
};
