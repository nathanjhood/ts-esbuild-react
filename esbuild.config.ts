/// <reference types="esbuild" />

import { fileURLToPath, URL } from 'node:url'
import * as esbuild from 'esbuild'

declare type ESBuildPluginTSCOptions = {
  tsconfigPath?: string;
  force?: boolean;
  tsx?: boolean;
}

declare const esbuildPluginTsc: typeof import('esbuild-plugin-tsc')

export const createBuildOptions = (options: esbuild.BuildOptions) => Object.freeze<esbuild.BuildOptions>(
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
        tsconfigPath: fileURLToPath(new URL('./tsconfig.bundler.json', import.meta.url)),
        tsx: true
      } satisfies ESBuildPluginTSCOptions),
    ],

    ...options
  }
)

export default createBuildOptions
