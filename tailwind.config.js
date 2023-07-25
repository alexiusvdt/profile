// this is the default theme from https://tailwindcss.com/docs/theme
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // tailwind must know about every single file in the project that contains any class names
  content: ['./src/**/*.{html,js}'],
  presets: [],
  darkMode: 'class', // or 'media' to base off users' OS
  // theme holds customizations for screens, colors, and spacing as well as core plugins
  theme: {
    extend: {},
  },
  variants : {
    extend:{}
  },
  plugins: [],
}