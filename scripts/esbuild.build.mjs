import * as esbuild from 'esbuild';
import { createBuildOptions } from '../esbuild.config.js';

const options = createBuildOptions({
  entryPoints: ['src/App.tsx'],
  bundle: true,
  minify: true,
  // format: 'cjs',
  sourcemap: true,
  outfile: 'dist/app.js',
  external: ['react', 'react-dom'],
});

const build = await esbuild.build(options)
.catch((err) => {
	console.error(err);
	process.exit(1)
});

console.info(build)
