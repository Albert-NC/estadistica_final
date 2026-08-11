import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import laboratorioMecImg from '../../assets/laboratorio_mec.png';

export default function Laboratorios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Nuestros **Laboratorios**"
          subtitle="Espacios equipados con tecnología y software especializado para la formación de nuestros estudiantes."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-12 md:mt-16">
          {/* Imagen izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-md border border-gray-150 bg-gray-50 flex justify-center items-center"
          >
            <img 
              src={laboratorioMecImg} 
              alt="MEC Software (SQL & IBM SPSS Statistics)" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </motion.div>

          {/* Información derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="bg-gold/15 text-gold-dark px-3.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-black w-max mb-4">
              Laboratorio
            </span>
            
            <h3 className="text-4xl md:text-5xl font-display font-black text-primary leading-none mb-1">
              MEC
            </h3>
            
            <div className="flex gap-1.5 my-3">
              <span className="w-10 h-1 bg-gold rounded-full" />
              <span className="w-2.5 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-gray-500 font-display font-bold text-sm md:text-base mb-6">
              (Módulo Estadístico Computacional)
            </p>

            <p className="text-gray-650 font-body text-sm md:text-base mb-8 leading-relaxed">
              Contamos con <strong className="text-primary font-bold">2 módulos estadísticos computacionales</strong> donde los estudiantes practican con software estandarizado de la industria para el análisis y toma de decisiones.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gold font-black text-xl leading-none mt-0.5">•</span>
                <p className="text-gray-650 font-body text-sm md:text-base leading-relaxed">
                  <strong className="text-primary font-bold">R</strong>: Software libre líder mundial para el cálculo y análisis estadístico avanzado.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-black text-xl leading-none mt-0.5">•</span>
                <p className="text-gray-650 font-body text-sm md:text-base leading-relaxed">
                  <strong className="text-primary font-bold">SQL</strong>: Lenguaje fundamental para la consulta, estructuración y manipulación de bases de datos relacionales.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-black text-xl leading-none mt-0.5">•</span>
                <p className="text-gray-650 font-body text-sm md:text-base leading-relaxed">
                  <strong className="text-primary font-bold">SPSS (IBM)</strong>: Herramienta robusta y de interfaz amigable para análisis predictivo y estadístico en ciencias sociales y empresariales.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-black text-xl leading-none mt-0.5">•</span>
                <p className="text-gray-650 font-body text-sm md:text-base leading-relaxed">
                  <strong className="text-primary font-bold">SAS</strong>: Suite de software empresarial de alto rendimiento para analítica avanzada, inteligencia de negocios y gestión de datos masivos.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
