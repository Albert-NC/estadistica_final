/**
 * Configuración de tema: colores, tipografías y estilos
 * Integrado con Tailwind CSS
 */

export const colors = {
  // Colores primarios
  primary: '#1B3A6B',      // Azul institucional oscuro
  
  // Colores secundarios/Acentos
  secondary: '#C8A951',    // Dorado/ocre académico
  accent: '#E8F0FE',       // Azul claro de apoyo
  
  // Colores neutros
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  },
  
  // Colores semánticos
  success: '#2D6A4F',      // Verde para estados positivos
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6'
};

export const typography = {
  // Familia de fuentes
  fontFamily: {
    display: "'Playfair Display', serif",
    body: "'Source Sans 3', sans-serif"
  },
  
  // Tamaños de fuente
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem'      // 48px
  },
  
  // Pesos de fuente
  fontWeight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800
  }
};

export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem'   // 64px
};

export const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultrawide: '1920px'
};

export const borderRadius = {
  none: '0',
  sm: '0.25rem',  // 4px
  md: '0.5rem',   // 8px
  lg: '1rem',     // 16px
  xl: '1.5rem',   // 24px
  full: '9999px'
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
};
