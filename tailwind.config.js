/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#171410',
        'ink-soft': '#211D14',
        cream: '#F7F3EA',
        'cream-alt': '#EEE6D2',
        yellow: {
          DEFAULT: '#F4C430',
          gold: '#C9971A',
        },
        peach: '#F3C6A5',
        muted: {
          DEFAULT: '#55503F',
          dark: '#B8AC8C',
          footer: '#6B6555',
        },
        border: '#E2D9BE',
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
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
