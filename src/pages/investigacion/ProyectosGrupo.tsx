import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import Proyectos from './Proyectos';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { GraduationCap, ExternalLink } from 'lucide-react';

/**
 * Página agrupada "Proyectos". El navbar muestra "Proyectos de investigación" y
 * "Proyectos y tesis" por separado; ambos llevan aquí (#investigacion / #tesis).
 */
export default function ProyectosGrupo() {
  return (
    <>
      <AnchoredSection id="investigacion">
        <Proyectos />
      </AnchoredSection>
      <AnchoredSection id="tesis">
        <div className="bg-gray-50 py-16 md:py-20 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              {/* Icono decorativo */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
                <GraduationCap className="w-8 h-8" />
              </div>

              <SectionTitle 
                title="Proyectos y **tesis**" 
                center 
                subtitle="Consulta los proyectos de investigación, tesis de pregrado y posgrado desarrollados por los estudiantes y docentes de la Escuela Profesional de Estadística en el Repositorio Institucional." 
              />

              <div className="mt-8">
                <a 
                  href="https://repositorio.unitru.edu.pe/collections/beb24350-804a-4da6-a293-b4e77db91771/search"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-[#C49308] text-blue-deep font-extrabold px-8 py-4 rounded-xl text-base transition-colors shadow-md hover:shadow-lg"
                >
                  Ver Repositorio de Tesis
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
