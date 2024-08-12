# ts-esbuild-react

A React starter project template, powered by [esbuild](https://esbuild.github.io/) with Typescript support and a hot-reloading dev server.

[![Node](https://github.com/nathanjhood/ts-esbuild-react/actions/workflows/node.yml/badge.svg)](https://github.com/nathanjhood/ts-esbuild-react/actions/workflows/node.yml)

[![Build and Deploy static content to Pages](https://github.com/nathanjhood/ts-esbuild-react/actions/workflows/static.yml/badge.svg)](https://github.com/nathanjhood/ts-esbuild-react/actions/workflows/static.yml)

## Contents
- [Quickstart](#quickstart)
  - [Develop](#develop)
  - [Test](#test)
  - [Deploy](#deploy)
- [About](#about)
  - [Commands](#commands)
  - [Motivations](#motivations)
- [Further Reading](#further-reading)

---

## Quickstart

### Develop

Install required dependencies (React, esbuild, typescript, etc...)

```sh
yarn
```

Start esbuild's local development server with hot-reloading and typescript support:

```sh
yarn dev
```

 Open [http://localhost:5500](http://localhost:5500) in your browser.

Edit `src/App.tsx` - the page in the browser will refresh when you save any changes to your source files in your IDE.

### Test

```sh
yarn test
```

*Jest support for unit tests will be added at some point, using the standard React template.

### Deploy

To create a built application for deployment:

```sh
yarn build
```

Optionally, preview the built application before deploying:

```sh
yarn preview
```

---

## About

This repository is a simple demonstration of the `create-react-app --template typescript` boilerplate code, powered by [esbuild](https://esbuild.github.io/).

The usual `react-scripts`'s Webpack implementation has been replaced with a similar set of functionality using esbuild, using ideas from the articles referenced below, along with the standard react/esbuild/typescript official docs.

---

### Commands

```json
{
  // develop, build, analyze...
  "dev": "node ./scripts/esbuild.serve.mjs",
  "build": "node ./scripts/esbuild.build.mjs",
  "analyze": "node ./scripts/esbuild.analyze.mjs",
  "preview": "npx -y serve -l 5000 dist",

  // test...
  "test": "echo \"Error: no test specified\" && exit 1",
  "test:unit": "jest",

  // lint, format...
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "format": "prettier --write ./**/*.{js,jsx,ts,tsx,css,md,json} --config ./prettier.config.cjs"
}
```

---

### Motivations

Just something I needed to investigate in isolation, to be used as a guideline for other projects, elsewhere.

In future, I *might* properly functionize the scripts, improve the Typescript server, *possibly* look at hooking into the React dev overlay for error reporting, "eject"... and more, periodically, if time permits.

Feel free to express some interest, as this might well encourage me to put more time on this.

Or, take inspiration from it for your own projects.

---

## Further Reading

- https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage
- https://eisenbergeffect.medium.com/an-esbuild-setup-for-typescript-3b24852479fe
- https://gist.github.com/Med-H/5f2e2084309cb75134aa0a106c78e214
