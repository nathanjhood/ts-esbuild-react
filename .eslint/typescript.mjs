// @ts-check

import * as tseslint from 'typescript-eslint';
import * as base from './base.mjs';

/** @type {keyof Pick<tseslint.configs, 'disableTypeChecked' | 'recommendedTypeCheckedOnly' | 'strictTypeCheckedOnly'>} */
const level = 'recommendedTypeCheckedOnly'

/**
 * An string to identify the configuration object. Used in error messages and inspection tools.
 * @name name
 * @type {string | typeof base['name']}
 */
export const name = 'typescript';

/**
 * An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
 * @name files
 * @type {undefined | typeof base['files']}
 */
export const files = [
  '**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}',
];

/**
 * An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files.
 * @name ignores
 * @type {undefined | typeof base['ignores']}
 */
export const ignores = [
  '!**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}',
  'dist'
];

/**
 * An object containing the configured rules. When files or ignores are specified, these rule configurations are only available to the matching files.
 * @name rules
 * @type {(typeof base['rules'])}
 */
export const rules = (() => {
  const result = tseslint.configs[level].map((val, i) => {
    return val
  })
  return result.map((rule) => rule)
})() && {
  'prefer-const': 'warn'
};

/**
 * @name default
 */
export default (() => {
  return {
    name: name,
    // files: files,
    // ignores: ignores,
    // plugins: plugins,
    // settings: settings,
    rules: rules,
    // languageOptions: languageOptions,
    // linterOptions: linterOptions,
    // processor: processor,
  }
})()
