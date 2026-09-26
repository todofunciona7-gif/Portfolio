export const siteName = 'Agostina Bellido'

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#faq' },
]

export const stats = [
  { num: 8, label: 'clientes gestionados' },
  { num: 3000, label: 'seguidores nuevos generados', prefix: '+' },
  { num: 4, label: 'años de experiencia' },
]

export const services = [
  { n: '01', title: 'Gestión de redes sociales', desc: 'Manejo integral de las cuentas: publicaciones, comunidad y presencia diaria.' },
  { n: '02', title: 'Creación de contenido', desc: 'Ideas, guiones y piezas pensadas para cada plataforma y audiencia.' },
  { n: '03', title: 'Diseño gráfico para posts', desc: 'Piezas visuales coherentes con la identidad de cada marca.' },
  { n: '04', title: 'Estrategia y calendario editorial', desc: 'Planificación mensual con objetivos claros y contenido distribuido en el tiempo.' },
  { n: '05', title: 'Fotografía / Video', desc: 'Producción de material propio para reels, historias y feed.' },
]

// Casos reales. Imágenes en public/casos/ (originales sin procesar en
// fuentes/casos/, fuera de git). `antes`/`despues` en null = captura
// pendiente: se muestra un recuadro "Próximamente". `logoFit`: 'cover'
// para logos redondos/cuadrados que llenan el círculo, 'contain' para
// logos apaisados sobre fondo blanco.
export const cases = [
  {
    id: 'carestino',
    name: 'Carestino',
    handle: '@carestinosanrafael',
    category: 'Artículos para bebés',
    logo: '/casos/carestino-logo.webp',
    logoFit: 'contain',
    antes: '/casos/carestino-antes.webp',
    despues: '/casos/carestino-despues.webp',
    description: '',
    metrics: [
      { label: 'Seguidores', value: '650 → 732' },
      { label: 'Crecimiento', value: '+12,6%' },
      { label: 'Publicaciones', value: '155 → 164' },
    ],
  },
  {
    id: 'doncarmelopremium',
    name: 'Don Carmelo Premium',
    handle: '@hogardoncarmelopremium',
    category: 'Muebles y hogar',
    logo: '/casos/doncarmelopremium-logo.webp',
    logoFit: 'cover',
    antes: '/casos/doncarmelopremium-antes.webp',
    despues: '/casos/doncarmelopremium-despues.webp',
    description: '',
    metrics: [
      { label: 'Visualizaciones (30 días)', value: '11,6 mil' },
      { label: 'Seguidores', value: '1.666 → 1.671' },
      { label: 'Publicaciones', value: '234 → 240' },
    ],
  },
  {
    id: 'doncarmelo',
    name: 'Don Carmelo',
    handle: '@muebleriahogardoncarmelo',
    category: 'Artículos para el hogar',
    logo: '/casos/doncarmelo-logo.webp',
    logoFit: 'cover',
    antes: '/casos/doncarmelo-antes.webp',
    despues: '/casos/doncarmelo-despues.webp',
    description: '',
    metrics: [
      { label: 'Seguidores', value: '9.692 → 9.701' },
      { label: 'Publicaciones', value: '809 → 813' },
    ],
  },
  {
    id: 'milugar',
    name: 'Mi Lugar Sin Gluten',
    handle: '@milugar.singluten.sr',
    category: 'Pastelería sin gluten',
    logo: '/casos/milugar-logo.webp',
    logoFit: 'contain',
    antes: '/casos/milugar-antes.webp',
    despues: null,
    description: '',
    metrics: [{ label: 'Seguidores', value: '1.356' }],
  },
  {
    id: 'tierradeninos',
    name: 'Tierra de Niños',
    handle: '@tierradeninos.sr',
    category: 'Ropa infantil',
    logo: '/casos/tierradeninos-logo.webp',
    logoFit: 'cover',
    antes: '/casos/tierradeninos-antes.webp',
    despues: null,
    description: '',
    metrics: [{ label: 'Seguidores', value: '382' }],
  },
  {
    id: 'idmas',
    name: 'ID+ Ingeniería y Desarrollo',
    handle: '',
    category: 'Ingeniería',
    logo: '/casos/idmas-logo.webp',
    logoFit: 'contain',
    antes: null,
    despues: null,
    description: '',
    metrics: [],
  },
]

export const steps = [
  { n: 'PASO 1', title: 'Diagnóstico', desc: 'Reviso la cuenta y el contexto de la marca para entender dónde está parada.' },
  { n: 'PASO 2', title: 'Estrategia', desc: 'Defino objetivos, tono y calendario de contenidos junto con la marca.' },
  { n: 'PASO 3', title: 'Ejecución', desc: 'Producción y publicación constante de contenido, día a día.' },
  { n: 'PASO 4', title: 'Reporte', desc: 'Métricas y resultados presentados en un informe simple y claro.' },
]

export const plans = [
  {
    name: 'Pack Básico',
    badge: '',
    price: '$80.000',
    tagline: 'Presencia constante en una red, para arrancar.',
    variant: 'dark',
    features: [
      'Calendario de contenido mensual',
      'Gestión de 1 red social (Instagram o Facebook)',
      '4 publicaciones al mes (1 por semana)',
      '3 historias semanales',
      '1 sesión mensual de contenido',
    ],
  },
  {
    name: 'Pack Pro',
    badge: 'Más elegido',
    price: '$120.000',
    tagline: 'El doble de contenido, para marcas en crecimiento.',
    variant: 'lavender',
    features: [
      'Calendario de contenido mensual',
      'Gestión de 1 red social (Instagram, Facebook o TikTok)',
      '8 publicaciones al mes (2 por semana)',
      '4 historias semanales',
      '2 sesiones mensuales de contenido',
    ],
  },
  {
    name: 'Pack Premium',
    badge: '',
    price: '$150.000',
    tagline: 'Presencia diaria en dos redes.',
    variant: 'dark',
    features: [
      'Calendario de contenido mensual',
      'Gestión de 2 redes sociales (Instagram, Facebook o TikTok)',
      '12 publicaciones al mes (3 por semana)',
      'Historias todos los días (lunes a sábado)',
      'Mínimo 2 sesiones mensuales de grabación',
    ],
  },
]

export const planNotes = [
  'Todos los paquetes incluyen auditoría de marca y optimización del perfil.',
  'Hasta 2 cambios por contenido.',
  'Para comenzar se requiere una seña del 50% del total.',
  'El pago se realiza del 1 al 10 de cada mes.',
]

export const about = {
  // TODO: reemplazar por el texto personalizado que va a pasar Agostina (pidió sacar el genérico)
  p1: 'Me llamo Agostina Bellido y hace cuatro años trabajo gestionando redes sociales para marcas y emprendimientos. Empecé manejando una cuenta y hoy acompaño a ocho, cada una con su propia identidad y su propio ritmo.',
  p2: 'Creo en el trabajo prolijo: calendarios claros, contenido pensado y reportes que muestran resultados reales, no vueltas. Si tu marca necesita presencia constante y una estrategia detrás, hablemos.',
  specialties: [
    'Crecimiento orgánico en Instagram',
    'Estrategia de reels',
    'Gestión de comunidad',
    'Lanzamientos digitales',
  ],
}

export const testimonials = [1, 2, 3].map((i) => ({
  id: i,
  quote: '[Testimonio a completar]',
  name: '[Nombre a completar]',
  role: '[Marca / cargo a completar]',
}))

export const formations = [1, 2, 3].map((i) => ({
  id: i,
  title: '[Formación a completar]',
  institution: '[Institución a completar]',
  year: '[Año a completar]',
}))

export const faqs = [
  { q: '¿Qué incluye la gestión de redes sociales?', a: 'Incluye estrategia, calendario de contenidos, diseño de piezas, publicación y reportes de resultados. El alcance exacto se define según el plan elegido.' },
  { q: '¿Cuánto tardan en verse resultados?', a: 'Depende del punto de partida de cada cuenta y del objetivo. Lo conversamos en la primera llamada para armar expectativas realistas.' },
  { q: '¿Trabajás con qué plataformas?', a: 'Instagram, TikTok, LinkedIn y Facebook son las más frecuentes. Si tu marca necesita otra plataforma, lo evaluamos juntas.' },
  { q: '¿Cómo es la forma de pago?', a: 'Los paquetes son mensuales. Para comenzar se pide una seña del 50% y después el pago se hace del 1 al 10 de cada mes.' },
  { q: '¿Puedo cambiar de plan más adelante?', a: 'Sí. Los planes se ajustan a medida que la cuenta crece o cambian los objetivos de la marca.' },
]

export const contact = {
  whatsapp: 'https://wa.me/5492604561261',
  linkedin: 'https://www.linkedin.com/in/agostina-bellido-0978ba181/',
  email: 'agostinabellido6@gmail.com',
}
