import React from 'react';
import { motion } from 'framer-motion';

interface NodoOrg {
  nombre: string;
  cargo?: string;
  hijos?: NodoOrg[];
}

interface OrganigramaNodeProps {
  nodo: NodoOrg;
  level?: number;
}

export default function OrganigramaNode({ nodo, level = 0 }: OrganigramaNodeProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: level * 0.15 }}
        className={`relative p-5 rounded-xl text-center min-w-[240px] max-w-[280px] z-10 shadow-lg border overflow-hidden
          ${level === 0 ? 'bg-primary text-white border-transparent ring-4 ring-primary/10' : 'bg-white border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'}`}
      >
        {level !== 0 && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold"></div>}
        
        <h4 className={`font-display font-bold leading-tight ${level === 0 ? 'text-white text-lg' : 'text-primary'}`}>{nodo.nombre}</h4>
        {nodo.cargo && <p className={`text-xs mt-2 font-semibold uppercase tracking-wide ${level === 0 ? 'text-gold' : 'text-gray-500'}`}>{nodo.cargo}</p>}
      </motion.div>
      
      {nodo.hijos && nodo.hijos.length > 0 && (
        <>
          <div className="w-px h-8 bg-primary/20"></div>
          <div className="border-t-2 border-primary/20 flex justify-center pt-8 relative mt-[-2px] gap-6">
            {nodo.hijos.map((hijo, idx) => (
              <div key={idx} className="flex flex-col items-center relative px-2">
                <div className="absolute top-[-34px] w-px h-8 bg-primary/20"></div>
                <OrganigramaNode nodo={hijo} level={level + 1} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}