/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first":"#5F0F40",
        "second":"#8b165e",
        "third":"#EEF0E5",
      } 
    },
  },
  plugins: [require("daisyui")],
}

