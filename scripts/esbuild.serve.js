import esbuild from 'esbuild';
import { createBuildOptions } from './esbuild.config.js';

const settings = createBuildOptions({
  sourcemap: true,
  banner: {
    js: `new EventSource('/esbuild').addEventListener('change', () => location.reload());`,
  }
});

const ctx = await esbuild.context(settings);

await ctx.watch();

const { host, port } = await ctx.serve({
  port: 5500,
  host: '127.0.0.1',
  servedir: './',
  fallback: "./index.html"
});

console.log(`Serving app at ${host}:${port}.`);
