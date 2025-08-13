/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'display': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'hero-subtitle': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.4', letterSpacing: '0' }],
        'section-title': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'card-title': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      colors: {
        brand: {
          primary: '#1B3C53',
          secondary: '#456882',
          accent: '#D2C1B6',
          light: '#F9F3EF',
        }
      },
      spacing: {
        'typography': 'clamp(1.5rem, 3vw, 2.5rem)',
        'section': 'clamp(3rem, 6vw, 5rem)',
      }
    },
  },
  plugins: [],
}

