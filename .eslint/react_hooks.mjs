// @ts-check
import * as tseslint from 'typescript-eslint'
import * as base from './base.mjs'
import reactHooks from 'eslint-plugin-react-hooks'

/**
 * An string to identify the configuration object. Used in error messages and inspection tools.
 * @name name
 * @type {string | typeof base['name']}
 */
export const name = 'react-hooks';

/**
 * An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
 * @name files
 * @type {undefined | typeof base['files']}
 */
export const files = [
  '**/*.{jsx,tsx}',
];

/**
 * An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files.
 * @name ignores
 * @type {undefined | typeof base['ignores']}
 */
export const ignores = [
  '!**/*.{jsx,tsx}',
];

/**
 * An object containing a name-value mapping of plugin names to plugin objects. When files is specified, these plugins are only available to the matching files.
 * @name plugins
 * @type {undefined | typeof base['plugins']}
 */
export const plugins = {
  'react-hooks': reactHooks
};

/**
 * An object containing name-value pairs of information that should be available to all rules.
 * @name settings
 * @type {undefined | typeof base['settings']}
 */
export const settings = {
  react: { version: '18.3' }
};

/**
 * An object containing the configured rules. When files or ignores are specified, these rule configurations are only available to the matching files.
 * @name rules
 * @type {undefined | typeof base['rules']}
 */
export const rules = {
  "react-hooks/rules-of-hooks": 'warn', // reactHooks.configs['recommended'].rules['react-hooks/rules-of-hooks'],
  "react-hooks/exhaustive-deps": 'warn' // reactHooks.configs['recommended'].rules['react-hooks/exhaustive-deps'],

};

/**
 * An object containing settings related to how JavaScript is configured for linting.
 * @name languageOptions
 * @type {undefined | typeof base['languageOptions']}
 */
export const languageOptions = undefined;

/**
 * An object containing settings related to the linting process.
 * @name linterOptions
 * @type {undefined | typeof base['linterOptions']}
 */
export const linterOptions = undefined;

/**
 * @type {undefined | typeof base['processor']}
 */
export const processor = undefined;

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
    // languageOptions: languageOptions,
    // linterOptions: linterOptions,
    // processor: processor,
  }
})()
