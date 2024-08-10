import * as esbuild from 'esbuild';
import { createBuildOptions } from './esbuild.config.mjs';

const options = createBuildOptions({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  minify: true,
  // format: 'cjs',
  sourcemap: true,
  outfile: 'dist/app.js',
  external: ['react', 'react-dom'],
});

await esbuild.build(options);

export {}
