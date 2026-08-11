import React from 'react';

export default function MapaUbicacion() {
  return (
    <div className="w-full h-64 md:h-full min-h-[400px] bg-gray-200 relative overflow-hidden">
      <iframe 
        title="Mapa de Ubicación de la Universidad"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.765691093155!2d-77.0504781!3d-12.0601955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzM2LjciUyA3N8KwMDInNjEuNyJX!5e0!3m2!1ses!2spe!4v1614138128527!5m2!1ses!2spe" 
        className="absolute top-0 left-0 w-full h-full border-0" 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}