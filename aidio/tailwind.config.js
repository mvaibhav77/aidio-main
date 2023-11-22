/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: { max: '1090px' },
      },
      fontFamily: {
        primary: ['var(--primary-font)'],
        secondary: ['var(--secondary-font)'],
        reckoner: ['var(--reckoner-font)'],
        anurati: ['var(--anurati-font)'],
        aquatico: ['var(--aquatico-font)'],
      },
    },
  },
  plugins: [],
};
