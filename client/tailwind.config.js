/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#010a43",
        lightblue: "rgba(0, 64, 128, 0.2)",
        btnColor: "#5f6caf",
        btnHover: "#444e83",
      },
    },
  },
  plugins: [],
}
