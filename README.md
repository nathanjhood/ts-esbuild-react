# ts-esbuild-react

[![Node CI](https://github.com/nathanjhood/ts-esbuild-react/actions/workflows/node.yaml/badge.svg)](https://github.com/nathanjhood/ts-esbuild-react/actions/workflows/node.yaml)

The `create-react-app` Typescript template's boilerplate code, powered by esbuild instead of `react-scripts`'s Webpack implementation.

Just something basic I need to investigate for other purposes in other projects, elsewhere.

Nothing too interesting here.

## Commands

```json
{
  "dev": "node ./scripts/esbuild.serve.mjs",
  "build": "node ./scripts/esbuild.build.mjs",
  "analyze": "node ./scripts/esbuild.analyze.mjs",
  "start": "node ./dist/app.js",
  "test": "echo \"Error: no test specified\" && exit 1",
  "test:unit": "jest",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ./**/*.{js,jsx,ts,tsx,css,md,json} --config ./prettier.config.cjs"
}
```

---

## Further Reading

- https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage
- https://eisenbergeffect.medium.com/an-esbuild-setup-for-typescript-3b24852479fe
- https://gist.github.com/Med-H/5f2e2084309cb75134aa0a106c78e214
