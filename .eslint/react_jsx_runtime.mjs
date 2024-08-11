// @ts-check
import * as tseslint from 'typescript-eslint'
import * as base from './base.mjs'
import react from 'eslint-plugin-react'

/**
 * @type {string | typeof base['name']}
 */
const name = 'react-jsx-runtime';

/**
 * @type {undefined | typeof base['files']}
 */
const files = [
  '**/*.{jsx,tsx}',
];

/**
 * @type {undefined | typeof base['ignores']}
 */
const ignores = [
  '!**/*.{jsx,tsx}',
];

/**
 * @type {undefined | typeof base['plugins']}
 */
const plugins = {
  'react': react,
};

/**
 * @type {undefined | typeof base['settings']}
 */
const settings = {
  react: {
    version: '18.3.1'
  }
};

/**
 * @name rules
 * @type {undefined | typeof base['rules']}
 */
const rules = react.configs['jsx-runtime'].rules && {
  // 'react/jsx-uses-react': 'warn',
  // 'react/react-in-jsx-scope': 'warn'
};

/**
 * @type {undefined | typeof base['languageOptions']}
 */
const languageOptions = {
  parserOptions: {
    ...react.configs['jsx-runtime'].parserOptions,

    jsxPragma: react.configs['jsx-runtime'].parserOptions.jsxPragma,

    ecmaFeatures: {
      jsx: react.configs['jsx-runtime'].parserOptions.ecmaFeatures.jsx
    }
  }
};

/**
 * @type {undefined | typeof base['linterOptions']}
 */
const linterOptions = undefined;

/**
 * @type {undefined | typeof base['processor']}
 */
const processor = undefined;

/**
 * @name default
 */
export default (() => {
  return {
    name: name,
    files: files,
    ignores: ignores,
    plugins: plugins,
    settings: settings,
    rules: rules,
    languageOptions: languageOptions,
    // linterOptions: linterOptions,
    // processor: processor,
  }
})()
