import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';
import DireccionEscuela from '../autoridades/Direccion';

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
        <EnConstruccion titulo="Director de **departamento**" bg="bg-gray-50" />
      </AnchoredSection>
    </>
  );
}
