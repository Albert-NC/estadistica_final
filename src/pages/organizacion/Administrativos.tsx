import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import DocenteCard from '../../components/personas/DocenteCard';
import { administrativos } from '../../constants/administrativos';

export default function Administrativos() {
  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Personal **Administrativo**"
          subtitle="Equipo de soporte y gestión comprometido con el funcionamiento de nuestra Escuela."
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-12 max-w-7xl mx-auto">
          {administrativos.map((personal, idx) => (
            <DocenteCard key={idx} docente={personal} noFlip={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
