/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d1b06b",
          "secondary": "#D7D7D7",
          "accent": "#2E3947",
          "neutral": "#161D27",
          "base-100": "#1f2732",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

