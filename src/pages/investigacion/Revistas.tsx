import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Award, FileText, CheckCircle2 } from 'lucide-react';

export default function Revistas() {
  const indexers = [
    { name: "Latindex Catálogo 2.0" },
    { name: "DOAJ" },
    { name: "Google Scholar" },
    { name: "Crossref (DOI)" },
    { name: "MIAR" }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Revista de Investigación **Estadística** (REDIES)"
          subtitle="Difusión científica de artículos originales, metodologías y aplicaciones de la ciencia estadística y de datos."
          center
        />

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Simulación de la Portada de la Revista */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[340px] aspect-[3/4] bg-gradient-to-br from-pucp-blue-dark to-blue-deep rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Círculos decorativos de fondo */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gold/10 blur-3xl" />

              {/* Cabecera de la Revista */}
              <div className="text-center z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gold/90 block mb-2">
                  Revista Científica UNT
                </span>
                <h3 className="text-2xl font-display font-black leading-tight tracking-tight uppercase border-b border-white/20 pb-4">
                  Revista de Investigación Estadística
                </h3>
              </div>

              {/* Gráfico central simulando Laptop y Gráfico (como en la imagen del usuario) */}
              <div className="my-6 flex justify-center items-center relative z-10">
                <div className="w-full max-w-[200px] aspect-video bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex flex-col items-center justify-center p-3 relative group-hover:scale-105 transition-transform duration-300">
                  {/* Pantalla de Laptop simulada con curva */}
                  <div className="w-full h-full bg-slate-950 rounded border border-slate-800 flex items-center justify-center relative overflow-hidden">
                    <svg className="w-full h-full opacity-80" viewBox="0 0 100 60">
                      {/* Curva 3D tipo campana de Gauss */}
                      <path
                        d="M 10 50 Q 50 10 90 50"
                        fill="none"
                        stroke="#E6AC09"
                        strokeWidth="3"
                      />
                      <path
                        d="M 20 50 Q 50 20 80 50"
                        fill="none"
                        stroke="#12377B"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    </svg>
                    {/* Barras 3D saliendo de la pantalla */}
                    <div className="absolute bottom-1 right-2 flex items-end gap-1">
                      <div className="w-2 h-4 bg-yellow-400 rounded-t" />
                      <div className="w-2 h-7 bg-blue-500 rounded-t" />
                      <div className="w-2 h-9 bg-green-500 rounded-t" />
                    </div>
                  </div>
                  {/* Teclado/base de la laptop */}
                  <div className="absolute -bottom-2 w-[110%] h-2 bg-slate-400 rounded-b shadow-md" />
                </div>
              </div>

              {/* Pie de la Portada */}
              <div className="text-center z-10">
                <div className="text-xs font-semibold text-gray-300">
                  Vol. 7 · Núm. 1 · 2025
                </div>
                <div className="text-[10px] text-gold/80 mt-1 uppercase tracking-widest font-black">
                  Facultad de CC. FF. MM.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Información del número actual y el enlace */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Tag Número Actual */}
            <span className="inline-block mb-3 text-xs font-black uppercase tracking-[0.18em] text-gold-dark bg-gold/10 px-3 py-1 rounded-full border border-gold/20 self-start">
              Número Actual
            </span>

            <h2 className="text-2xl md:text-3xl font-display font-black text-primary leading-tight mb-4">
              Vol. 7 Núm. 1 (2025): Revista de Investigación Estadística
            </h2>

            {/* Fecha de publicación */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
              <Calendar className="w-4 h-4 text-gold" />
              <span>Publicado: <strong className="font-bold text-gray-700">2025-12-06</strong></span>
            </div>

            {/* Descripción */}
            <p className="text-gray-600 font-body text-[15px] leading-relaxed mb-6">
              La <strong>Revista de Investigación Estadística (REDIES)</strong> es el principal órgano oficial de divulgación científica de la Escuela de Estadística de la Universidad Nacional de Trujillo. Tiene como propósito difundir trabajos científicos inéditos y originales que representen avances significativos en metodologías estadísticas, probabilidades, ciencia de datos y sus aplicaciones en áreas como economía, salud, ingeniería y ciencias sociales.
            </p>

            {/* Lista de características del número */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-650">Revisión por pares doble ciego.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-650">Publicación semestral de acceso abierto.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-650">Formatos PDF, HTML y XML.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-gray-650">Sin cargos por procesamiento de artículos (APC).</span>
              </div>
            </div>

            {/* Botón de redirección */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://revistas.unitru.edu.pe/index.php/REDIES"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-blue-deep px-8 py-3 rounded-full font-bold font-display shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Ir al Portal REDIES
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Indexación */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <span className="block text-[11px] font-black uppercase tracking-widest text-gray-500 mb-3">
                Indexada e Incluida en:
              </span>
              <div className="flex flex-wrap gap-2">
                {indexers.map((idxr, i) => (
                  <span
                    key={i}
                    className="bg-white text-gray-650 text-xs px-3 py-1.5 rounded-lg border border-gray-150 shadow-sm"
                  >
                    {idxr.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
