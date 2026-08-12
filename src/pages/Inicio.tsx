import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { YoutubeVideo } from '../components/ui/YoutubeVideo';
import { BookOpen, Users, FlaskConical, GraduationCap, Handshake, ArrowRight, Calendar, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import frontImage from '../assets/2023fotoestadistica.jpg';
import frontImage2 from '../assets/fondo3.jpg';
import frontImage3 from '../assets/frontunt.webp';
import bibliotecaImg from '../assets/biblioteca_1.png';
import laboratorioMecImg from '../assets/laboratorio_mec.png';
import libroReclamacionesImg from '../assets/Bolsadetrabajo.png';
import { noticias } from '../constants/noticias';
import { director } from '../constants/autoridades';
import useHeaderHeight from '../hooks/useHeaderHeight';

export default function Inicio() {
  const videoId = ""; // Colocar el ID de YouTube aquí si se desea mostrar el video al lado (ej: "TU_ID_DE_VIDEO")
  const hasVideo = !!videoId;

  // Alto del header sticky (varía con el banner de avisos y el responsive).
  const headerHeight = useHeaderHeight();

  // Mide el alto de la franja de cifras para descontarlo del hero, de modo que
  // la franja aparezca completa al entrar (sin scroll) y no se mueva al cerrar
  // el banner de avisos. Se recalcula en resize/reflow (1 fila en escritorio,
  // 2 en móvil).
  const cifrasRef = useRef<HTMLElement>(null);
  const [cifrasHeight, setCifrasHeight] = useState(0);
  useLayoutEffect(() => {
    const el = cifrasRef.current;
    if (!el) return;
    const update = () => setCifrasHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Carousel states for the news section
  const [newsIndex, setNewsIndex] = useState(0);
  const [visibleNews, setVisibleNews] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleNews(1);
      } else if (window.innerWidth < 1024) {
        setVisibleNews(2);
      } else {
        setVisibleNews(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prev) => {
        const maxIndex = noticias.length - visibleNews;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [visibleNews]);

  const nextNews = () => {
    setNewsIndex((prev) => {
      const maxIndex = noticias.length - visibleNews;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevNews = () => {
    setNewsIndex((prev) => {
      const maxIndex = noticias.length - visibleNews;
      return prev <= 0 ? Math.max(0, maxIndex) : prev - 1;
    });
  };

  // Carrusel del hero (máx. 3 imágenes): crossfade suave entre fondos.
  // Fotos de la Escuela de Ingeniería Ambiental (src/assets).
  const heroImages = [
    frontImage,
    frontImage2,
    frontImage3,
  ];
  const [heroIdx, setHeroIdx] = useState(0);
  // Carga progresiva: solo pedimos las imágenes ya mostradas + la siguiente.
  // Así la primera pinta rápido en móvil (mejor LCP) y las demás no compiten
  // con el render inicial; cada una llega antes de su turno en el crossfade.
  const [loadedImgs, setLoadedImgs] = useState(() => new Set([0, 1 % heroImages.length]));

  useEffect(() => {
    if (heroImages.length < 2) return;
    // Respeta la preferencia del sistema de reducir movimiento: sin auto-rotación.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  useEffect(() => {
    setLoadedImgs((prev) => {
      if (prev.has(heroIdx) && prev.has((heroIdx + 1) % heroImages.length)) return prev;
      const next = new Set(prev);
      next.add(heroIdx);
      next.add((heroIdx + 1) % heroImages.length);
      return next;
    });
  }, [heroIdx, heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const accesosRapidos = [
    { titulo: "Plan de Estudios", descripcion: "Malla curricular actualizada por ciclos.", icono: BookOpen, link: "/academico/malla-curricular", imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
    { titulo: "Plana Docente", descripcion: "Profesores e investigadores comprometidos.", icono: Users, link: "/organizacion/docentes", imagen: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
    { titulo: "Investigación", descripcion: "Proyectos, revistas y publicaciones científicas.", icono: FlaskConical, link: "/investigacion/publicaciones", imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80" },
  ];

  const cifras = [
    { numero: "+40", etiqueta: "Años formando profesionales", sub: "de trayectoria ininterrumpida" },
    { numero: "800+", etiqueta: "Egresados a nivel nacional", sub: "aportando al desarrollo cuantitativo" },
    { numero: "100%", etiqueta: "Profesores de primer nivel", sub: "con maestría y doctorado" },
  ];

  return (
    <PageWrapper>
      {/* ══════════════════════════════════════════
          HERO — Motivador y enérgico para estudiantes
          ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white flex items-center"
        style={{ minHeight: `max(420px, calc(100svh - ${headerHeight}px - ${cifrasHeight}px))` }}
      >
        {/* Carrusel de fondo: crossfade suave. Las imágenes rotan solas;
            el contenido del hero se queda fijo encima. */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{ backgroundImage: loadedImgs.has(i) ? `url(${img})` : undefined, opacity: i === heroIdx ? 1 : 0 }}
          />
        ))}

        {/* Overlay doble: izquierda transparente, derecha azul sólido */}
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.05) 0%, rgba(0,29,70,0.62) 42%, rgba(0,20,55,0.77) 70%, rgba(0,18,50,0.80) 100%)' }}
        />

        {/* Patrón de puntos sutil */}
        <svg className="absolute inset-0 w-full h-full z-[2] opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Acento naranja diagonal en la derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-gold via-gold/60 to-transparent z-10" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 pt-10 pb-10 lg:pt-12 lg:pb-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl mx-auto md:mr-0 md:ml-auto text-center md:text-right"
          >
            <motion.p variants={itemVariants} className="text-base md:text-lg font-display font-semibold text-white/70 uppercase tracking-widest mb-1">
              Escuela Profesional de
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display font-black leading-none mb-3"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textShadow: '0 8px 32px rgba(0,0,0,0.4)', color: '#E6AC09' }}
            >
              Estadística
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-white/85 mb-8 font-body leading-relaxed"
            >
              Forma parte de quienes <strong className="font-extrabold text-white">transforman datos</strong> en <strong className="font-extrabold text-white">decisiones estratégicas.</strong>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <Link to="/academico/malla-curricular">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(230,172,9,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-[#C49308] text-blue-deep font-black px-8 py-3.5 rounded-xl text-base transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Ver Plan de Estudios
                </motion.button>
              </Link>
              <Link to="/nosotros/mision-vision">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl text-base backdrop-blur-sm transition-all"
                >
                  Conoce la Escuela
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Banners superpuestos abajo a la izquierda en el Hero */}
        <div className="absolute left-6 md:left-[240px] bottom-12 z-20 hidden md:flex items-center gap-10 select-none">
          {/* Libro de Reclamaciones */}
          <a
            href="https://reclamos.servicios.gob.pe/?institution_id=247"
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer"
          >
            <img
              src={libroReclamacionesImg}
              alt="Libro de Reclamaciones"
              className="w-32 md:w-[130px] h-auto object-contain transition-transform group-hover:scale-105"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Bolsa de Trabajo */}
          <a
            href="https://jobboard.universia.net/unitruoportunidades?dateFrom=all&page=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            {/* Briefcase with search circle SVG */}
            <svg className="w-[52px] h-[35px] text-white transition-transform group-hover:scale-105" viewBox="0 0 48 32" fill="none">
              <path d="M14 8V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <rect x="2" y="8" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <circle cx="27" cy="20" r="7.5" fill="#001d46" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="27" cy="17.5" r="2" fill="currentColor" />
              <path d="M23.5 23.5c0-1.8 1.5-3 3.5-3s3.5 1.2 3.5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="32.5" y1="25.5" x2="37" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] md:text-[12px] font-display font-black tracking-wider text-white leading-tight uppercase group-hover:text-gold transition-colors">
              BOLSA DE<br />TRABAJO
            </span>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CIFRAS — Franja de impacto oscura
          ══════════════════════════════════════════ */}
      <section ref={cifrasRef} className="bg-blue-deep py-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cifras.map((cifra, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`py-8 px-6 text-center border-white/10 ${idx < 2 ? 'md:border-r' : ''} ${idx < 2 ? 'border-b md:border-b-0' : ''}`}
              >
                <div
                  className="text-4xl md:text-5xl font-display font-black mb-1"
                  style={{ color: '#E6AC09', textShadow: '0 0 20px rgba(230,172,9,0.3)' }}
                >
                  {cifra.numero}
                </div>
                <p className="text-white font-bold text-sm md:text-base">
                  {cifra.etiqueta}
                </p>
                {cifra.sub && <p className="text-white/60 text-xs mt-0.5">{cifra.sub}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIENVENIDA / VIDEO
          ══════════════════════════════════════════ */}

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {hasVideo ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Columna de Texto */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col"
              >
                <SectionTitle title="Bienvenida del **Rector**" />

                <div className="text-gray-700 font-body space-y-4 leading-relaxed text-justify">
                  <p>
                    "¡Bienvenidos a la Carrera de Estadística! Este espacio te invita a sumergirte en el fascinante mundo del análisis de datos y la inferencia cuantitativa. Prepárate para iniciar un viaje académico riguroso, donde cultivarás habilidades esenciales para descubrir patrones, construir modelos predictivos y tomar decisiones informadas."
                  </p>
                  <p>
                    "Estamos emocionados de acompañarte en este camino científico, contribuyendo a tu desarrollo integral como especialista en datos. ¡Comencemos juntos este desafiante viaje hacia el liderazgo analítico y la transformación digital de nuestra sociedad en la carrera de Estadística!"
                  </p>
                  <footer className="text-sm text-gray-600 not-italic font-semibold mt-4">
                    Rector del Universidad Nacional de Trujillo
                  </footer>
                </div>
              </motion.div>

              {/* Columna de Video */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl relative border-4 border-gray-50 bg-[#9E9E9E] flex items-center justify-center"
              >
                {/* Para agregar el video de YouTube real, descomenta la siguiente línea y pon tu ID: */}
                {/* 
                <YoutubeVideo
                  videoId={videoId}
                  title="Video Institucional Estadística UNT"
                /> 
                */}

                {/* Maqueta del reproductor según diseño */}
                <div className="relative w-48 h-28 bg-[#757575]/40 rounded-3xl flex items-center justify-center gap-4 border border-white/10 backdrop-blur-[2px]">
                  <div className="w-3.5 h-3.5 rounded-full bg-white/30" />
                  <div className="w-16 h-16 bg-[#E6AC09] text-[#001D46] rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 fill-current ml-1 text-[#001D46]" />
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-white/30" />
                </div>
              </motion.div>
            </div>
          ) : (
            /* Solo bienvenida centrada y justificada */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto flex flex-col text-center"
            >
              <SectionTitle title="Bienvenida del **Rector**" center />

              <div className="text-gray-700 font-body space-y-4 leading-relaxed text-justify mt-6">
                <p>
                  "¡Bienvenidos a la Carrera de Estadística! Este espacio te invita a sumergirte en el fascinante mundo del análisis de datos y la inferencia cuantitativa. Prepárate para iniciar un viaje académico riguroso, donde cultivarás habilidades esenciales para descubrir patrones, construir modelos predictivos y tomar decisiones informadas."
                </p>
                <p>
                  "Estamos emocionados de acompañarte en este camino científico, contribuyendo a tu desarrollo integral como especialista en datos. ¡Comencemos juntos este desafiante viaje hacia el liderazgo analítico y la transformación digital de nuestra sociedad en la carrera de Estadística!"
                </p>
                <footer className="text-sm text-gray-600 not-italic font-semibold text-center mt-6 block">
                  Rector del Universidad Nacional de Trujillo
                </footer>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      {/* ─── Sección Noticias y Actualidad ─── */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <SectionTitle title="Noticias y **Actualidad**" subtitle="Últimas novedades, eventos y comunicados de la Escuela." />
            <div className="flex items-center gap-4 whitespace-nowrap shrink-0">
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors"
              >
                Ver todas <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevNews}
                  className="p-2 rounded-full border border-gray-200 hover:border-gold hover:bg-gold/10 text-primary transition-colors focus:outline-none"
                  aria-label="Noticias anteriores"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextNews}
                  className="p-2 rounded-full border border-gray-200 hover:border-gold hover:bg-gold/10 text-primary transition-colors focus:outline-none"
                  aria-label="Siguientes noticias"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden -mx-3.5">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${newsIndex * (100 / visibleNews)}%)` }}
            >
              {noticias.map((noticia, idx) => (
                <motion.div
                  key={noticia.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3.5"
                >
                  <Link to={noticia.link} className="block h-full group">
                    <Card className="h-full flex flex-col p-0 overflow-hidden hover:shadow-lg transition-shadow">
                      {/* Franja superior de color por categoría */}
                      <div className="h-1.5 bg-primary w-full" />
                      {/* Imagen de la noticia o color entero si está vacío */}
                      <div className="h-48 w-full overflow-hidden shrink-0">
                        {noticia.imagen ? (
                          <img
                            src={noticia.imagen}
                            alt={noticia.titulo}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-pucp-blue-dark to-blue-deep flex items-center justify-center text-white/20 group-hover:from-blue-deep group-hover:to-pucp-blue-dark transition-all duration-300">
                            <BookOpen className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
                            {noticia.categoria}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500 text-xs ml-auto">
                            <Calendar className="w-3 h-3" />
                            {noticia.fechaFormateada}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
                          {noticia.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {noticia.resumen}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1 text-gold text-sm font-bold group-hover:gap-2 transition-all">
                          Leer más <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════
          ACCESOS RÁPIDOS — Cards premium numeradas
          ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Todo lo que necesitas **saber**"
            subtitle="Accede directo a la información más importante de nuestra escuela."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {accesosRapidos.map((acceso, idx) => {
              const IconComp = acceso.icono;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Link to={acceso.link} className="block h-full group">
                    <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-gold/40 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(230,172,9,0.15)] flex flex-col">

                      {/* Imagen de Portada */}
                      <div className="h-32 w-full relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10 group-hover:bg-primary/20 transition-colors duration-500" />
                        <img
                          src={acceso.imagen}
                          alt={acceso.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Contenido */}
                      <div className="p-6 flex flex-col flex-1 relative bg-white">
                        <h3 className="text-lg font-display font-black text-primary mb-2 leading-tight group-hover:text-gold transition-colors">
                          {acceso.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                          {acceso.descripcion}
                        </p>

                        {/* CTA flecha */}
                        <div className="mt-4 flex items-center gap-1 text-gold text-xs font-bold group-hover:gap-2 transition-all">
                          Ver más <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          AMBIENTES — Infraestructura Especializada
          ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestros **Ambientes**"
            subtitle="Espacios diseñados para tu desarrollo práctico y tecnológico."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

            {/* Biblioteca */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-blue-deep h-[380px] md:h-[450px] flex items-end shadow-xl border border-gray-150"
            >
              <div className="absolute inset-0">
                <img
                  src={bibliotecaImg}
                  alt="Biblioteca"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
              </div>
              <div className="relative z-10 p-8 md:p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500 text-left">
                <span className="inline-block px-3.5 py-1.5 bg-gold text-blue-deep text-[10px] font-black tracking-widest uppercase rounded-md mb-4 shadow-lg">
                  Estudio e Investigación
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight">
                  Biblioteca
                </h3>
                <div className="w-24 h-1 bg-gold mb-4 origin-left scale-x-50 transition-transform duration-500 group-hover:scale-x-100"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                  Un espacio diseñado para la lectura, el estudio continuo y el acceso a material bibliográfico especializado en estadística y ciencia de datos.
                </p>
              </div>
            </motion.div>

            {/* MEC */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-blue-deep h-[380px] md:h-[450px] flex items-end shadow-xl border border-gray-150"
            >
              <div className="absolute inset-0">
                <img
                  src={laboratorioMecImg}
                  alt="MEC"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
              </div>
              <div className="relative z-10 p-8 md:p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500 text-left">
                <span className="inline-block px-3.5 py-1.5 bg-gold text-blue-deep text-[10px] font-black tracking-widest uppercase rounded-md mb-4 shadow-lg">
                  Laboratorio
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-1 leading-tight">
                  MEC
                </h3>
                <p className="text-gold font-display font-bold text-xs md:text-sm mb-3">
                  (Módulo Estadístico Computacional)
                </p>
                <div className="w-24 h-1 bg-gold mb-4 origin-left scale-x-50 transition-transform duration-500 group-hover:scale-x-100"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg font-body">
                  Contamos con <strong>2 módulos estadísticos computacionales</strong> donde los estudiantes practican con software de la industria: <strong>R</strong> (análisis estadístico), <strong>SQL</strong> (bases de datos), <strong>SPSS</strong> (IBM) y <strong>SAS</strong> (estadística empresarial avanzada).
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}