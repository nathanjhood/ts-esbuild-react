// @ts-check

import * as tseslint from 'typescript-eslint'
import globals from 'globals'

const base = await import('./.eslint/base.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const prettier = await import('./.eslint/prettier.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const javascript = await import('./.eslint/javascript.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const typescript = await import('./.eslint/typescript.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const react_refresh = await import('./.eslint/react_refresh.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const react_hooks = await import('./.eslint/react_hooks.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const react = await import('./.eslint/react.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const react_jsx_runtime = await import('./.eslint/react_jsx_runtime.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })
const jest = await import('./.eslint/jest.mjs').then((config) => config.default).catch((err) => { console.error(err); return {}; })

export const config = tseslint.config(
  base,
  javascript,
  typescript,
  react,
  react_jsx_runtime,
  react_hooks,
  react_refresh,
  jest,
  prettier,
  {
    name: 'project',
    extends: [
      base,
      // // tseslint.configs['eslintRecommended'], // or 'base'
      // ...tseslint.configs['strict'],
      // // ...tseslint.configs['recommendedTypeCheckedOnly'],
      // // ...tseslint.configs['strictTypeCheckedOnly'],
      // ...tseslint.configs['stylisticTypeCheckedOnly'],
    ],
    files: [
      'lib',
      'src',
      'scripts'
    ],
    ignores: ['dist'],
    settings: { react: { version: '18.3' } },
    rules: {
      // ...js.configs.recommended.rules,
      semi: 'warn',
      'prefer-const': 'warn',
      // // plugins
      '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    // env: {
    //   "jest/globals": true
    // },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        // project: ['./tsconfig.bundler.json', './tsconfig.web.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        globals: globals.browser
      }
    }
  }
);

export default config;
