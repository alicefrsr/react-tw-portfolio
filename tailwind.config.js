/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        dm: "'DM Mono', monospace",
        lora: "'Lora', serif",
      },
      colors: {
        mainColor: '#242d52',
        primaryColor: '#1b9075',
        secondaryColor: '#64ffda',
        greenDark: '#198068',
        white: '#fff',
        greyDark: '#343a40',
        greyMedium: '#9095a7',
        greyLight: '#e9e9e9',
        greyVeryLight: '#fafafa',
        blueDark: '#242d52',
      },
    },
  },
  plugins: [],
};
