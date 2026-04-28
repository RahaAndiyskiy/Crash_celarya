/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        lime: {
          bright: '#C6FF00',
          soft: '#E8FF8F',
        },
        violet: {
          light: '#9B7DFF',
          medium: '#7B4BFF',
        },
      },
    },
  },
  plugins: [],
};
