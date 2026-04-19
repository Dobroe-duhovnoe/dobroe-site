/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'th-secondary-10': '#f8f9fa',
        'th-secondary-200': '#6c757d',
        'slate-550': '#475569',
      },
    },
  },
  plugins: [],
} 