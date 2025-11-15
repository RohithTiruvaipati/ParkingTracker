/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        base: {
          900: '#0B0F19',
          800: '#111827',
          700: '#1F2937'
        }
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(1200px 600px at 50% -10%, rgba(16,185,129,0.15), rgba(99,102,241,0.10) 35%, transparent 70%)',
        'glass': 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
      }
    }
  },
  plugins: []
}
