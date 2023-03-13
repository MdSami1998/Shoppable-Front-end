/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orangerrr": "#FFB800",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15191D",
          secondary: "#094563",
          accent: "#0691FB",
          neutral: "#FF9900",
          "base-100": "#1A2647",
        },
      },
    ],
  },
}
