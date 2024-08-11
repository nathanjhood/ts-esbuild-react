// @ts-check
import * as tseslint from 'typescript-eslint'

/**
 * An string to identify the configuration object. Used in error messages and inspection tools.
 * @name name
 */
export const name = 'base' // tseslint.configs['base'].name;

/**
 * An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
 * @name files
 */
export const files = ['**/*.{js,cjs,mjs,ts,cts,mts}'];
// export const files = (() => {

//   const f = tseslint.configs['base'].files

//   const file = f?.map((val, i) => {
//     return val.valueOf()
//   })

//   if (Array.isArray(f)) {
//     if (f.length <= 0) {
//       return ['**/*.{js,cjs,mjs,ts,cts,mts}']
//     } else {
//       return f
//     }

//   } else {
//     if (tseslint.configs['base'].files) {
//       const res = [...tseslint.configs['base'].files.values()]
//       return res
//     } else {
//       ['**/*.{js,cjs,mjs,ts,cts,mts}']
//     };
//   }

// })();  //['**/*.{js,cjs,mjs,ts,cts,mts}'] : tseslint.configs['base'].files;

/**
 * An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files.
 * @name ignores
 */
export const ignores = ['dist'] // tseslint.configs['base'].ignores;


/**
 * An object containing a name-value mapping of plugin names to plugin objects. When files is specified, these plugins are only available to the matching files.
 * @name plugins
 */
export const plugins = tseslint.configs['base'].plugins ?? {};


/**
 * An object containing name-value pairs of information that should be available to all rules.
 * @name settings
 */
export const settings = tseslint.configs['base'].settings ?? {};

/**
 * An object containing the configured rules. When files or ignores are specified, these rule configurations are only available to the matching files.
 * @name rules
 */
export const rules = tseslint.configs['base'].rules ?? {};

/**
 * An object containing settings related to how JavaScript is configured for linting.
 * @name languageOptions
 */
export const languageOptions = tseslint.configs['base'].languageOptions;

/**
 * An object containing settings related to the linting process.
 * @name linterOptions
 */
export const linterOptions = tseslint.configs['base'].linterOptions ?? {};

/**
 * Either an object containing `preprocess()` and `postprocess()` methods or a string indicating the name of a processor inside of a plugin (i.e., `"pluginName/processorName"`).
 * @name processor
 */
export const processor = tseslint.configs['base'].processor ?? {
  preprocess: (text, filename) => { return; },
  postprocess: (messagesList, filename) => { return; }
};

// /** @typedef {tseslint.ConfigWithExtends['name']} LinterConfigName */
// /** @typedef {tseslint.ConfigWithExtends['files']} LinterConfigFiles */
// /** @typedef {tseslint.ConfigWithExtends['ignores']} LinterConfigIgnores */
// /** @typedef {tseslint.ConfigWithExtends['rules']} LinterConfigRules */
// /** @typedef {tseslint.ConfigWithExtends['languageOptions']} LinterConfigLanguageOptions */
// /** @typedef {tseslint.ConfigWithExtends['settings']} LinterConfigSettings */
// /** @typedef {tseslint.ConfigWithExtends['plugins']} LinterConfigPlugins */
// /** @typedef {tseslint.ConfigWithExtends['linterOptions']} LinterConfigLinterOptions */
// /** @typedef {tseslint.ConfigWithExtends['processor']} LinterConfigProcessor */

// /**
//  * @type {Object} The {@link tseslint.ConfigWithExtends linter config}.
//  * @property {typeof name} name An string to identify the configuration object. Used in error messages and inspection tools.
//  * @property {typeof files} files An array of glob patterns indicating the files that the configuration object should apply to. If not specified, the configuration object applies to all files matched by any other configuration object.
//  * @property {typeof ignores} ignores An array of glob patterns indicating the files that the configuration object should not apply to. If not specified, the configuration object applies to all files matched by files.
//  * @property {typeof settings} settings An object containing name-value pairs of information that should be available to all rules.
//  * @property {typeof rules} rules An object containing the configured rules. When files or ignores are specified, these rule configurations are only available to the matching files.
//  * @property {typeof processor} processor Either an object containing `preprocess()` and `postprocess()` methods or a string indicating the name of a processor inside of a plugin (i.e., `"pluginName/processorName"`).
//  * @property {LinterConfigPlugins} plugins An object containing a name-value mapping of plugin names to plugin objects. When files is specified, these plugins are only available to the matching files.
//  * @property {LinterConfigLanguageOptions} languageOptions An object containing settings related to how JavaScript is configured for linting.
//  * @property {LinterConfigLinterOptions} linterOptions An object containing settings related to the linting process.
//  */

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
    linterOptions: linterOptions,
    processor: processor,
  }
})()
