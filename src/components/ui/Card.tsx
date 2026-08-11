import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverShadow?: boolean;
}

export function Card({ children, className, hoverShadow = false, ...props }: CardProps) {
  if (hoverShadow) {
    return (
      <div 
        className={clsx(
          'group relative bg-white rounded-xl border border-gray-100 transition-[border-color] duration-300',
          className?.replace(/\boverflow-hidden\b/g, '')
                  .replace(/\bhover:shadow-lg\b/g, '')
                  .replace(/\btransition-shadow\b/g, '')
        )} 
        {...props}
      >
        {/* Capa de sombra acelerada por hardware (compositor de GPU) */}
        <div className="absolute inset-0 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none will-change-[opacity] z-0" />
        
        {/* Contenedor interno que conserva el recorte (overflow-hidden) */}
        <div className="relative flex flex-col flex-1 rounded-xl overflow-hidden z-10 bg-white h-full w-full">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={clsx('bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden', className)} 
      {...props}
    >
      {children}
    </div>
  );
}