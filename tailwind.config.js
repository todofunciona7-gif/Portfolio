/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FEEB9C',
        'paper-2': '#FBDD82',
        'paper-soft': '#FFF9E6',
        // Fondo oscuro de la portada y el cierre: ciruela saturado.
        // El footer va un punto más oscuro.
        noche: {
          DEFAULT: '#521550',
          2: '#3F0F3D',
        },
        ink: '#3A1024',
        cream: '#4A1530',
        'cream-alt': '#6B2C48',
        lavender: {
          DEFAULT: '#A985B1',
          deep: '#6B3D73',
          soft: '#F1E4F2',
        },
        muted: {
          DEFAULT: '#8C5D74',
          dark: '#7A4F63',
          footer: '#8C6478',
        },
        border: '#F0DFA8',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      // Sistema de movimiento: una sola curva y tres tiempos
      // (hover, cambio de estado, entrada).
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.16, 1, .3, 1)',
        out: 'cubic-bezier(.16, 1, .3, 1)',
      },
      transitionDuration: {
        DEFAULT: '240ms',
        hover: '150ms',
        estado: '240ms',
        entrada: '500ms',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee 28s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        ripple: 'ripple 1.5s ease infinite',
        shake: 'shake 0.5s ease-in-out',
        'pulse-ring': 'pulseRing 2s cubic-bezier(.16, 1, .3, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseRing: {
          '0%': { opacity: '1', transform: 'scale(.92)' },
          '100%': { opacity: '0', transform: 'scale(1.18)' },
        },
        ripple: {
          '0%, 60%, 100%': { backgroundColor: 'transparent' },
          '30%': { backgroundColor: '#A985B1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0) rotate(0)' },
          '20%': { transform: 'translateX(-4px) rotate(-6deg)' },
          '40%': { transform: 'translateX(4px) rotate(6deg)' },
          '60%': { transform: 'translateX(-4px) rotate(-6deg)' },
          '80%': { transform: 'translateX(4px) rotate(6deg)' },
        },
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
