/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lushText: "#E1F7F5",
        lushPrimary: "#0E46A3",
      },
    },
  },
  plugins: [],
};
