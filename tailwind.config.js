/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      height: {
        screen: '100dvh',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        dm: 'DM Mono, monospace',
        dancing: 'Dancing Script, cursive',
        brush: 'Nanum Brush Script, sans-serif',
        satisfy: 'Satisfy, cursive',
        fira: 'Fira Code,monospace ',
      },
      colors: {
        sky: 'rgb(2 132 199)',
        cyan: 'rgb(8 145 178)',
        primaryColor: '#242d52',
        secondaryColor: '#1b9075',
        secondaryColorLight: '#64ffda',
        greenDark: '#198068',
        white: '#fff',
        greyDark: '#343a40',
        greyMedium: '#9095a7',
        greyLight: '#e9e9e9',
        greyVeryLight: '#fafafa',
        blueDark: '#1E2A47',
        blueDarkest: '#141D2F',
      },
    },
  },
  plugins: [],
};
