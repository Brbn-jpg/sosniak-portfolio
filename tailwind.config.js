/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          50: '#E8EDF2',
          100: '#C5D1DC',
          200: '#8FA9BF',
          300: '#5A81A3',
          400: '#2A5A86',
          500: '#1A3A5C',
          600: '#0D1B2A',
          700: '#091422',
          800: '#060E19',
          900: '#030810',
        },
        em: {
          DEFAULT: '#2ECC8B',
          50: '#E8F8F2',
          100: '#C3EFD9',
          200: '#8FE0BC',
          300: '#5AD19F',
          400: '#2ECC8B',
          500: '#22A872',
          600: '#178558',
          700: '#0F6341',
        },
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scroll-pulse': 'scrollPulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(48px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollPulse: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(6px)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
