/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a6fa5',
          dark: '#166088',
        },
        accent: '#4fc3f7',
        background: '#f9f9f9',
        card: '#ffffff',
        border: '#e0e0e0',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
