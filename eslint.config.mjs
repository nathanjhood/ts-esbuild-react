import js from '@eslint/js'
// import restrictedGlobals from 'confusing-browser-globals'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

/** @type { import("typescript-eslint").Config } */
const config = tseslint.config(
  {
    extends: [
      js.configs.recommended,
      // ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      // ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked
    ],
    files: [
      '**/*.{jsx,tsx}',
      'lib/**/*.{js,cjs.mjs,ts,cts,mts}',
      'src/**/*.{js,cjs.mjs,ts,cts,mts}',
      'scripts/**/*.{js,cjs.mjs,ts,cts,mts}'
    ],
    ignores: ['dist'],
    settings: { react: { version: '18.3' } },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // 'no-restricted-globals': ['error'].concat(restrictedGlobals),
      // semi: 'warn',
      'prefer-const': 'warn',
      // 'no-unused-vars': 'warn',
      // // plugins
      '@typescript-eslint/no-unused-vars': 'warn',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        project: ['./tsconfig.bundler.json', './tsconfig.web.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        },
        globals: globals.browser
      }
    }
  }
);

export default config;
