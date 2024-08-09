import * as esbuild from 'esbuild';
import { createBuildOptions } from './esbuild.config.js';

const options = createBuildOptions({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  minify: true,
  // format: 'cjs',
  sourcemap: true,
  outfile: 'dist/output.js',
  external: ['react', 'react-dom'],
});

await esbuild.build(options);

export {}
