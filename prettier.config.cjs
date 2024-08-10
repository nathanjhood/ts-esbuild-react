/** @type {import("prettier").Config} */
const config = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none',
  jsxBracketSameLine: true,
  plugins: ['prettier-plugin-tailwindcss']
};

module.exports = config;
