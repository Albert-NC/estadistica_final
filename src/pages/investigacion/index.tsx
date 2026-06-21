import React from 'react';
import SectionLayout from '../../components/layout/SectionLayout';
import { FlaskConical } from 'lucide-react';

export default function InvestigacionIndex() {
  return (
    <SectionLayout
      title="Investigación"
      subtitle="Nuestros aportes al conocimiento pedagógico y científico de la educación."
      icon={FlaskConical}
      basePath="/investigacion"
      breadcrumbs={[{ label: 'Investigación' }]}
    />
  );
}
