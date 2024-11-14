/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        madeCarving: ["MADECarving", "sans-serif"],
      },
      colors: {
        standard: "#0f3b5c",
      },
    },
  },
  plugins: [],
};
