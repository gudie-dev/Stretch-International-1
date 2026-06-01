/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC0000', // Impact Red
          dark: '#990000',
          light: '#FF3333',
        },
        secondary: {
          DEFAULT: '#334155', // Charcoal Grey
          dark: '#1E293B',
          light: '#475569',
        },
        accent: {
          DEFAULT: '#F8FAFC', // Soft Grey
        },
        dark: '#0F172A',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
