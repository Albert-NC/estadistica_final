import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Quote, Briefcase, Calendar, GraduationCap, Building2 } from 'lucide-react';

export default function CasosExito() {
  const cases = [
    {
      name: "Mg. Ana Sofía Benites",
      promo: "Promoción 2018",
      role: "Lead Data Scientist",
      company: "Interbank",
      quote: "La sólida base matemática y el rigor analítico que recibí en la UNT me permitieron adaptarme rápidamente al ecosistema de Big Data e Inteligencia Artificial en el sector financiero.",
      story: "Ana Sofía lidera actualmente un equipo multidisciplinario encargado del desarrollo de modelos predictivos de riesgo crediticio y comportamiento del consumidor utilizando Machine Learning avanzado. Tras graduarse de la UNT, completó una maestría en Ciencia de Datos en São Paulo, Brasil."
    },
    {
      name: "Lic. Carlos Alberto Minchola",
      promo: "Promoción 2019",
      role: "Senior Business Intelligence Analyst",
      company: "Rimac Seguros",
      quote: "Estadística es la carrera con mayor proyección estratégica. En la escuela aprendí que no se trata solo de procesar números, sino de traducir datos complejos en decisiones de negocio de alto impacto.",
      story: "Carlos se especializa en el diseño de tableros analíticos y modelos de propensión de compra para canales digitales de Rimac Seguros. Su formación le ha permitido liderar iniciativas de automatización y optimización de campañas de marketing."
    },
    {
      name: "Dra. María Fernanda Horna",
      promo: "Promoción 2016",
      role: "Consultora de Advanced Analytics",
      company: "McKinsey & Company",
      quote: "Haber estudiado en la Universidad Nacional de Trujillo me abrió las puertas de la consultoría estratégica internacional. El dominio de modelos probabilísticos y simulación computacional fue clave.",
      story: "María Fernanda asesora a grandes corporaciones en Latinoamérica en proyectos de transformación digital y optimización de cadenas de suministro mediante analítica predictiva. Obtuvo su Doctorado en Estadística Aplicada en México."
    },
    {
      name: "Lic. Jorge Luis Castillo",
      promo: "Promoción 2017",
      role: "Especialista en Diseños Muestrales",
      company: "INEI (Instituto Nacional de Estadística e Informática)",
      quote: "El rigor científico y el compromiso social de los docentes en la UNT nos preparan para afrontar desafíos a nivel nacional. Diseñar encuestas de gran envergadura requiere precisión metodológica extrema.",
      story: "Jorge forma parte del equipo técnico de la Dirección Nacional de Censos y Encuestas del INEI. Es responsable del diseño, selección y calibración de marcos muestrales para encuestas de hogares, empleo y salud pública a nivel nacional."
    }
  ];

  return (
    <div className="bg-light py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Cabecera */}
        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <SectionTitle
            title="Casos de **Éxito**"
            center
            subtitle="Conoce a nuestros egresados destacados que lideran proyectos de ciencia de datos, analítica estratégica e investigación en prestigiosas instituciones del país y del mundo."
          />
        </div>

        {/* Listado de Casos de Éxito */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-gray-150 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Marca decorativa */}
              <div className="absolute -top-6 -right-6 text-gray-100 opacity-20 pointer-events-none">
                <Quote className="w-32 h-32 transform rotate-180" />
              </div>

              <div>
                {/* Cabecera del profesional */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 text-primary p-3 rounded-full shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-black text-pucp-blue-dark">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 font-body mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.promo}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                      <span className="flex items-center gap-1 font-semibold text-primary">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cargo */}
                <div className="bg-light px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-6 border border-gray-100">
                  <Briefcase className="w-4 h-4 text-gold" />
                  <span className="text-sm font-bold text-pucp-blue-dark font-display">{item.role}</span>
                </div>

                {/* Frase / Testimonio Corto */}
                <div className="relative pl-6 border-l-4 border-gold mb-6 italic text-gray-700 font-body text-[15px] leading-relaxed">
                  <Quote className="w-4 h-4 text-gold opacity-50 absolute left-1 -top-2" />
                  <p className="pl-1">
                    "{item.quote}"
                  </p>
                </div>

                {/* Trayectoria */}
                <p className="text-gray-650 font-body text-[14px] leading-relaxed mb-6">
                  {item.story}
                </p>
              </div>

              {/* Botón / Footer de la tarjeta */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
                <span>Egresado de Estadística UNT</span>
                <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-[10px] tracking-wide uppercase">
                  Caso Destacado
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección Informativa / Convocatoria a Egresados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-pucp-blue-dark to-blue-deep text-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <div className="relative z-10 flex-1">
            <h3 className="text-xl md:text-2xl font-display font-bold mb-3">¿Eres egresado de Estadística UNT?</h3>
            <p className="text-gray-300 font-body text-sm md:text-base max-w-2xl leading-relaxed">
              Queremos seguir compartiendo los logros de nuestra comunidad. Si deseas compartir tu trayectoria profesional y ser parte de nuestros casos de éxito, ponte en contacto con nosotros.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="https://www.facebook.com/escuelaestadistica.ingenieriaestadistica?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-[#1877F2] px-6 py-2.5 rounded-full font-semibold font-display shadow-sm hover:shadow transition-all inline-flex items-center gap-2 text-sm"
            >
              Envíanos tu testimonio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
