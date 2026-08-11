import React from 'react';
import SectionLayout from '../../components/layout/SectionLayout';
import { Users } from 'lucide-react';

export default function AutoridadesIndex() {
  return (
    <SectionLayout
      title="Autoridades y Docentes"
      subtitle="Conoce a los profesionales encargados de liderar la educación y la enseñanza."
      icon={Users}
      basePath="/autoridades"
      breadcrumbs={[{ label: 'Autoridades' }]}
    />
  );
}
