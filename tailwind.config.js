/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(234, 29%, 20%)",
        bgColor: "hsl(0, 0%, 100%)",
        bgOrange: "hsl(4, 100%, 67%)",
        textColor: "hsl(231, 7%, 60%)",
        textColorDark: "hsl(234, 29%, 20%)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
