import React from 'react';
import SectionLayout from '../../components/layout/SectionLayout';
import { BookHeart } from 'lucide-react';

export default function NosotrosIndex() {
  return (
    <SectionLayout
      title="Sobre Nosotros"
      subtitle="Conoce la identidad, valores e historia de la Escuela de Estadística."
      icon={BookHeart}
      basePath="/nosotros"
      breadcrumbs={[{ label: 'Nosotros' }]}
    />
  );
}
