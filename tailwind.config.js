/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white1' : '#FFFFFF',
        'white2' : '#E8E8E8',
        'black1' : '#000000',
        'orange1' : '#E8682B',
        'blue1' : '#2D57ED',
        'grey1' : '#151828',
        'grey2' : '#242942',
        'silver' : '#71797E',
        'green1': '#00ff00',
        'red1' : '#ff0000',
    },
  },
  plugins: [],
}
}