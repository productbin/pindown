/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      lg: '1rem',
    },
    extend: {
      colors: {
        'gra-one': '#0E1C26',
        'gra-two': '#2A454B',
        'gra-tri': '#294861',
      },
      fontFamily: {
        int: ['var(--font-inter)'],
        rm: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
