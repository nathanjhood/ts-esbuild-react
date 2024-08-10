/// <reference types="esbuild" />

import { fileURLToPath, URL } from 'url'
import { spawn } from 'child_process';

import * as esbuild from 'esbuild'

declare type BuildPaths = {
  publicSrcDir?: string | URL;
  publicOutputDir?: string | URL;
  publicOutFile?: string | URL;
  srcHtmlFile?: string | URL;
  destinationHTML?: string | URL;
}

declare type TscOptions = {
  tsconfigPath?: string;
  force?: boolean;
  tsx?: boolean;
}

declare type CopyOptions = (import('esbuild-plugin-copy').Options)
declare type CleanOptions = (import('esbuild-plugin-clean').CleanOptions)
declare type BuildOptions = (import('esbuild').BuildOptions)

declare const esbuildPluginTsc: typeof import('esbuild-plugin-tsc')
declare const esbuildPluginCopy: typeof import('esbuild-plugin-copy').copy
declare const esbuildPluginClean: typeof import('esbuild-plugin-clean').clean

const config = (() => {

  const publicSrcDir = './public'
  const publicOutputDir = './dist'
  const publicOutFile = `${publicOutputDir}/app.js`
  const srcHtmlFile = `./${publicSrcDir}/index.html`
  const destinationHTML = `${publicOutputDir}/index.html`

  return {
    external: ['react', 'react-dom'],
    entryPoints: ['src/index.tsx'],
    outfile: fileURLToPath(new URL(`${publicOutputDir}/${publicOutFile}`, import.meta.url)),
    sourcemap: true,
    bundle: true,
    minify: false,
		loader: {
		  '.tsx': 'tsx',
		  '.ts': 'ts',
		  '.svg': 'dataurl'
		},
    banner: {
      // NODE - Append Hot reload event listener to DOM
      // js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
      // // BROSWER - Append Hot reload event listener to DOM
      js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())(); '

    },
    // watch: {
    //   onRebuild(error) {
    //     clients.forEach(res => res.write('data: update\n\n'))
    //     clients.length = 0
    //     if (error)
    //       console.log(
    //         `[${chalk.grey(moment().format('h:mm:ss A'))}] esbuild: ${chalk.red('error while rebuilding code')}`
    //       )
    //     else
    //       console.log(
    //         `[${chalk.grey(moment().format('h:mm:ss A'))}] esbuild: ${chalk.green('code rebuilt successfully')}`
    //       )
    //   }
    // },
    // define: {
    //   'process.env.NODE_ENV': '"development"',
    //   'process.env.DEBUG': '"FALSE"',
    //   'process.env.GATEWAY_HOST': '"http://localhost"',
    //   'process.env.GATEWAY_PORT': '"5000"'
    // },
    plugins: [
      esbuildPluginTsc(Object.freeze<TscOptions>(
        {
          force: true,
          tsconfigPath: fileURLToPath(new URL('./tsconfig.bundler.json', import.meta.url)),
          tsx: true
        } satisfies TscOptions)
      ),
      esbuildPluginClean(Object.freeze<CleanOptions>(
        {
          patterns: [
            `${publicOutputDir}/*`,
            `!${destinationHTML}`
          ],
          sync: true,
          verbose: true,
        } satisfies CleanOptions)
      ),
      esbuildPluginCopy(Object.freeze<CopyOptions>(
        {
          copyOnStart: true,
          resolveFrom: 'cwd',
          assets: {
            from: [
              `${publicSrcDir}/**/*`
            ],
            to: [
              `${publicOutputDir}`
            ],
            // keepStructure: true
          },
          verbose: true,
          once: false,
          globbyOptions: {}
        } satisfies CopyOptions)
      )
    ],

  } satisfies esbuild.BuildOptions
})()

/**
 * @param  {import("esbuild").BuildOptions | undefined} options
 * @return {import("esbuild").BuildOptions}
 */
export const createEsbuildConfig = (options: esbuild.BuildOptions = config): esbuild.BuildOptions => {

  // const publicSrcDir = './public'
  // const publicOutputDir = './dist'
  // const publicOutFile = `${publicOutputDir}/app.js`
  // const srcHtmlFile = `./${publicSrcDir}/index.html`
  // const destinationHTML = `${publicOutputDir}/index.html`

  const defaults = { ...config } satisfies esbuild.BuildOptions
  const args = { ...options } satisfies esbuild.BuildOptions

  return {
      ...defaults,
      ...args
    }

}

const createTscServer = () => {
  const tsc = spawn('npx tsc', ['--noEmit --watch --skipLibCheck --pretty --project tsconfig.json'], {
    shell: true
  })
  tsc.stdout.on('data', data => {
    console.info(`${data}`)
  })
  tsc.on('error', error => {
    console.error(`error: ${error.message}`)
  })
}

export default createEsbuildConfig
