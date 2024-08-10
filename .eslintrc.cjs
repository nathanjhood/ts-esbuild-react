const restrictedGlobals = require('confusing-browser-globals');

/** @type { import("eslint").ESLint.ConfigData } */
module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
  }
};
