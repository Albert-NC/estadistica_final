import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import biblioteca1 from '../../assets/biblioteca_1.png';
import biblioteca2 from '../../assets/biblioteca_2.png';

export default function Biblioteca() {
  const images = [biblioteca1, biblioteca2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

          {/* Carrusel derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-md border border-gray-150 bg-gray-50 aspect-[4/3] w-full flex justify-center items-center group order-1 lg:order-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  alt={`Biblioteca Slide ${currentIndex + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Controles de flechas */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary border border-gray-150 flex items-center justify-center shadow hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Anterior imagen"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary border border-gray-150 flex items-center justify-center shadow hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-gold w-6' : 'bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
