import React, { useEffect } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import EnConstruccion from '../../components/layout/EnConstruccion';
import { GraduationCap } from 'lucide-react';

export default function GuiaPostulante() {
  useEffect(() => {
    document.title = 'Guía del postulante | Admisión | Estadística · UNT';
  }, []);

  return (
    <PageWrapper>
      <PageHero
        title="Guía del postulante"
        subtitle="Todo lo que necesitas saber para postular a la Escuela de Estadística."
        icon={GraduationCap}
        breadcrumbs={[{ label: 'Admisión' }, { label: 'Guía del postulante' }]}
      />
      <EnConstruccion titulo="Guía del postulante" />
    </PageWrapper>
  );
}
