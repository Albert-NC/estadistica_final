import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import PerfilIngresante from '../academico/PerfilIngresante';
import PerfilEgresado from '../academico/PerfilEgresado';

/**
 * Página agrupada "Perfiles". El navbar muestra "Perfil de ingreso" y "Perfil de
 * egreso" por separado; ambos llevan aquí (#ingreso / #egreso). Reutiliza el
 * contenido existente de cada perfil.
 */
export default function Perfiles() {
  return (
    <>
      <AnchoredSection id="ingreso">
        <PerfilIngresante />
      </AnchoredSection>
      <AnchoredSection id="egreso">
        <PerfilEgresado />
      </AnchoredSection>
    </>
  );
}
