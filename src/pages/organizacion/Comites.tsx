import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { FileText, Calendar, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

interface Integrante {
  nombre: string;
  cargo: string;
}

interface ComiteData {
  id: string;
  titulo: string;
  descripcion: string;
  resolucion?: string;
  fechaResolucion?: string;
  pdfUrl?: string;
  integrantes?: Integrante[];
  enConstruccion?: boolean;
}

const COMITES: ComiteData[] = [
  {
    id: 'calidad',
    titulo: 'Comité de **Calidad**',
    descripcion: 'Garantiza la autoevaluación, acreditación y mejora continua de la calidad académica del programa de estudios de Estadística.',
    resolucion: 'Resolución de Decanato N° 175-2026/FCFYM-Dec.',
    fechaResolucion: '03 de agosto de 2026',
    pdfUrl: '/docs/resoluciones/RES. 175-2026 COMITE DE CALIDAD DE ESTADÍSTICA.pdf',
    integrantes: [
      { nombre: 'Ms. Silvana América Sánchez Pereda', cargo: 'Presidenta' },
      { nombre: 'Dra. Aurora Rosa Neciosup Obando', cargo: 'Secretaria' },
      { nombre: 'Dra. María Teresita Del Niño Jesús Rojas García', cargo: 'Miembro docente' },
      { nombre: 'Ms. Martha Renee Cardoso Vigil', cargo: 'Miembro docente' },
      { nombre: 'QF. Yessica Carmen Durand Rodríguez', cargo: 'Miembro administrativo' },
      { nombre: 'Ms. Jaime Antenor Risco Mozo', cargo: 'Miembro grupo de interés' },
      { nombre: 'Ms. Carla Elizabeth Vejarano Rodas', cargo: 'Miembro grupo de interés' },
      { nombre: 'Est. Gabriela de los Ángeles Mariños Cruz', cargo: 'Miembro estudiantil' },
      { nombre: 'Est. Michelle Eduarda Ochoa Rivasplata', cargo: 'Miembro estudiantil' },
    ]
  },
  {
    id: 'coteccu',
    titulo: 'COTECCU',
    descripcion: 'Comité Técnico de Currículo de la Escuela de Estadística. Encargado de planificar, evaluar y actualizar la malla curricular y los planes de estudio del programa.',
    resolucion: 'Resolución Rectoral N° 0647-2026/UNT',
    fechaResolucion: '05 de mayo de 2026',
    pdfUrl: '/docs/resoluciones/RR-N-0647-2026-UNT.pdf',
    integrantes: [
      { nombre: 'Dr. Carlos Alberto Minchón Medina', cargo: 'Presidente' },
      { nombre: 'Dr. Carlos Alfonso Risco Dávila', cargo: 'Miembro' },
      { nombre: 'Dra. Rosa Deidamia Gutiérrez de Alarcón', cargo: 'Miembro' },
      { nombre: 'Adm. Yessica Carmen Durand Rodríguez', cargo: 'Miembro' },
      { nombre: 'Est. Verónica Isabel Rodríguez Castro', cargo: 'Miembro Estudiantil' },
      { nombre: 'Est. Carolina Gisel Quintana Velazco', cargo: 'Miembro Estudiantil' },
      { nombre: 'Est. Johann Brandon Stefano Gamarra Loyaga', cargo: 'Miembro Estudiantil' },
    ]
  },
  {
    id: 'consejeria',
    titulo: 'Consejería y **tutoría**',
    descripcion: 'Brinda apoyo integral y acompañamiento académico, social y emocional a los estudiantes de la Escuela Profesional de Estadística.',
    resolucion: 'Resolución de Decanato N° 081-2026/FCFYM-Dec.',
    fechaResolucion: '01 de abril de 2026',
    pdfUrl: '/docs/resoluciones/RES. 081-2026 RATIFICAR EL COMITE TUTORIA Y CONSEJERÍA ESCUELA DE ESTADISTICA.pdf',
    integrantes: [
      { nombre: 'MsC. Aurora Rosa Neciosup Obando', cargo: 'Presidenta' },
      { nombre: 'Dra. Daphne Jannet Timaná Palacios', cargo: 'Secretaria' },
      { nombre: 'MsC. Maria Isabel Izquierdo Henriquez', cargo: 'Vocal' },
    ]
  },
  {
    id: 'egresado',
    titulo: 'Seguimiento al **Egresado**',
    descripcion: 'Mantiene el vínculo institucional y realiza el monitoreo de la inserción laboral y el desarrollo profesional de nuestros egresados.',
    resolucion: 'Resolución de Decanato N° 173-2026/FCFYM-Dec.',
    fechaResolucion: '30 de julio de 2026',
    pdfUrl: '/docs/resoluciones/RES. 173-2026 COMITE DE SEGUIMIENTO DEL EGRESADO DE ESC DE ESTADISTICA.pdf',
    integrantes: [
      { nombre: 'Dr. Roger Demetrio Reyna Segura', cargo: 'Presidente' },
      { nombre: 'MsC. Irvin Eduardo Cabrera Pinedo', cargo: 'Secretario' },
      { nombre: 'Q.F. Yessica Carmen Durand Rodríguez', cargo: 'Miembro Administrativo' },
    ]
  }
];

export default function Comites() {
  return (
    <>
      {COMITES.map((comite, idx) => (
        <AnchoredSection key={comite.id} id={comite.id}>
          <div className={`${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'} py-16 md:py-20 border-b border-gray-100`}>
            <div className="container mx-auto px-4 md:px-8">
              {/* Encabezado del Comité */}
              <div className="max-w-4xl mx-auto text-center mb-10">
                <SectionTitle title={comite.titulo} center />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3 max-w-2xl mx-auto">
                  {comite.descripcion}
                </p>

                {comite.resolucion && (
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 mt-5 px-4 py-2.5 bg-primary/5 border border-primary/10 rounded-2xl text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                    <span>
                      Aprobado con:{' '}
                      <strong className="font-semibold text-primary">{comite.resolucion}</strong> (
                      {comite.fechaResolucion})
                    </span>
                    {comite.pdfUrl && (
                      <a
                        href={comite.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold hover:bg-[#C49308] text-blue-deep rounded-lg font-bold text-xs transition-colors ml-2"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Ver PDF
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Miembros del Comité */}
              {comite.integrantes && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {comite.integrantes.map((member, mIdx) => {
                    const cargoLower = member.cargo.toLowerCase();
                    const isLeader = cargoLower.includes('presiden') || cargoLower.includes('secretar');
                    return (
                      <motion.div
                        key={mIdx}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: mIdx * 0.05, duration: 0.35 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl border border-gray-150 hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(230,172,9,0.06)] transition-all duration-300 p-6 flex flex-col justify-between"
                      >
                        <div>
                          <span
                            className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider mb-3 ${
                              isLeader ? 'bg-gold/15 text-[#C49308]' : 'bg-primary/10 text-primary'
                            }`}
                          >
                            {member.cargo}
                          </span>
                          <h4 className="font-display font-black text-primary text-base leading-snug">
                            {member.nombre}
                          </h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </AnchoredSection>
      ))}
    </>
  );
}
