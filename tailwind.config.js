/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'esm': '328px'
      },

      fontFamily: {
        'MTNIrancell-Bold': 'MTNIrancell-Bold',
        'MTNIrancell-DemiBold': 'MTNIrancell-DemiBold',
        'MTNIrancell-ExtraLight': 'MTNIrancell-ExtraLight',
        'MTNIrancell-Light': 'MTNIrancell-Light',
        'MTNIrancell-Medium': 'MTNIrancell-Medium'
      },

      colors: {
        'primary-color': '#48BBBD',
        'secondary-color': '#EBF5FF',
        'third-color': '#252641',
      },
    },
  },
  plugins: [],
}