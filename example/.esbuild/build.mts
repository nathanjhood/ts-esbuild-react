/// <reference types="esbuild" />

import * as esbuild from 'esbuild'

/**
 * @see https://esbuild.github.io/api/#build
 *
 */

const build = await esbuild.build({
  entryPoints: ['app.ts'],
  bundle: true,
  outdir: 'dist',
}).catch(() => process.exit(1))

console.info(build)
