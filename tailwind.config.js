/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f4f6fb',
        foreground: '#0f172a',
        'theme-blue': '#0f172a',
        'theme-purple': '#1d4ed8',
        'light-theme-purple': '#dbe4ff',
        accent: '#1e40af',
        'muted-grey': '#475569',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ..._fontFamily.sans],
        display: ['"Plus Jakarta Sans"', ..._fontFamily.sans],
      },
      boxShadow: {
        soft: '0px 16px 40px -20px rgba(29, 78, 216, 0.35)',
        card: '0px 24px 60px -24px rgba(15, 23, 42, 0.18)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float-blob': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'gradient-pan': 'gradient-pan 14s ease-in-out infinite',
        'float-blob': 'float-blob 9s ease-in-out infinite',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.75rem',
        sm: '2rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '3.5rem',
      },
      screens: {
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
