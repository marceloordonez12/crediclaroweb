/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#2eaa6b',
          dark: '#27986a',
        },
        orange: {
          DEFAULT: '#f57941',
          dark: '#e06830',
        },
        navy: {
          DEFAULT: '#1a3a5c',
          dark: '#0f2440',
        },
        'gray-text': '#5a6a7a',
        'gray-light': '#8a9aaa',
        'bg-page': '#f8f9fa',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
