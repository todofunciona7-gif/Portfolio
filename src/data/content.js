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

export const cases = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
  id: i,
  name: `Cliente 0${i}`,
  category: '[Rubro a completar]',
  description: '[Breve descripción del proyecto a completar]',
  metrics: [
    { label: 'Crecimiento de seguidores', value: '[dato a completar]' },
    { label: 'Alcance mensual', value: '[dato a completar]' },
    { label: 'Engagement', value: '[dato a completar]' },
  ],
}))

export const steps = [
  { n: 'PASO 1', title: 'Diagnóstico', desc: 'Reviso la cuenta y el contexto de la marca para entender dónde está parada.' },
  { n: 'PASO 2', title: 'Estrategia', desc: 'Defino objetivos, tono y calendario de contenidos junto con la marca.' },
  { n: 'PASO 3', title: 'Ejecución', desc: 'Producción y publicación constante de contenido, día a día.' },
  { n: 'PASO 4', title: 'Reporte', desc: 'Métricas y resultados presentados en un informe simple y claro.' },
]

export const plans = [
  {
    name: 'Esencial',
    badge: '',
    tagline: 'Presencia constante en redes, gestión básica.',
    variant: 'dark',
    features: ['Gestión de 1 red social', 'Calendario de contenido mensual', 'Diseño de piezas gráficas', 'Reporte mensual'],
  },
  {
    name: 'Crecimiento',
    badge: 'Más elegido',
    tagline: 'La opción más elegida para marcas en expansión.',
    variant: 'lavender',
    features: [
      'Gestión de hasta 3 redes sociales',
      'Estrategia y calendario editorial',
      'Diseño y producción de contenido',
      'Fotografía / video mensual',
      'Reporte de métricas mensual',
    ],
  },
  {
    name: 'Integral',
    badge: '',
    tagline: 'Gestión completa para marcas con mayor volumen.',
    variant: 'dark',
    features: [
      'Gestión multiplataforma',
      'Estrategia de contenido a medida',
      'Producción fotográfica y video',
      'Comunidad y respuesta a mensajes',
      'Reportes y reuniones periódicas',
    ],
  },
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
  { q: '¿Cómo es la forma de pago?', a: 'Se coordina según el plan y la duración del contrato. Lo definimos antes de arrancar, sin sorpresas.' },
  { q: '¿Puedo cambiar de plan más adelante?', a: 'Sí. Los planes se ajustan a medida que la cuenta crece o cambian los objetivos de la marca.' },
]

export const contact = {
  whatsapp: 'https://wa.me/5490000000000',
  linkedin: 'https://linkedin.com',
  email: 'hola@agostinabellido.com',
}
