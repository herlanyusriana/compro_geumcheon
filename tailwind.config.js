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
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
