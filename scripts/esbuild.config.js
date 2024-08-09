import * as esbuild from 'esbuild'
import esbuildPluginTsc from 'esbuild-plugin-tsc'
import { fileURLToPath, URL } from 'node:url';

export const createBuildOptions = (options) => (
  {
    external: ['react', 'react-dom'],
    entryPoints: ['src/App.tsx'],
    outfile: fileURLToPath(new URL('dist/bundle.js', import.meta.url)),
    sourcemap: true,
    bundle: true,
    minify: true,
    plugins: [
      esbuildPluginTsc({
        force: true,
        // tsconfigPath: fileURLToPath(new URL('./tsconfig.bundler.json', import.meta.url)),
        // tsx: true
      }),
    ],

    ...options
  }
)

export default createBuildOptions
