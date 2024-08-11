// @ts-check

import * as base from './base.mjs'
import react from 'eslint-plugin-react'

/**
 * @type {string | typeof base['name']}
 */
const name = 'react';

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
const rules = react.rules && react.configs['recommended'].rules && {
  // // custom...
  // 'react/display-name': 'error',
  // 'react/jsx-key': 'warn',
  // 'react/jsx-no-comment-textnodes': 'warn',
  // 'react/jsx-no-duplicate-props': 'error',
  // 'react/jsx-no-target-blank': 'error',
  // 'react/jsx-no-undef': 'error',
  // 'react/no-children-prop': 'error',
  // 'react/no-danger-with-children': 'error',
  // 'react/no-deprecated': 'error',
  // 'react/no-direct-mutation-state': 'error',
  // 'react/no-find-dom-node': 'error',
  // 'react/no-is-mounted': 'warn',
  // 'react/no-render-return-value': 'warn',
  // 'react/no-string-refs': 'warn',
  // 'react/no-unescaped-entities': 'warn',
  // 'react/no-unknown-property': 'error',
  // 'react/no-unsafe': 'error',
  // 'react/prop-types': 'warn',
  // 'react/require-render-return': 'error',

  // 'react/jsx-uses-react': 'warn',
  // 'react/jsx-uses-vars': 'warn',
  // 'react/react-in-jsx-scope': 'warn'
};

/**
 * @type {undefined | typeof base['languageOptions']}
 */
const languageOptions = {
  parserOptions: {
    ...react.configs['recommended'].parserOptions,

    ecmaFeatures: {
      ...react.configs['recommended'].parserOptions.ecmaFeatures,

      jsx: react.configs['recommended'].parserOptions.ecmaFeatures.jsx
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
