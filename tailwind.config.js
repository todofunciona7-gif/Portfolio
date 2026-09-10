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
        display: ['"Libre Caslon Text"', 'serif'],
        body: ['Sora', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee 28s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        ripple: 'ripple 1.5s ease infinite',
        shake: 'shake 0.5s ease-in-out',
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
