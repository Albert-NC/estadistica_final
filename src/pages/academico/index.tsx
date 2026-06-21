import React from 'react';
import SectionLayout from '../../components/layout/SectionLayout';
import { GraduationCap } from 'lucide-react';

export default function AcademicoIndex() {
  return (
    <SectionLayout
      title="Área Académica"
      subtitle="Descubre todo lo relacionado con tu formación profesional en [Nombre de la Especialidad]."
      icon={GraduationCap}
      basePath="/academico"
      breadcrumbs={[{ label: 'Académico' }]}
    />
  );
}
