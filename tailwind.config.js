/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6F35A5",
        primaryColorLight: "#A389F4",
        secondaryColor: "#E2D7ED",
        darkColor: "#2F2E41",
      }
    },
  },
  plugins: [],
}