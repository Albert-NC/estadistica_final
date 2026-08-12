import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';

export default function Biblioteca() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Biblioteca de la **Escuela**"
          subtitle="Recursos bibliográficos y espacios óptimos para el estudio, investigación y desarrollo académico."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-12 md:mt-16">
          {/* Información izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <span className="bg-gold/15 text-gold-dark px-3.5 py-1 rounded-full text-[10px] tracking-widest uppercase font-black w-max mb-4">
              Estudio e investigación
            </span>

            <h3 className="text-4xl md:text-5xl font-display font-black text-primary leading-none mb-1">
              Biblioteca
            </h3>

            <div className="flex gap-1.5 my-3">
              <span className="w-10 h-1 bg-gold rounded-full" />
              <span className="w-2.5 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-gray-500 font-display font-bold text-sm md:text-base mb-6">
              Un espacio siempre necesario y de agrado.
            </p>

            <div className="space-y-4 text-gray-650 font-body text-sm md:text-base leading-relaxed">
              <p>
                Una buena biblioteca es un espacio siempre necesario y de agrado porque conlleva allí las tesis y el conocimiento de libros fundamentales para la carrera.
              </p>
              <p>
                En este espacio podrás prestar libros, estudiarlos en un ambiente silencioso y acceder a material bibliográfico especializado en estadística y ciencia de datos.
              </p>
            </div>
          </motion.div>

          {/* Espacio reservado para la imagen derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden border border-dashed border-gray-300 bg-gray-50 aspect-[4/3] w-full flex justify-center items-center order-1 lg:order-2"
          >
            <span className="text-gray-400 font-display text-sm font-semibold">
              Espacio reservado para imagen / carrusel
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
