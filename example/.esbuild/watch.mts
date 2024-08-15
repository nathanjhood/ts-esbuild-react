/// <reference types="esbuild" />

/**
 * Watch mode tells esbuild to watch the file system and automatically rebuild for you whenever you edit and save a file that could invalidate the build.
 *
 * @see https://esbuild.github.io/api/#watch
*/

import * as esbuild from 'esbuild';
import { createEsbuildConfig } from '../esbuild.config';

const options = createEsbuildConfig(
  {
    entryPoints: ['src/App.tsx'],
    bundle: true,
    outdir: 'dist',
  }
)

const ctx = await esbuild.context(options)

await ctx.watch()
