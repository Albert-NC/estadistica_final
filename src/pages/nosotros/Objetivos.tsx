import React from 'react';
import { motion } from 'framer-motion';
import { Check, GraduationCap, Building2 } from 'lucide-react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { objetivosEducativos, objetivosAcademicos } from '../../constants/identidad';

export default function Objetivos() {
  return (
    <>
      {/* ── Objetivos Educativos ── */}
      <AnchoredSection id="educativos">
        <div className="bg-white py-16 md:py-20 border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="w-full max-w-4xl mx-auto">
              <SectionTitle
                title="Objetivos **Educativos**"
                subtitle="Orientación del perfil profesional del Ingeniero Estadístico de la Universidad Nacional de Trujillo."
                center
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10 bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gold/20 text-gold rounded-lg p-2.5">
                    <GraduationCap className="w-6 h-6 text-[#C49308]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C49308] font-bold">
                      {objetivosEducativos.origen}
                    </h4>
                    <p className="text-gray-800 font-display font-bold text-lg md:text-xl">
                      {objetivosEducativos.contexto}
                    </p>
                  </div>
                </div>

                <ul className="space-y-5 mt-6">
                  {objetivosEducativos.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-primary/10 text-primary rounded-full p-1.5 flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                      </div>
                      <div className="text-gray-700 font-body text-base leading-relaxed">
                        <span className="font-extrabold text-primary mr-1">{idx + 1}.</span>
                        {item}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </AnchoredSection>

      {/* ── Objetivos Académicos ── */}
      <AnchoredSection id="academicos">
        <div className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="w-full max-w-4xl mx-auto">
              <SectionTitle
                title="Objetivos **Académicos**"
                subtitle="Compromisos y estrategias institucionales para garantizar una formación académica de alta calidad."
                center
              />

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10 bg-white p-6 md:p-10 rounded-2xl border border-gray-200/60 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 text-primary rounded-lg p-2.5">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-primary font-bold">
                      {objetivosAcademicos.origen}
                    </h4>
                    <p className="text-gray-800 font-display font-bold text-lg md:text-xl">
                      Lineamientos Académicos de Calidad
                    </p>
                  </div>
                </div>

                <ul className="space-y-5 mt-6">
                  {objetivosAcademicos.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-[#C49308]/15 text-[#C49308] rounded-full p-1.5 flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#C49308]" strokeWidth={3} />
                      </div>
                      <div className="text-gray-700 font-body text-base leading-relaxed">
                        <span className="font-extrabold text-[#C49308] mr-1">{idx + 1}.</span>
                        {item}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
