import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { getDocenteSlug } from '../../utils/slugify';

/**
 * DocenteCard — Tarjeta con volteo 3D (flip) o estática (noFlip).
 * - Frente: cargo (grado) · línea separadora · nombre · curso principal (opcional).
 * - Reverso (si no es estática): su descripción académica.
 * - Estática: para personal administrativo, solo muestra foto, cargo y nombre sin volteo.
 */
interface Docente {
  grado: string;
  nombre: string;
  cursoPrincipal?: string;
  foto?: string | null;
  especialidades?: string[];
  descripcion?: string;
}

interface DocenteCardProps {
  docente: Docente;
  noFlip?: boolean;
}

export default function DocenteCard({ docente, noFlip = false }: DocenteCardProps) {
  if (noFlip) {
    return (
      <motion.div
        id={getDocenteSlug(docente.nombre)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="h-[340px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col"
      >
        {/* Cabecera de foto */}
        <div className="relative h-48 w-full bg-gradient-to-br from-primary to-blue-deep shrink-0 overflow-hidden border-[3px] border-primary rounded-t-2xl">
          {docente.foto ? (
            <img src={docente.foto} alt={docente.nombre} loading="lazy" className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <User className="w-16 h-16 text-gray-400" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>

        {/* Cargo · línea separadora · nombre */}
        <div className="flex flex-col flex-1 p-5 text-center justify-center">
          <p className="text-gold text-[10px] font-black uppercase tracking-[0.2em]">
            {docente.grado}
          </p>
          <div className="border-t border-gray-100 my-3" />
          <h4 className="font-display font-bold text-primary text-sm leading-tight px-1">
            {docente.nombre}
          </h4>
        </div>
      </motion.div>
    );
  }

  // Tarjeta interactiva con volteo 3D (para docentes)
  return (
    <motion.div
      id={getDocenteSlug(docente.nombre)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      tabIndex={0}
      aria-label={`${docente.grado} ${docente.nombre}. Curso principal: ${docente.cursoPrincipal}. Enfoca o pasa el cursor para ver la descripción.`}
      className="group h-[340px] rounded-2xl outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 target:ring-4 target:ring-gold target:ring-offset-4 target:scale-[1.03] transition-all duration-300 scroll-mt-[200px]"
    >
      <div className="relative h-full w-full transition-transform duration-1000 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">

        {/* ── FRENTE ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          {/* Cabecera de foto */}
          <div className="relative h-48 w-full bg-gradient-to-br from-primary to-blue-deep shrink-0 overflow-hidden border-[3px] border-primary rounded-t-2xl">
            {docente.foto ? (
              <img src={docente.foto} alt={docente.nombre} loading="lazy" className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          </div>

          {/* Cargo · línea separadora · nombre · categoría académica */}
          <div className="flex flex-col flex-1 p-5 text-center justify-center">
            <p className="text-gold text-[10px] font-black uppercase tracking-[0.2em]">
              {docente.grado}
            </p>
            <div className="border-t border-gray-100 my-3" />
            <h4 className="font-display font-bold text-primary text-sm leading-tight mb-1.5">
              {docente.nombre}
            </h4>
            {docente.cursoPrincipal && (
              <p className="text-gray-600 text-xs leading-relaxed">
                {docente.cursoPrincipal}
              </p>
            )}
          </div>
        </div>

        {/* ── REVERSO ── */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-primary to-blue-deep rounded-2xl shadow-lg overflow-hidden flex flex-col p-5 text-white">
          <div className="text-center shrink-0">
            <p className="text-gold text-[10px] font-black uppercase tracking-[0.2em]">
              {docente.grado}
            </p>
            <h4 className="font-display font-bold text-sm leading-tight mt-1">
              {docente.nombre}
            </h4>
            <div className="border-t border-white/20 my-3" />
          </div>
          {docente.descripcion && (
            <p className="text-xs text-white/90 leading-relaxed text-justify overflow-y-auto overscroll-contain custom-scrollbar flex-1 pr-1">
              {docente.descripcion}
            </p>
          )}
        </div>

      </div>
    </motion.div>
  );
}
