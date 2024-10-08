const defaultColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{js,html}"],
  plugins: [],
  // presets: [], // dont use this as it overwrites the defaults
  safelist: [
    // {
    //   pattern: /.*/,
    // },
    // {
    //   pattern: /.color-*/,
    // },
    // {
    //   pattern: /.bg-*/,
    // },
    // {
    //   pattern: /.container*/,
    // },
    // {
    //   pattern: /.text-*/,
    // },
    // {
    //   pattern: /.font-*/,
    // },
    // {
    //   pattern: /.opacity-*/,
    // },
    // {
    //   pattern: /.w-*/,
    // },
    // {
    //   pattern: /.h-*/,
    // },
    // {
    //   pattern: /.display-*/,
    // },
    // {
    //   pattern: /.flex-*/,
    // },
  ],
  // Nativewind requires 'class' https://www.nativewind.dev/v4/core-concepts/dark-mode
  darkMode: "class", // 'media' or 'class'
  theme: {
    colors: defaultColors,
    extend: {},
  },
  // corePlugins: {
  //   preflight: true,
  //   textOpacity: true,
  //   borderOpacity: true,
  //   divideOpacity: true,
  //   backgroundOpacity: true,
  // },
};
