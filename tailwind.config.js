/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sen: ["Sen"],
      },
      animation: {
        flip: "flip-vertical-right 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955)",
      },
      keyframes: {
        "flip-vertical-right": {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
      },
    },
  },
  plugins: [],
}
