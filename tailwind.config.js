/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        colors: {
            slate: { 900: '#0f172a', 800: '#1e293b', 600: '#475569' },
            blue: { 700: '#1d4ed8', 800: '#1e3a8a', 600: '#2563eb', 100: '#dbeafe' },
            green: { 700: '#15803d', 50: '#f0fdf4' },
            amber: { 500: '#f59e0b' }
        },
        fontFamily: {
            sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        }
    }
  },
  plugins: [],
}
