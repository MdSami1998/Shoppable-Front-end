/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15191D",
          secondary: "#094563",
          accent: "#0691FB",
          neutral: "#FCD864",
          "base-100": "#1A2647",
          // "base-100": "#0D1620",  #0D1326
        },
      },
    ],
  },
}
