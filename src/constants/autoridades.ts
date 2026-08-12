export const director = {
  nombre: "Dr. Luis Alberto Rubio Jacobo",
  cargo: "Dirección de Escuela",
  bio: "Director de la Escuela Profesional de Estadística. Encargado de la dirección y gestión académica y administrativa de la escuela.",
  linkTo: "/organizacion/docentes#luis-alberto-rubio-jacobo"
};

export const directorDepartamento = {
  nombre: "Dr. Enrique Ipanaqué Centeno",
  cargo: "Director de Departamento",
  bio: "Director del Departamento de Estadística. Responsable del cuerpo docente, investigación y desarrollo académico del área.",
  linkTo: "/organizacion/docentes#enrique-ipanaque-centeno"
};

export const coordinadores = [
  {
    nombre: "Dr. Carlos Alberto Minchón Medina",
    cargo: "Coordinador de COTECCU",
    linkTo: "/organizacion/comites#coteccu"
  },
  {
    nombre: "Ms. Silvana América Sánchez Pereda",
    cargo: "Coordinadora de Calidad",
    linkTo: "/organizacion/comites#calidad"
  },
  {
    nombre: "MsC. Aurora Rosa Neciosup Obando",
    cargo: "Coordinadora de Consejería y Tutoría",
    linkTo: "/organizacion/comites#consejeria"
  },
  {
    nombre: "Dr. Roger Demetrio Reyna Segura",
    cargo: "Coordinador de Seguimiento al Egresado",
    linkTo: "/organizacion/comites#egresado"
  }
];

export const organigrama = {
  nombre: "Dr. Luis Alberto Rubio Jacobo",
  cargo: "Director de la Escuela",
  hijos: [
    {
      nombre: "COTECCU",
      cargo: "Dr. Carlos Alberto Minchón Medina",
      hijos: [
        { nombre: "Dra. Rosa Deidamia Gutiérrez de Alarcón", cargo: "Miembro Docente" },
        { nombre: "Dr. Carlos Alfonso Risco Dávila", cargo: "Miembro Docente" }
      ]
    },
    {
      nombre: "Comité de Calidad",
      cargo: "Ms. Silvana América Sánchez Pereda",
      hijos: [
        { nombre: "Dra. Aurora Rosa Neciosup Obando", cargo: "Secretaria" },
        { nombre: "Dra. María Teresita Del Niño Jesús Rojas García", cargo: "Miembro Docente" },
        { nombre: "Ms. Martha Renee Cardoso Vigil", cargo: "Miembro Docente" }
      ]
    },
    {
      nombre: "Consejería y Tutoría",
      cargo: "MsC. Aurora Rosa Neciosup Obando",
      hijos: [
        { nombre: "Dra. Daphne Jannet Timaná Palacios", cargo: "Secretaria" },
        { nombre: "MsC. Maria Isabel Izquierdo Henriquez", cargo: "Vocal" }
      ]
    },
    {
      nombre: "Seguimiento al Egresado",
      cargo: "Dr. Roger Demetrio Reyna Segura",
      hijos: [
        { nombre: "MsC. Irvin Eduardo Cabrera Pinedo", cargo: "Secretario" }
      ]
    }
  ]
};
