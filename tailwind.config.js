/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1b2127',
        'primary-blue': '#3853b3',
        'light-blue': '#4f6bce',
        'success':'#4fce7e',
        'error': '#e85858'
      },
    },
  },
  plugins: [],
}

