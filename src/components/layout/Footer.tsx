import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ExternalLink, BookOpen, Briefcase } from 'lucide-react';
import { informacionContacto, redesSociales } from '../../constants/contacto';
import logo from '../../assets/unt1.png';

import { socialIcons, socialLabels } from '../icons/social';

// Libro de Reclamaciones oficial (plataforma del Estado peruano, UNT).
const LIBRO_RECLAMACIONES_URL = 'https://reclamos.servicios.gob.pe/?institution_id=247';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main footer body */}
      <div className="pt-14 pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

            {/* Columna 1: Identidad + Redes */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={logo} alt="Logo UNT" loading="lazy" className="h-14 w-auto object-contain drop-shadow brightness-200" />
                <div className="flex flex-col">
                  <span className="font-display font-bold leading-tight text-base text-white">
                    Estadística
                  </span>
                  <span className="text-white/60 text-xs uppercase tracking-wider">
                    UNT · Fac. Ciencias Físicas y Matemáticas
                  </span>
                </div>
              </div>
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-6">
                Formando profesionales en estadística de excelencia, con rigor científico y compromiso con el desarrollo del país.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 flex-wrap">
                {Object.entries(redesSociales).map(([red, url]) => (
                  <a
                    key={red}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={socialLabels[red] || red}
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                    aria-label={`Visitar ${socialLabels[red] || red}`}
                  >
                    {socialIcons[red] || <span className="text-xs font-bold uppercase">{red.charAt(0)}</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h3 className="font-display font-bold text-base mb-5 text-gold uppercase tracking-wider">
                Información
              </h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'Misión y Visión', to: '/nosotros/mision-vision' },
                  { label: 'Historia de la Escuela', to: '/nosotros/historia' },
                  { label: 'Plan de Estudios', to: '/academico/malla-curricular' },
                  { label: 'Perfil del Egresado', to: '/nosotros/perfiles#egreso' },
                  { label: 'Líneas de Investigación', to: '/investigacion/lineas' },
                  { label: 'Plana Docente', to: '/organizacion/docentes' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-150 text-sm flex items-center gap-1.5"
                    >
                      <span className="text-gold text-xs">›</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h3 className="font-display font-bold text-base mb-5 text-gold uppercase tracking-wider">
                Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-300 text-sm items-start">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{informacionContacto.direccion}</span>
                </li>
                <li className="flex gap-3 text-gray-300 text-sm items-center">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>{informacionContacto.telefonos.join(' / ')}</span>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <a href={`mailto:${informacionContacto.correo}`} className="text-gray-300 hover:text-white transition-colors">
                    {informacionContacto.correo}
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Horarios + Links institucionales */}
            <div>
              <h3 className="font-display font-bold text-base mb-5 text-gold uppercase tracking-wider">
                Horarios de Atención
              </h3>
              <div className="flex gap-3 text-gray-300 text-sm items-start mb-6">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-white font-semibold">Lunes a Viernes</p>
                  <p>08:00 – 13:00 hrs</p>
                  <p>14:00 – 16:00 hrs</p>
                </div>
              </div>
              <div className="space-y-2 border-t border-white/10 pt-5">
                <p className="text-gray-300 text-xs uppercase tracking-wider mb-3 font-semibold">
                  Portal Institucional
                </p>
                <a
                  href="https://www.unitru.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Portal UNT
                </a>
                <a
                  href="https://www.unitru.edu.pe/transparencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Transparencia
                </a>
                <a
                  href="https://sga.unitru.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Portal del Estudiante
                </a>
            </div>

          </div>

        </div>

        {/* Banners: Libro de Reclamaciones & Bolsa de Trabajo */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
            {/* Libro de Reclamaciones */}
            <a
              href={LIBRO_RECLAMACIONES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-5 w-full max-w-sm transition-all duration-300 group shadow-md"
            >
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                <BookOpen className="w-8 h-8 text-gold group-hover:scale-105 transition-transform" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-black text-sm uppercase tracking-wider text-white mb-0.5 group-hover:text-gold transition-colors">
                  Libro de Reclamaciones
                </h4>
                <p className="text-xs text-gray-300 leading-tight">
                  Formule sus quejas y reclamos sobre nuestro servicio.
                </p>
              </div>
            </a>

            {/* Bolsa de Trabajo */}
            <div
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 w-full max-w-sm shadow-md cursor-default"
            >
              <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-white/10 rounded-xl">
                <Briefcase className="w-8 h-8 text-gray-300" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-black text-sm uppercase tracking-wider text-white mb-0.5">
                  Bolsa de Trabajo
                </h4>
                <p className="text-xs text-gray-300 leading-tight">
                  Próximamente convocatorias y ofertas laborales.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-300">
          <p>© {currentYear} Escuela Profesional de Estadística · UNT. Todos los derechos reservados.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p>Ley de Transparencia N° 27806 — Acceso a la Información Pública</p>
            <a
              href={LIBRO_RECLAMACIONES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 rounded-md px-3 py-1.5 font-semibold text-white hover:bg-white/10 transition-colors shrink-0"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              Libro de Reclamaciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}