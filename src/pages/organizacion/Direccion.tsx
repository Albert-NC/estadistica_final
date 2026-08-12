import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import DireccionEscuela from '../autoridades/Direccion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import AutoridadCard from '../../components/personas/AutoridadCard';
import { directorDepartamento } from '../../constants/autoridades';

/**
 * Página agrupada "Dirección". El navbar muestra "Director de escuela" y "Director
 * de departamento" por separado; ambos llevan aquí (#escuela / #departamento).
 */
export default function Direccion() {
  return (
    <>
      <AnchoredSection id="escuela">
        <DireccionEscuela />
      </AnchoredSection>
      <AnchoredSection id="departamento">
        <div className="bg-gray-50 py-16 md:py-20 border-t border-gray-150">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle title="Director de **Departamento**" center subtitle="Autoridad encargada de dirigir las actividades académicas, de investigación y del cuerpo docente del Departamento." />
            
            <div className="max-w-3xl mx-auto mt-8">
              <AutoridadCard autoridad={directorDepartamento} principal={true} />
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
