import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Badge } from '../../components/ui/Badge';
import { Download, GraduationCap, X, Search, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseDetail {
  codigo: string;
  nombre: string;
  creditos: number;
  tipo: 'Obligatorio' | 'Electivo';
  categoria: 'General' | 'Específica' | 'De Especialidad';
  cicloNum: number;
  cicloRom: string;
  horas: { teoria: number; practica: number; laboratorio: number };
  prerrequisitos: string[];
  descripcion: string;
}

const enhancedCourses: CourseDetail[] = [
  // Ciclo I
  {
    codigo: "12906",
    nombre: "Introducción al Análisis Matemático",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 2, practica: 4, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Estudio de lógica proposicional, teoría de conjuntos, sistemas de números reales, relaciones y funciones de variable real, límites de funciones y continuidad."
  },
  {
    codigo: "12905",
    nombre: "Fundamentos de Álgebra Lineal para Estadística",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 2, practica: 4, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Sistemas de ecuaciones lineales, matrices, determinantes, espacios vectoriales, transformaciones lineales, valores y vectores propios con enfoque estadístico."
  },
  {
    codigo: "12904",
    nombre: "Física general",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Fundamentos de la mecánica clásica, termodinámica y electromagnetismo, con prácticas experimentales de laboratorio orientadas a la medición y error físico."
  },
  {
    codigo: "12900",
    nombre: "Desarrollo del Pensamiento Lógico Matemático",
    creditos: 3,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 1, practica: 4, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Fomento de destrezas de razonamiento formal, resolución de acertijos lógico-matemáticos y estructuración de algoritmos elementales."
  },
  {
    codigo: "12907",
    nombre: "Lectura Crítica y Redacción de textos académicos",
    creditos: 3,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 2, practica: 2, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Comprensión lectora analítica de textos científicos, estructura del párrafo y redacción bajo normativas internacionales de citado y formato."
  },
  {
    codigo: "12901",
    nombre: "Desarrollo personal",
    creditos: 3,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 2, practica: 2, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Inteligencia emocional, autoconocimiento, liderazgo personal, trabajo en equipo cooperativo, valores cívicos y ética profesional."
  },
  {
    codigo: "12911",
    nombre: "Taller de Técnicas de comunicación eficaz (Electiva)",
    creditos: 1,
    tipo: "Electivo",
    categoria: "General",
    cicloNum: 1,
    cicloRom: "I",
    horas: { teoria: 0, practica: 2, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Taller práctico orientado a potenciar la expresión oral, redacción de documentos e informes técnicos y habilidades comunicativas integrales."
  },

  // Ciclo II
  {
    codigo: "12912",
    nombre: "Análisis Matemático",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 2, practica: 4, laboratorio: 0 },
    prerrequisitos: ["12906"],
    descripcion: "Cálculo diferencial e integral de funciones de una variable real. Derivadas, integrales definidas e indefinidas y sus aplicaciones geométricas."
  },
  {
    codigo: "12916",
    nombre: "Estadística general",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["12905"],
    descripcion: "Métodos descriptivos de resumen de datos, variables cuantitativas y cualitativas, tabulación, gráficos, medidas de posición y dispersión, e introducción al cálculo de probabilidades."
  },
  {
    codigo: "12919",
    nombre: "Fundamentos de programación para estadística",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["12904"],
    descripcion: "Fundamentos de la programación computacional, estructuras de control, tipos de datos, funciones y uso básico de R y Python para la manipulación de datos."
  },
  {
    codigo: "12917",
    nombre: "Ética, convivencia humana y ciudadanía",
    creditos: 3,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 2, practica: 2, laboratorio: 0 },
    prerrequisitos: ["12900"],
    descripcion: "Reflexión filosófica sobre la moral, derechos humanos, valores democráticos y el ejercicio de la ciudadanía activa y ética."
  },
  {
    codigo: "12921",
    nombre: "Sociedad Cultura y Ecología",
    creditos: 3,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 1, practica: 4, laboratorio: 0 },
    prerrequisitos: ["12907"],
    descripcion: "Análisis sociocultural del entorno peruano e internacional y su relación con el equilibrio ecológico, desarrollo sostenible y cambio climático."
  },
  {
    codigo: "12914",
    nombre: "Cultura Investigativa y Pensamiento crítico",
    creditos: 3,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 2, practica: 2, laboratorio: 0 },
    prerrequisitos: ["12901"],
    descripcion: "Metodologías de análisis crítico de información, formulación de preguntas de investigación bibliográfica y redacción académica básica."
  },
  {
    codigo: "12924",
    nombre: "Taller de Manejo de TIC (Electiva)",
    creditos: 1,
    tipo: "Electivo",
    categoria: "General",
    cicloNum: 2,
    cicloRom: "II",
    horas: { teoria: 0, practica: 2, laboratorio: 0 },
    prerrequisitos: ["12911"],
    descripcion: "Talleres prácticos institucionales de libre elección: Manejo de TIC, Danzas Folclóricas, Deporte o Música."
  },

  // Ciclo III
  {
    codigo: "13773",
    nombre: "Probabilidades I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 3,
    cicloRom: "III",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["12912"],
    descripcion: "Modelos determinísticos vs. estocásticos. Definición formal de probabilidad, variables aleatorias unidimensionales y bidimensionales y distribuciones teóricas discretas y continuas."
  },
  {
    codigo: "13774",
    nombre: "Estadística Multidimensional",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 3,
    cicloRom: "III",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["12916"],
    descripcion: "Análisis de bases de datos multidimensionales, matrices de covarianza, representaciones gráficas de datos correlacionados y aplicación de R para modelamiento exploratorio."
  },
  {
    codigo: "13775",
    nombre: "Análisis Matemático para Estadística",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 3,
    cicloRom: "III",
    horas: { teoria: 3, practica: 4, laboratorio: 0 },
    prerrequisitos: ["12912"],
    descripcion: "Cálculo en varias variables. Derivadas parciales, diferenciales, integrales múltiples (dobles y triples), transformaciones jacobianas y optimización clásica."
  },
  {
    codigo: "13776",
    nombre: "Micro y Macro Economía",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 3,
    cicloRom: "III",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Principios económicos del comportamiento del consumidor y la firma (micro), y agregados económicos, inflación, empleo y modelos macroeconómicos de crecimiento."
  },
  {
    codigo: "13777",
    nombre: "Operaciones Censales",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 3,
    cicloRom: "III",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Metodologías de planificación, cartografía censal, empadronamiento, procesamiento de datos masivos y difusión de censos nacionales."
  },
  {
    codigo: "13778",
    nombre: "Psicometría",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 3,
    cicloRom: "III",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Teoría clásica de los tests (TCT), validez y confiabilidad de escalas, análisis de ítems y construcción de instrumentos de medición conductual."
  },

  // Ciclo IV
  {
    codigo: "13779",
    nombre: "Probabilidades II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 4,
    cicloRom: "IV",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13773"],
    descripcion: "Funciones generadoras de momentos, vectores aleatorios continuos, leyes de los grandes números y teorema del límite central con aplicaciones actuariales."
  },
  {
    codigo: "13780",
    nombre: "Muestreo I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 4,
    cicloRom: "IV",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13774"],
    descripcion: "Teoría matemática de muestreo probabilístico. Muestreo aleatorio simple (MAS), muestreo sistemático, muestreo estratificado y estimadores de varianza."
  },
  {
    codigo: "13781",
    nombre: "Ecuaciones Diferenciales y Algebra lineal",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 4,
    cicloRom: "IV",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13775"],
    descripcion: "Ecuaciones diferenciales ordinarias de primer orden y lineales de orden superior. Espacios métricos, formas cuadráticas e introducción al cálculo numérico."
  },
  {
    codigo: "13782",
    nombre: "Investigación Operativa I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 4,
    cicloRom: "IV",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Modelamiento matemático para toma de decisiones: programación lineal, algoritmo simplex, dualidad y análisis de sensibilidad, y modelos de transporte."
  },
  {
    codigo: "13783",
    nombre: "Base de Datos",
    creditos: 3,
    tipo: "Electivo",
    categoria: "General",
    cicloNum: 4,
    cicloRom: "IV",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Diseño conceptual de bases de datos relacionales, lenguaje SQL para consultas y modelado entidad-relación."
  },
  {
    codigo: "13784",
    nombre: "Defensa Nacional",
    creditos: 3,
    tipo: "Electivo",
    categoria: "General",
    cicloNum: 4,
    cicloRom: "IV",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Estudio sobre soberanía, seguridad nacional, rol de las fuerzas armadas y desarrollo nacional en el contexto sociopolítico."
  },

  // Ciclo V
  {
    codigo: "2773",
    nombre: "Inferencia Estadística I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 5,
    cicloRom: "V",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13779"],
    descripcion: "Estimación puntual y de intervalo. Suficiencia, completez, teorema de Rao-Blackwell. Métodos de estimación e hipótesis estadísticas."
  },
  {
    codigo: "2774",
    nombre: "Muestreo II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 5,
    cicloRom: "V",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13780"],
    descripcion: "Muestreo por conglomerados de una y dos etapas. Estimadores de razón, diferencia y regresión lineal. Ajuste de no respuesta."
  },
  {
    codigo: "2775",
    nombre: "Ingeniería Económica",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 5,
    cicloRom: "V",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13776"],
    descripcion: "Evaluación del valor del dinero en el tiempo, tasa de interés, amortizaciones, VAN, TIR e indicadores financieros de inversión."
  },
  {
    codigo: "2776",
    nombre: "Investigación Operativa II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 5,
    cicloRom: "V",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13781", "13782"],
    descripcion: "Programación entera y no lineal. Modelos de inventarios, teoría de colas y líneas de espera con simulación estocástica."
  },
  {
    codigo: "2777",
    nombre: "Estadística Espacial",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 5,
    cicloRom: "V",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Análisis de datos georreferenciados, modelos de autocorrelación espacial (Moran, Geary), kriging y geoestadística aplicada."
  },
  {
    codigo: "2778",
    nombre: "Ingeniería Ambiental",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 5,
    cicloRom: "V",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Estudio de impactos ambientales, sistemas de gestión ambiental, legislación ecológica y metodologías de mitigación."
  },

  // Ciclo VI
  {
    codigo: "6.1",
    nombre: "Inferencia Estadística II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 6,
    cicloRom: "VI",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13781", "2773"],
    descripcion: "Estadística no paramétrica, introducción a la teoría de decisión estadística, fundamentos del método bayesiano y Bootstrap."
  },
  {
    codigo: "6.2",
    nombre: "Aseguramiento de la Calidad I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 6,
    cicloRom: "VI",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["2773"],
    descripcion: "Control estadístico de calidad (SPC), diagramas de control de Shewhart para variables y atributos, índices de capacidad e inspección por muestreo."
  },
  {
    codigo: "6.3",
    nombre: "Ingeniería de Métodos",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 6,
    cicloRom: "VI",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["2774"],
    descripcion: "Estudio de tiempos y movimientos, diseño y optimización de estaciones de trabajo, balance de líneas y ergonomía laboral."
  },
  {
    codigo: "6.4",
    nombre: "Práctica Pre Profesional 1",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 6,
    cicloRom: "VI",
    horas: { teoria: 0, practica: 10, laboratorio: 0 },
    prerrequisitos: ["2773", "2774"],
    descripcion: "Primera inmersión profesional práctica bajo tutoría. Aplicación de metodologías estadísticas en el análisis de datos de una organización."
  },
  {
    codigo: "6.5",
    nombre: "Didáctica de la Estadística",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 6,
    cicloRom: "VI",
    horas: { teoria: 2, practica: 2, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Estrategias de enseñanza del razonamiento y alfabetización estadística para nivel básico y universitario superior."
  },
  {
    codigo: "6.6",
    nombre: "Investigación Aplicada",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 6,
    cicloRom: "VI",
    horas: { teoria: 2, practica: 2, laboratorio: 0 },
    prerrequisitos: [],
    descripcion: "Diseño metodológico estadístico para la formulación de proyectos científicos en ciencias naturales y de la salud."
  },

  // Ciclo VII
  {
    codigo: "7.1",
    nombre: "Análisis de Regresión I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 7,
    cicloRom: "VII",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["6.1"],
    descripcion: "Regresión lineal simple y múltiple. Diagnóstico de multicolinealidad, heterocedasticidad, autocorrelación y selección de variables."
  },
  {
    codigo: "7.2",
    nombre: "Aseguramiento de la Calidad II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 7,
    cicloRom: "VII",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["6.2"],
    descripcion: "Metodología Six Sigma, diseño robusto de parámetros (Taguchi), análisis de sistemas de medición (Gage R&R) y modelos de confiabilidad."
  },
  {
    codigo: "7.3",
    nombre: "Producción Industrial",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 7,
    cicloRom: "VII",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["6.3"],
    descripcion: "Sistemas de planificación de requerimientos de materiales (MRP), control de inventarios justo a tiempo (JIT) y optimización de manufactura."
  },
  {
    codigo: "7.4",
    nombre: "Demografía",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 7,
    cicloRom: "VII",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Indicadores del estado de población. Modelos demográficos, tablas de mortalidad, proyecciones de fecundidad y modelos de migración."
  },
  {
    codigo: "7.5",
    nombre: "Procesos Estocásticos",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 7,
    cicloRom: "VII",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Procesos de Markov, cadenas de tiempo continuo y discreto, procesos de Poisson, y simulación de trayectorias aleatorias."
  },
  {
    codigo: "7.6",
    nombre: "Análisis de Riesgos",
    creditos: 3,
    tipo: "Electivo",
    categoria: "Específica",
    cicloNum: 7,
    cicloRom: "VII",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Identificación cuantitativa de riesgos en ingeniería y finanzas. Distribuciones de pérdidas severas y simulación Monte Carlo."
  },

  // Ciclo VIII
  {
    codigo: "8.1",
    nombre: "Análisis de Regresión II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 8,
    cicloRom: "VIII",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["7.1"],
    descripcion: "Modelos lineales generalizados (GLM), regresión logística y Poisson. Modelamiento de datos longitudinales e introducción a regularización (Lasso, Ridge)."
  },
  {
    codigo: "8.2",
    nombre: "Diseño y Análisis de Experimentos I",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 8,
    cicloRom: "VIII",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["7.1"],
    descripcion: "Diseño completamente al azar, bloques, cuadros latinos y grecolatinos. Diseños factoriales de 2k y 3k niveles y análisis de varianza (ANOVA)."
  },
  {
    codigo: "8.3",
    nombre: "Proyectos de Inversión",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "Específica",
    cicloNum: 8,
    cicloRom: "VIII",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: ["13776"],
    descripcion: "Ciclo de vida del proyecto. Estudios de mercado, técnicos, organizacionales y evaluación económico-financiera integral."
  },
  {
    codigo: "8.4",
    nombre: "Realidad Nacional",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 8,
    cicloRom: "VIII",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["7.4"],
    descripcion: "Diagnóstico socioeconómico de la realidad peruana. Indicadores macroeconómicos, pobreza, inclusión social y descentralización."
  },
  {
    codigo: "8.5",
    nombre: "Estadística de Tránsito",
    creditos: 3,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 8,
    cicloRom: "VIII",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Modelamiento de flujo vehicular, teoría de colas aplicadas a intersecciones viales y análisis estadístico de accidentes de tránsito."
  },
  {
    codigo: "8.6",
    nombre: "Bioestadística y Epidemiología",
    creditos: 3,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 8,
    cicloRom: "VIII",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Indicadores epidemiológicos, estudios de casos y controles, cohortes, análisis de supervivencia (Kaplan-Meier, modelo de Cox)."
  },

  // Ciclo IX
  {
    codigo: "9.1",
    nombre: "Econometría",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 9,
    cicloRom: "IX",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["8.1"],
    descripcion: "Modelado econométrico avanzado de datos financieros y macroeconómicos, abordando modelos lineales, no lineales, datos de panel y series de tiempo."
  },
  {
    codigo: "9.2",
    nombre: "Diseño y Análisis de Experimentos II",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 9,
    cicloRom: "IX",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["8.2"],
    descripcion: "Metodología de superficies de respuesta, diseños óptimos, experimentos de mezclas y control estadístico multivariante de calidad."
  },
  {
    codigo: "9.3",
    nombre: "Análisis Multivariado",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 9,
    cicloRom: "IX",
    horas: { teoria: 3, practica: 2, laboratorio: 2 },
    prerrequisitos: ["8.2"],
    descripcion: "Técnicas avanzadas de clasificación y reducción: PCA, análisis factorial, análisis discriminante, clustering y escalamiento multidimensional."
  },
  {
    codigo: "9.4",
    nombre: "Metodología de la Investigación Científica",
    creditos: 4,
    tipo: "Obligatorio",
    categoria: "General",
    cicloNum: 9,
    cicloRom: "IX",
    horas: { teoria: 2, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Formulación del proyecto de tesis científica bajo estándares metodológicos rigurosos. Elaboración del planteamiento y el marco teórico."
  },
  {
    codigo: "9.5",
    nombre: "Minería de Datos",
    creditos: 3,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 9,
    cicloRom: "IX",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Algoritmos avanzados para minería de datos (KDD), redes neuronales, máquinas de soporte vectorial, árboles de decisión y clustering masivo."
  },
  {
    codigo: "9.6",
    nombre: "Estadística para Hidrología",
    creditos: 3,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 9,
    cicloRom: "IX",
    horas: { teoria: 1, practica: 2, laboratorio: 2 },
    prerrequisitos: [],
    descripcion: "Modelos estocásticos aplicados a recursos hídricos, climatología y previsión de desastres naturales por exceso o déficit de caudal."
  },

  // Ciclo X
  {
    codigo: "10.1",
    nombre: "Práctica Pre Profesional 2",
    creditos: 8,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 10,
    cicloRom: "X",
    horas: { teoria: 0, practica: 16, laboratorio: 0 },
    prerrequisitos: ["6.4"],
    descripcion: "Pasantía profesional integradora en empresas e instituciones de prestigio, con tutorías académicas y entrega de reporte de suficiencia."
  },
  {
    codigo: "10.3",
    nombre: "Trabajo de investigación",
    creditos: 5,
    tipo: "Obligatorio",
    categoria: "De Especialidad",
    cicloNum: 10,
    cicloRom: "X",
    horas: { teoria: 4, practica: 0, laboratorio: 2 },
    prerrequisitos: ["9.1", "9.3"],
    descripcion: "Fase final de ejecución experimental del proyecto de tesis. Análisis de resultados, discusión y redacción preliminar del informe."
  },
  {
    codigo: "10.2",
    nombre: "S.T. Investigación de mercados",
    creditos: 5,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 10,
    cicloRom: "X",
    horas: { teoria: 4, practica: 0, laboratorio: 2 },
    prerrequisitos: ["9.1", "9.3"],
    descripcion: "Seminario Taller práctico en el diseño muestral, recolección y análisis estadístico multivariado de comportamiento de consumidores y demanda corporativa."
  },
  {
    codigo: "10.4",
    nombre: "S.T. Investigación de organizaciones",
    creditos: 5,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 10,
    cicloRom: "X",
    horas: { teoria: 4, practica: 0, laboratorio: 2 },
    prerrequisitos: ["7.2", "8.3"],
    descripcion: "Seminario Taller orientado al análisis estadístico de clima organizacional, procesos internos, recursos humanos y balances de gestión."
  },
  {
    codigo: "10.5",
    nombre: "S.T. Investigación Agropecuaria",
    creditos: 5,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 10,
    cicloRom: "X",
    horas: { teoria: 4, practica: 0, laboratorio: 2 },
    prerrequisitos: ["9.2"],
    descripcion: "Seminario Taller en el modelado y diseño experimental agropecuario, predicción de cosechas, control de calidad agrícola y sanidad animal."
  },
  {
    codigo: "10.6",
    nombre: "S.T. Planificación para el Desarrollo",
    creditos: 5,
    tipo: "Electivo",
    categoria: "De Especialidad",
    cicloNum: 10,
    cicloRom: "X",
    horas: { teoria: 4, practica: 0, laboratorio: 2 },
    prerrequisitos: ["8.4"],
    descripcion: "Seminario Taller sobre el diseño de políticas públicas, formulación de planes estratégicos nacionales e indicadores socioeconómicos."
  }
];

export default function PlanEstudios() {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number; w: number; h: number }>>({});
  const [hoveredCourseCode, setHoveredCourseCode] = useState<string | null>(null);
  
  // Zoom & Pan States
  const [zoom, setZoom] = useState(0.6); // Zoom por defecto al 60% para ver más cursos
  const [isPanning, setIsPanning] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomContainerRef = useRef<HTMLDivElement>(null);
  
  const dragStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });
  const lastDragTimeRef = useRef(0);

  const updatePositions = () => {
    if (!zoomContainerRef.current) return;
    const parentRect = zoomContainerRef.current.getBoundingClientRect();
    const newPositions: Record<string, { x: number; y: number; w: number; h: number }> = {};
    
    const cards = zoomContainerRef.current.querySelectorAll('[data-course-code]');
    cards.forEach(card => {
      const code = card.getAttribute('data-course-code');
      if (code) {
        const rect = card.getBoundingClientRect();
        newPositions[code] = {
          x: (rect.left - parentRect.left) / zoom,
          y: (rect.top - parentRect.top) / zoom,
          w: rect.width / zoom,
          h: rect.height / zoom
        };
      }
    });
    setPositions(newPositions);
  };

  // Recalcular posiciones al cambiar filtros o nivel de zoom
  useEffect(() => {
    updatePositions();
    window.addEventListener('resize', updatePositions);
    const timer = setTimeout(updatePositions, 300);
    return () => {
      window.removeEventListener('resize', updatePositions);
      clearTimeout(timer);
    };
  }, [searchQuery, filterCategory, filterType, zoom]);

  // Recalcular cuando cambia el zoom explícitamente
  useEffect(() => {
    updatePositions();
  }, [zoom]);

  // Manejar el scroll horizontal y zoom con la rueda del ratón
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelNative = (e: WheelEvent) => {
      if (e.ctrlKey) {
        // Zoom con Ctrl + Rueda del Mouse
        e.preventDefault();
        setZoom(prev => {
          const delta = e.deltaY < 0 ? 0.05 : -0.05;
          return Math.min(1.2, Math.max(0.4, prev + delta));
        });
      } else if (e.deltaY !== 0) {
        // Scroll horizontal con rueda normal
        const canScroll = container.scrollWidth > container.clientWidth;
        if (canScroll) {
          e.preventDefault();
          container.scrollLeft += e.deltaY * 1.3;
        }
      }
    };

    container.addEventListener('wheel', handleWheelNative, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelNative);
    };
  }, []);

  // Gestores de arrastre para mover la vista (panning)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Solo click izquierdo
    const container = containerRef.current;
    if (!container) return;

    setIsPanning(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: container.scrollLeft,
      scrollTop: container.scrollTop
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragStartRef.current.x) return;
    const container = containerRef.current;
    if (!container) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
      container.scrollLeft = dragStartRef.current.scrollLeft - dx;
      container.scrollTop = dragStartRef.current.scrollTop - dy;
      lastDragTimeRef.current = Date.now();
      updatePositions();
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    dragStartRef.current = { x: 0, y: 0, scrollLeft: 0, scrollTop: 0 };
  };

  const activeFocusCode = hoveredCourseCode || selectedCourse?.codigo || null;

  // Organizar cursos por ciclos del 1 al 10
  const cycles = Array.from({ length: 10 }, (_, idx) => {
    const cycleNum = idx + 1;
    const cycleRom = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][idx];
    return {
      num: cycleNum,
      rom: cycleRom,
      courses: enhancedCourses.filter(c => c.cicloNum === cycleNum)
    };
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'General': return 'border-emerald-400 bg-emerald-50 text-emerald-900';
      case 'Específica': return 'border-amber-400 bg-amber-50 text-amber-900';
      default: return 'border-blue-400 bg-blue-50 text-blue-900';
    }
  };

  const getCategoryText = (cat: string) => {
    switch (cat) {
      case 'General': return 'Estudios Generales (EG)';
      case 'Específica': return 'Estudios Específicos (ES)';
      default: return 'Estudios de Especialidad (EP)';
    }
  };

  const getCategoryDot = (cat: string) => {
    switch (cat) {
      case 'General': return 'bg-emerald-400';
      case 'Específica': return 'bg-amber-400';
      default: return 'bg-blue-400';
    }
  };

  // Manejador de click en los prerequisitos en la barra lateral
  const handleSelectPrereq = (code: string) => {
    const found = enhancedCourses.find(c => c.codigo === code);
    if (found) {
      setSelectedCourse(found);
      // Hacer scroll para centrar el elemento seleccionado
      const cardEl = containerRef.current?.querySelector(`[data-course-code="${code}"]`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }
    }
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Malla **Curricular**" 
          center 
          subtitle="Explora el mapa interactivo del Plan de Estudios del Currículo 2018 estructurado por ciclos, prerequisitos y áreas curriculares." 
        />

        {/* Buscador e Indicadores */}
        <div className="max-w-6xl mx-auto mt-8 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Buscador */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Buscar curso..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white rounded-xl border border-gray-200 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filtro de Régimen */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType(filterType === 'Obligatorio' ? null : 'Obligatorio')}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  filterType === 'Obligatorio'
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                Obligatorios
              </button>
              <button
                onClick={() => setFilterType(filterType === 'Electivo' ? null : 'Electivo')}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  filterType === 'Electivo'
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                Electivos
              </button>
            </div>
          </div>

          {/* Filtros de Categorías */}
          <div className="flex flex-wrap gap-2 justify-center">
            {['General', 'Específica', 'De Especialidad'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(filterCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  filterCategory === cat
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={`inline-block w-2.5 h-2.5 rounded-full mr-1.5 ${getCategoryDot(cat)}`} />
                {getCategoryText(cat).split(' ')[0]} {getCategoryText(cat).split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Contenedor principal de malla y barra lateral */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-[1400px] mx-auto mt-6">
          
          {/* Malla Curricular con Scrollbar Horizontal */}
          <div className="flex-1 flex flex-col min-h-[600px] bg-white border border-gray-150 rounded-2xl relative overflow-hidden shadow-inner">
            
            {/* Controles de Zoom Flotantes */}
            <div className="absolute bottom-16 right-6 flex items-center gap-2 bg-white/95 backdrop-blur border border-gray-200 p-1.5 rounded-xl shadow-lg z-30 select-none">
              <button 
                onClick={() => setZoom(prev => Math.max(0.4, prev - 0.1))} 
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 active:scale-95 transition-all font-bold text-sm w-8 h-8 flex items-center justify-center border border-gray-100"
                title="Alejar (Ctrl + Rueda)"
              >
                -
              </button>
              <span className="text-xs font-mono font-bold text-gray-700 px-1 min-w-[44px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button 
                onClick={() => setZoom(prev => Math.min(1.2, prev + 0.1))} 
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-700 active:scale-95 transition-all font-bold text-sm w-8 h-8 flex items-center justify-center border border-gray-100"
                title="Acercar (Ctrl + Rueda)"
              >
                +
              </button>
              <div className="w-px h-5 bg-gray-200 mx-1" />
              <button 
                onClick={() => {
                  setZoom(0.6);
                  if (containerRef.current) {
                    containerRef.current.scrollLeft = 0;
                    containerRef.current.scrollTop = 0;
                  }
                }} 
                className="px-2.5 py-1.5 hover:bg-gray-100 border border-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase tracking-wider active:scale-95 transition-all"
                title="Ajustar vista"
              >
                Ajustar
              </button>
            </div>

            {/* Viewport de Scroll */}
            <div 
              ref={containerRef}
              className={`flex-1 overflow-auto custom-scrollbar p-6 relative select-none ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ maxHeight: '720px' }}
              onScroll={updatePositions}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              
              {/* Contenedor con tamaño escalado reservado en el layout */}
              <div style={{ width: 2950 * zoom, height: 880 * zoom, position: 'relative' }}>
                
                {/* Contenedor escalado visualmente */}
                <div
                  ref={zoomContainerRef}
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'top left',
                    width: 2950,
                    height: 880,
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                >
                  {/* Canvas SVG para curvas de prerequisitos */}
                  <svg 
                    className="absolute top-0 left-0 pointer-events-none z-0" 
                    style={{ width: 2950, height: 880 }}
                  >
                    <defs>
                      <marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#E2E8F0" />
                      </marker>
                      <marker id="arrow-prereq" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#D97706" />
                      </marker>
                      <marker id="arrow-subsequent" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
                      </marker>
                    </defs>

                    {/* Dibujar curvas */}
                    {Object.keys(positions).length > 0 && enhancedCourses.map(course => {
                      return course.prerrequisitos.map(prereqCode => {
                        const posStart = positions[prereqCode];
                        const posEnd = positions[course.codigo];

                        if (!posStart || !posEnd) return null;

                        const startX = posStart.x + posStart.w;
                        const startY = posStart.y + posStart.h / 2;
                        const endX = posEnd.x;
                        const endY = posEnd.y + posEnd.h / 2;

                        const cp1X = startX + 32;
                        const cp1Y = startY;
                        const cp2X = endX - 32;
                        const cp2Y = endY;

                        // Evaluar el estado de las conexiones
                        let strokeColor = "#F1F5F9";
                        let strokeWidth = 1.5;
                        let markerId = "arrow-gray";
                        let zIndexClass = "z-0";

                        if (activeFocusCode) {
                          const isPrereqMatch = activeFocusCode === course.codigo && prereqCode === selectedCourse?.codigo;
                          const isSubsequentMatch = activeFocusCode === prereqCode && course.codigo === selectedCourse?.codigo;
                          
                          // Si el curso origen es el seleccionado, resaltar conexión saliente
                          if (activeFocusCode === prereqCode) {
                            strokeColor = "#3B82F6"; // Azul para subsecuentes
                            strokeWidth = 2.5;
                            markerId = "arrow-subsequent";
                            zIndexClass = "z-10";
                          }
                          // Si el curso destino es el seleccionado, resaltar conexión entrante
                          else if (activeFocusCode === course.codigo) {
                            strokeColor = "#F59E0B"; // Ámbar para prerequisitos
                            strokeWidth = 2.5;
                            markerId = "arrow-prereq";
                            zIndexClass = "z-10";
                          } else {
                            strokeColor = "#F8FAFC"; // Muy tenue para no activos
                            strokeWidth = 0.8;
                          }
                        }

                        return (
                          <path
                            key={`${prereqCode}-${course.codigo}`}
                            d={`M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`}
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={strokeWidth}
                            markerEnd={`url(#${markerId})`}
                            className={`transition-all duration-300 ${zIndexClass}`}
                          />
                        );
                      });
                    })}
                  </svg>

                  {/* Grid de 10 columnas correspondientes a cada ciclo */}
                  <div className="flex gap-10 min-w-[2800px] h-full relative z-10 pointer-events-none">
                    {cycles.map(cycle => (
                      <div key={cycle.num} className="w-64 flex flex-col gap-4 pointer-events-auto">
                        {/* Cabecera del Ciclo */}
                        <div className="bg-primary text-white py-2 px-3 rounded-xl text-center shadow-sm shrink-0 border border-primary-dark">
                          <span className="text-[11px] font-black tracking-widest uppercase opacity-75">Ciclo</span>
                          <h4 className="font-display font-black text-sm">{cycle.rom}</h4>
                        </div>

                        {/* Cursos del Ciclo */}
                        <div className="flex flex-col gap-4 flex-grow">
                          {cycle.courses.map(course => {
                            const isSelected = selectedCourse?.codigo === course.codigo;
                            const isQueryMatch = searchQuery ? course.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || course.codigo.includes(searchQuery) : true;
                            const isFilterMatch = filterCategory ? course.categoria === filterCategory : true;
                            const isTypeMatch = filterType ? course.tipo === filterType : true;
                            
                            const isDimmed = activeFocusCode 
                              ? activeFocusCode !== course.codigo && 
                                !selectedCourse?.prerrequisitos.includes(course.codigo) &&
                                !(enhancedCourses.filter(c => c.prerrequisitos.includes(activeFocusCode)).map(c => c.codigo).includes(course.codigo))
                              : false;

                            const handleCardClick = () => {
                              if (Date.now() - lastDragTimeRef.current < 150) return;
                              setSelectedCourse(course);
                            };

                            return (
                              <motion.div
                                key={course.codigo}
                                data-course-code={course.codigo}
                                onClick={handleCardClick}
                                onMouseEnter={() => setHoveredCourseCode(course.codigo)}
                                onMouseLeave={() => setHoveredCourseCode(null)}
                                className={`p-4 rounded-xl border bg-white cursor-pointer select-none transition-all duration-300 flex flex-col justify-between h-[105px] border-l-4 shadow-sm hover:shadow-md ${
                                  isSelected
                                    ? 'border-primary shadow-md ring-2 ring-primary/20 scale-[1.02]'
                                    : isDimmed 
                                      ? 'opacity-35 border-gray-100'
                                      : isQueryMatch && isFilterMatch && isTypeMatch
                                        ? getCategoryColor(course.categoria)
                                        : 'opacity-20 border-gray-150'
                                }`}
                                whileHover={{ scale: isDimmed ? 1 : 1.02 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div>
                                  <div className="flex justify-between items-start gap-1.5">
                                    <span className="text-[9px] font-mono font-black text-gray-500 uppercase tracking-wider">
                                      Cod: {course.codigo}
                                    </span>
                                    <Badge variant={course.tipo === 'Obligatorio' ? 'primary' : 'gray'} className="text-[8px] font-bold py-0 px-1.5 shrink-0">
                                      {course.tipo === 'Obligatorio' ? 'O' : 'E'}
                                    </Badge>
                                  </div>
                                  <h5 className="font-display font-bold text-xs text-primary leading-tight mt-1 line-clamp-2">
                                    {course.nombre}
                                  </h5>
                                </div>
                                <div className="flex justify-between items-center mt-2 border-t border-gray-100/50 pt-1.5">
                                  <span className="text-[9px] text-gray-500 font-bold uppercase">
                                    {course.categoria === 'General' ? 'EG' : course.categoria === 'Específica' ? 'ES' : 'EP'}
                                  </span>
                                  <span className="text-[10px] font-black text-blue-deep bg-gold/20 px-2 py-0.5 rounded">
                                    {course.creditos} CR
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
            
            {/* Pie del viewport indicando arrastre */}
            <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-150 flex justify-between items-center text-xs text-gray-500 shrink-0">
              <span className="flex items-center gap-1.5 font-medium">
                <Info className="w-3.5 h-3.5 text-gray-400" />
                Arrastra o usa la rueda del mouse para moverte. Mantén presionado Ctrl + Rueda para hacer zoom.
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> General (EG)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Específica (ES)</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-400" /> Especialidad (EP)</span>
              </div>
            </div>
          </div>

          {/* Barra Lateral Persistente de Información */}
          <div className="w-full lg:w-96 shrink-0 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between self-start min-h-[500px]">
            <AnimatePresence mode="wait">
              {selectedCourse ? (
                /* Ficha de Detalles del Curso Seleccionado */
                <motion.div
                  key="selected-course"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col flex-grow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block bg-primary text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                      Ciclo {selectedCourse.cicloRom}
                    </span>
                    <button 
                      onClick={() => setSelectedCourse(null)}
                      className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="font-display font-black text-xl text-primary leading-tight mb-2">
                    {selectedCourse.nombre}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryColor(selectedCourse.categoria)}`}>
                      {getCategoryText(selectedCourse.categoria)}
                    </span>
                    <span className="text-[10px] bg-gray-100 text-gray-500 font-bold px-2.5 py-0.5 rounded border border-gray-200">
                      Código: {selectedCourse.codigo}
                    </span>
                  </div>

                  {/* Estadísticas de Horas y Créditos */}
                  <div className="grid grid-cols-4 gap-2 text-center mb-6">
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase">Créditos</p>
                      <p className="text-base font-black text-primary">{selectedCourse.creditos}</p>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase">Teoría</p>
                      <p className="text-base font-black text-primary">{selectedCourse.horas.teoria}h</p>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase">Práctica</p>
                      <p className="text-base font-black text-primary">{selectedCourse.horas.practica}h</p>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <p className="text-[9px] font-black text-gray-400 uppercase">Lab.</p>
                      <p className="text-base font-black text-primary">{selectedCourse.horas.laboratorio}h</p>
                    </div>
                  </div>

                  {/* Descripción de la Sumilla */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-600 mb-2">Descripción / Sumilla</h4>
                    <p className="text-gray-550 text-sm leading-relaxed text-justify">
                      {selectedCourse.descripcion}
                    </p>
                  </div>

                  {/* Conexiones / Prerequisitos en la Barra Lateral */}
                  <div className="border-t border-gray-100 pt-4 space-y-4">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-600 mb-2">Prerrequisitos</h4>
                      {selectedCourse.prerrequisitos.length > 0 ? (
                        <div className="flex flex-col gap-1.5">
                          {selectedCourse.prerrequisitos.map(code => {
                            const pre = enhancedCourses.find(c => c.codigo === code);
                            return (
                              <button
                                key={code}
                                onClick={() => handleSelectPrereq(code)}
                                className="text-left text-xs bg-amber-50/50 hover:bg-amber-50 text-amber-900 border border-amber-100 hover:border-amber-200 p-2 rounded-lg transition-colors flex items-center justify-between"
                              >
                                <span className="font-semibold line-clamp-1">{pre?.nombre}</span>
                                <span className="text-[9px] font-mono bg-amber-150 px-1 rounded shrink-0">{code}</span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-400 italic">No requiere de prerrequisitos.</p>
                      )}
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-600 mb-2">Cursos Posteriores</h4>
                      {enhancedCourses.filter(c => c.prerrequisitos.includes(selectedCourse.codigo)).length > 0 ? (
                        <div className="flex flex-col gap-1.5">
                          {enhancedCourses.filter(c => c.prerrequisitos.includes(selectedCourse.codigo)).map(post => (
                            <button
                              key={post.codigo}
                              onClick={() => handleSelectPrereq(post.codigo)}
                              className="text-left text-xs bg-blue-50/50 hover:bg-blue-50 text-blue-900 border border-blue-100 hover:border-blue-200 p-2 rounded-lg transition-colors flex items-center justify-between"
                            >
                              <span className="font-semibold line-clamp-1">{post.nombre}</span>
                              <span className="text-[9px] font-mono bg-blue-150 px-1 rounded shrink-0">{post.codigo}</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-400 italic">Curso terminal en su línea de prerrequisitos.</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Ficha de Información General de la Malla */
                <motion.div
                  key="general-info"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col flex-grow"
                >
                  <div>
                    <h3 className="font-display font-black text-xl text-primary mb-3">
                      Plan de Estudios
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 text-justify">
                      El plan de estudios de la Escuela Profesional de Estadística 2018 (con ajuste curricular vigente) está diseñado para formar ingenieros estadísticos capaces de desempeñarse en modelamiento, analítica y ciencia de datos.
                    </p>
                  </div>

                  {/* Resumen Estadístico */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-sm font-semibold text-gray-700">Duración de Carrera</span>
                      <span className="text-sm font-black text-primary">10 Ciclos</span>
                    </div>
                    <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-sm font-semibold text-gray-700">Total de Asignaturas</span>
                      <span className="text-sm font-black text-primary">60 cursos</span>
                    </div>
                    <div className="flex justify-between items-center p-3.5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-sm font-semibold text-gray-700">Créditos de Egresado</span>
                      <span className="text-sm font-black text-primary">216 créditos</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6 space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-600 mb-2">Descargas de Documentos</h4>
                    
                    <a 
                      href={`${import.meta.env.BASE_URL}docs/Plan_de_Estudios_2018.pdf`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-xl transition-all shadow-sm"
                    >
                      <Download className="w-4 h-4 text-gold" />
                      Descargar Plan de Estudios
                    </a>
                    
                    <a 
                      href={`${import.meta.env.BASE_URL}docs/Malla_Curricular_2018.pdf`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-550 border border-gray-200 text-gray-700 hover:text-gray-900 text-sm font-bold rounded-xl transition-all shadow-sm"
                    >
                      <Download className="w-4 h-4 text-gold" />
                      Descargar Malla Curricular
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}