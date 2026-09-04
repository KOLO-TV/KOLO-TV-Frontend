/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kolo-blue': '#0022e3',
        'kolo-blue-deep': '#001aad',
        'kolo-navy': '#0a192f',
        'kolo-orange': '#f2762e',
        'kolo-orange-hot': '#e8622a',
        'kolo-green': '#3aa66b',
        'kolo-live': '#e50914',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -8px rgba(20,30,60,0.15)',
        'card-hover': '0 20px 40px -12px rgba(20,30,60,0.28)',
        'glow-orange': '0 8px 30px -8px rgba(242,118,46,0.5)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
