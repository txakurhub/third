/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "darkblue":"#171B27",
        "orange":"#FA6141",
        "graytext":"#676A72",
      }
    },
  },
  plugins: [],
};
