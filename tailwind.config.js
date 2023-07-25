// this is the default theme from https://tailwindcss.com/docs/theme
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  // tailwind must know about every single file in the project that contains any class names
  content: [
    "./src/**/*.js",
    "./src/components/**.js",
    "./public/index.html"
  ],
  presets: [],
  darkMode: 'class', // or 'media' to base off users' OS
  // theme holds customizations for screens, colors, and spacing as well as core plugins
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif']
    },
  },
  variants : {
    extend:{}
  },
  plugins: [],
  }
}