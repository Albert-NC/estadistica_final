import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Code, 
  Cpu, 
  Database, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Award,
  BarChart3
} from 'lucide-react';

export default function PorqueEstudiar() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Alta Empleabilidad",
      description: "El 97% de nuestros egresados se inserta exitosamente en el mercado laboral en los primeros meses. La analítica de datos es una de las competencias más valoradas globalmente."
    },
    {
      icon: Code,
      title: "Malla Curricular Moderna",
      description: "Domina las herramientas más demandadas en el mundo tecnológico: R, Python, SQL, Power BI, y algoritmos avanzados de Machine Learning y Big Data."
    },
    {
      icon: Cpu,
      title: "Enfoque en Inteligencia Artificial",
      description: "Aprende a diseñar y entrenar modelos predictivos avanzados, deep learning y minería de datos aplicada a la toma de decisiones empresariales y científicas."
    },
    {
      icon: Database,
      title: "Laboratorios Especializados",
      description: "Nuestros laboratorios están equipados con software estadístico de vanguardia y hardware potente para procesamiento de grandes volúmenes de datos."
    },
    {
      icon: GraduationCap,
      title: "Prestigio de la UNT",
      description: "Estudia en una de las universidades licenciadas más emblemáticas del Perú, con el respaldo académico e histórico de la Universidad Nacional de Trujillo."
    },
    {
      icon: Users,
      title: "Plana Docente Especializada",
      description: "Aprende de profesores con grados de maestría y doctorado, activos en investigación y consultoría pública y privada de alto nivel."
    }
  ];

  const statistics = [
    { value: "97%", label: "Tasa de Empleabilidad", description: "Egresados laborando en su especialidad" },
    { value: "S/ 3,500+", label: "Ingreso Promedio Inicial", description: "Según portales de empleo de tecnología y analítica" },
    { value: "10", label: "Semestres Académicos", description: "Con formación teórica-práctica integral" },
    { value: "100%", label: "Software Licenciado", description: "Acceso libre a herramientas profesionales" }
  ];

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Cabecera */}
        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <SectionTitle
            title="¿Por qué estudiar **Estadística** en la UNT?"
            center
            subtitle="Conviértete en el profesional clave de la era digital. Aprende a descifrar patrones en los datos para guiar el futuro de organizaciones y empresas."
          />
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-light p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col items-start"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-xl group-hover:bg-gold group-hover:text-blue-deep transition-colors mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-pucp-blue-dark mb-3 group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 font-body text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Sección de Estadísticas / Números */}
        <div className="bg-pucp-blue-dark text-white rounded-3xl p-10 md:p-16 max-w-6xl mx-auto relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/30 to-gold/10 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {statistics.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="pt-6 sm:pt-0 lg:px-6 flex flex-col justify-center first:pt-0"
              >
                <span className="text-4xl md:text-5xl font-display font-black text-gold mb-2 block">
                  {stat.value}
                </span>
                <span className="text-lg font-body font-bold text-white mb-1 block">
                  {stat.label}
                </span>
                <span className="text-xs text-gray-300 font-body leading-relaxed max-w-[200px] mx-auto block">
                  {stat.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Llamado a la Acción / Cierre */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-pucp-blue-dark mb-4">
            ¿Listo para dar el primer paso?
          </h3>
          <p className="text-gray-600 font-body text-base md:text-lg mb-8 leading-relaxed">
            La Escuela Profesional de Estadística de la UNT te ofrece las competencias, el soporte y la comunidad necesarios para destacar en un mercado laboral altamente competitivo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/academico/malla-curricular"
              className="bg-gold hover:bg-gold-dark text-blue-deep px-8 py-3 rounded-full font-bold font-display shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Ver Plan de Estudios
            </a>
            <a
              href="https://www.admisionunt.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-pucp-blue-dark border border-gray-200 px-8 py-3 rounded-full font-bold font-display shadow-sm hover:shadow transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              ¡Postula ya!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
