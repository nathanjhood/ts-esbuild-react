/// <reference types="esbuild" />

import * as esbuild from 'esbuild';
import { createEsbuildConfig } from '../esbuild.config';

const options = createEsbuildConfig({
  sourcemap: true,
  banner: {
    // NODE - Append Hot reload event listener to DOM
    // js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
    // // BROSWER - Append Hot reload event listener to DOM
    js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())();'
  }
});

/**
 * Serve mode starts a local development server that serves the results of the latest build. Incoming requests automatically start new builds so your web app is always up to date when you reload the page in the browser.
 *
 * @see https://esbuild.github.io/api/#serve
 *
 */

declare type ServeOptions = (import('esbuild').ServeOptions)

const serveOptions: ServeOptions = {

}



const ctx = await esbuild.context(options)

const watcher = await ctx.watch();

const { host, port } = await ctx.serve({
  port: 5500,
  host: '127.0.0.1',
  servedir: './dist',
  fallback: "./dist/index.html"
});

console.log(`Serving app at ${host}:${port}.`);
