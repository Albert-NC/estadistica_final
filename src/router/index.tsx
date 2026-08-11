import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingAdmissions from '../components/layout/FloatingAdmissions';
import ScrollToHash from '../components/ScrollToHash';
import { Loader } from '../components/ui/Loader';

// Inicio cargado de forma eager (landing page — mejor LCP)
import Inicio from '../pages/Inicio';

// Todas las demás páginas cargadas con code-splitting (lazy)
const Noticias = lazy(() => import('../pages/Noticias'));
const Contacto = lazy(() => import('../pages/Contacto'));
const NotFound = lazy(() => import('../pages/NotFound'));
const EnConstruccion = lazy(() => import('../components/layout/EnConstruccion'));

// Módulo: Nosotros
const NosotrosIndex = lazy(() => import('../pages/nosotros/index'));
const Historia = lazy(() => import('../pages/nosotros/Historia'));
const MisionVision = lazy(() => import('../pages/nosotros/MisionVision'));
const Objetivos = lazy(() => import('../pages/nosotros/Objetivos'));
const Perfiles = lazy(() => import('../pages/nosotros/Perfiles'));

// Módulo: Organización
const OrganizacionIndex = lazy(() => import('../pages/organizacion/index'));
const OrganizacionDireccion = lazy(() => import('../pages/organizacion/Direccion'));
const Comites = lazy(() => import('../pages/organizacion/Comites'));

// Módulo: Académico
const AcademicoIndex = lazy(() => import('../pages/academico/index'));
const PlanEstudios = lazy(() => import('../pages/academico/PlanEstudios'));
const Titulacion = lazy(() => import('../pages/academico/Titulacion'));
const Laboratorios = lazy(() => import('../pages/academico/Laboratorios'));
const Biblioteca = lazy(() => import('../pages/academico/Biblioteca'));

// Módulo: Investigación
const InvestigacionIndex = lazy(() => import('../pages/investigacion/index'));
const Lineas = lazy(() => import('../pages/investigacion/Lineas'));
const Publicaciones = lazy(() => import('../pages/investigacion/Publicaciones'));
const Revistas = lazy(() => import('../pages/investigacion/Revistas'));
const ProyectosGrupo = lazy(() => import('../pages/investigacion/ProyectosGrupo'));
const Convenios = lazy(() => import('../pages/investigacion/convenios'));



// Páginas reutilizadas
const Docentes = lazy(() => import('../pages/autoridades/Docentes'));
const Organigrama = lazy(() => import('../pages/autoridades/Organigrama'));

// Módulo: Admisión (enlazado desde el panel lateral)
const GuiaPostulante = lazy(() => import('../pages/admision/GuiaPostulante'));
const Resoluciones = lazy(() => import('../pages/admision/Resoluciones'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <FloatingAdmissions />
      <div className="flex flex-col min-h-[100svh]">
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Inicio */}
              <Route path="/" element={<Inicio />} />

              {/* ── Nosotros ── */}
              <Route path="/nosotros" element={<NosotrosIndex />}>
                <Route index element={<Historia />} />
                <Route path="historia" element={<Historia />} />
                <Route path="mision-vision" element={<MisionVision />} />
                <Route path="objetivos" element={<Objetivos />} />
                <Route path="perfiles" element={<Perfiles />} />
              </Route>

              {/* ── Organización ── */}
              <Route path="/organizacion" element={<OrganizacionIndex />}>
                <Route index element={<OrganizacionDireccion />} />
                <Route path="direccion" element={<OrganizacionDireccion />} />
                <Route path="docentes" element={<Docentes />} />
                <Route path="administrativos" element={<EnConstruccion titulo="Administrativos" />} />
                <Route path="comites" element={<Comites />} />
                <Route path="estructura" element={<Organigrama />} />
              </Route>

              {/* ── Académico ── */}
              <Route path="/academico" element={<AcademicoIndex />}>
                <Route index element={<PlanEstudios />} />
                <Route path="malla-curricular" element={<PlanEstudios />} />
                <Route path="laboratorios" element={<Laboratorios />} />
                <Route path="biblioteca" element={<Biblioteca />} />
                <Route path="responsabilidad-social" element={<EnConstruccion titulo="Responsabilidad **Social**" />} />
                <Route path="convenios" element={<Convenios />} />
                <Route path="movilidad" element={<EnConstruccion titulo="Movilidad" />} />
                {/* Ruta conservada (Titulación), fuera del menú */}
                <Route path="titulacion" element={<Titulacion />} />
              </Route>

              {/* ── Investigación ── */}
              <Route path="/investigacion" element={<InvestigacionIndex />}>
                <Route index element={<Lineas />} />
                <Route path="lineas" element={<Lineas />} />
                <Route path="publicaciones" element={<Publicaciones />} />
                <Route path="revistas" element={<Revistas />} />
                <Route path="proyectos" element={<ProyectosGrupo />} />
              </Route>



              {/* ── Admisión (panel lateral) ── */}
              <Route path="/admision/guia" element={<GuiaPostulante />} />
              <Route path="/admision/resoluciones" element={<Resoluciones />} />

              {/* Conservadas fuera del menú */}
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/contacto" element={<Contacto />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
