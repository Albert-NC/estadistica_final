import React from 'react';
import SectionLayout from '../../components/layout/SectionLayout';
import { Briefcase } from 'lucide-react';

export default function EmpleabilidadIndex() {
  return (
    <SectionLayout
      title="Empleabilidad"
      subtitle="Conoce el impacto laboral, beneficios de la carrera y casos de éxito de nuestros graduados."
      icon={Briefcase}
      basePath="/empleabilidad"
      breadcrumbs={[{ label: 'Empleabilidad' }]}
    />
  );
}
