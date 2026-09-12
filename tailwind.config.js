/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette officielle — Charte graphique KOLO 2026
        'kolo-blue': '#3E509E', // Bleu primaire KOLO
        'kolo-blue-deep': '#233F93', // Bleu foncé secondaire
        'kolo-navy': '#233F93', // Fonds sombres (header/footer)
        'kolo-orange': '#FFC32C', // Accent (jaune charte, remplace l'orange hors charte)
        'kolo-orange-hot': '#E3AC1B', // Variante survol de l'accent
        'kolo-green': '#E4007E', // Magenta charte (remplace le vert hors charte)
        'kolo-purple': '#7D3B8F', // Violet charte
        'kolo-live': '#E50914', // Rouge du bandeau LIVE (charte vidéo)
      },
      fontFamily: {
        // Century Gothic n'étant pas disponible en web font libre,
        // Jost (structure géométrique très proche) est utilisé en remplacement.
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Aquawax Black n'étant pas disponible en web font libre,
        // Baloo 2 (bold arrondi, même esprit que le logo KOLO) est utilisé en remplacement.
        display: ['Baloo 2', 'Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -8px rgba(20,30,60,0.15)',
        'card-hover': '0 20px 40px -12px rgba(20,30,60,0.28)',
        'glow-orange': '0 8px 30px -8px rgba(255,195,44,0.5)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
