/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        yellow: "#FFBF00",
        blue: "#0E76FD",
      },
    },
  },
  plugins: [],
};
