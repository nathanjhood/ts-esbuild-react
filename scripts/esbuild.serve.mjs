import * as esbuild from 'esbuild';
import { createBuildOptions } from './esbuild.config.mjs';

const options = createBuildOptions({
  sourcemap: true,
  banner: {
    // NODE - Append Hot reload event listener to DOM
    js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
    // // BROSWER - Append Hot reload event listener to DOM
    // js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())();'
  }
});

const ctx = await esbuild.context(options);

await ctx.watch();

const { host, port } = await ctx.serve({
  port: 5500,
  host: '127.0.0.1',
  servedir: './',
  fallback: "./index.html"
});

console.log(`Serving app at ${host}:${port}.`);
