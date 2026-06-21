import React, { useEffect } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import EnConstruccion from '../../components/layout/EnConstruccion';
import { GraduationCap } from 'lucide-react';

export default function GuiaPostulante() {
  useEffect(() => {
    document.title = 'Guía del postulante | Admisión | [Nombre de la Escuela] · UNT';
  }, []);

  return (
    <PageWrapper>
      <PageHero
        title="Guía del **Postulante**"
        subtitle="Todo lo que necesitas saber para postular a la Escuela de [Nombre de la Escuela]."
        icon={GraduationCap}
        breadcrumbs={[{ label: 'Admisión' }, { label: 'Guía del postulante' }]}
      />
      <EnConstruccion titulo="Guía del postulante" />
    </PageWrapper>
  );
}
