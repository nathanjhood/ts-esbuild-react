import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const configs = {
  browser: {
    commonjs: [
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
      { languageOptions: { globals: globals.browser } },
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    module: [
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { languageOptions: { globals: globals.browser } },
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ]
  },
  node: {
    commonjs: [
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
      { languageOptions: { globals: globals.browser } },
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    module: [
      { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
      { languageOptions: { globals: globals.browser } },
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ]
  }
}

export default configs.browser.module;
