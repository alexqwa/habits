/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#09090A",
      },
      fontFamily: {
        inter400: "Inter_400Regular",
        inter600: "Inter_600SemiBold",
        inter700: "Inter_700Bold",
        inter800: "Inter_800ExtraBold",
      },
    },
  },
  plugins: [],
}
