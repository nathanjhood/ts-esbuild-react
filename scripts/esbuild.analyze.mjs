import * as esbuild from 'esbuild';
import fs from 'node:fs';
import { createBuildOptions } from '../esbuild.config';

const options = createBuildOptions({ minify: true, metafile: true });
const build = await esbuild.build(options);
const mode = process.env.npm_config_mode;

if (mode === "write") {
  fs.writeFileSync("build-meta.json", JSON.stringify(build.metafile))
} else {
  console.info(await esbuild.analyzeMetafile(build.metafile, {
    verbose: false,
  }));
}
