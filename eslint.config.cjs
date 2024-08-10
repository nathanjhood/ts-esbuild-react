const restrictedGlobals = require('confusing-browser-globals');
const eslint = require('@eslint/js');
const react = require('eslint-plugin-react');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintPluginReact = require('eslint-plugin-react');
const globals = require('globals');

/** @type { import("eslint").Linter.Config[] } */
const config = [
  eslint.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    // extends: ["react-app", "react-app/jest"],
    files: ['{src,lib}/**/*.{js,cjs.mjs,ts,cts,mts}', 'src/**/*.{jsx,tsx}'],
    // ignores: ['**/*.config.{js,cjs.mjs,ts,cts,mts}'],
    rules: {
      'no-restricted-globals': ['error'].concat(restrictedGlobals),
      semi: 'warn',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
          // ecmaVersion: "latest",
          // sourceType: "module"
        },
        globals: {
          ...globals.browser
        }
      }
    },
    // env: {
    //   "browser": true,
    //   "es2021": true,
    //   "jest": true
    // },
    // extends: [
    //   // "react-app", "react-app/jest"
    // ],
    plugins: { react }
  }
];

module.exports = config;
