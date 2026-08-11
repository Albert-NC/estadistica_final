import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface Publicacion {
  titulo: string;
  autores: string;
  revista: string;
  año: number | string;
  url: string;
  pdf?: string;
  resumen?: string;
}

interface PublicacionItemProps {
  publicacion: Publicacion;
  index: number;
}

export default function PublicacionItem({ publicacion, index }: PublicacionItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Franja de color superior */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary" />

      <div className="p-6 md:p-8">
        {/* Etiqueta de revista */}
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-secondary shrink-0" />
          <span className="text-xs font-bold text-secondary uppercase tracking-wide">
            {publicacion.revista}
          </span>
        </div>

        {/* Título */}
        <h3 className="text-lg md:text-xl font-display font-bold text-primary mb-3 leading-snug">
          {publicacion.titulo}
        </h3>

        {/* Autores y año */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5" />
            <span className="font-semibold text-gray-700">{publicacion.autores}</span>
          </span>
          <span className="text-gold font-bold">({publicacion.año})</span>
        </div>

        {/* Resumen expandible */}
        {publicacion.resumen && (
          <div className="mb-5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-sm text-primary font-semibold hover:text-secondary transition-colors mb-2"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {expanded ? 'Ocultar resumen' : 'Ver resumen'}
            </button>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-gray-600 text-sm leading-relaxed border-l-4 border-gold pl-4 italic"
              >
                {publicacion.resumen}
              </motion.p>
            )}
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-wrap gap-3">
          {publicacion.pdf && (
            <a
              href={publicacion.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-colors shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              Descargar PDF
            </a>
          )}
          <a
            href={publicacion.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 hover:border-primary hover:text-primary px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver en revista
          </a>
        </div>
      </div>
    </motion.div>
  );
}