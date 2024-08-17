import * as esbuild from "esbuild";

async function run() {
  const result = await esbuild.build({});
  const { errors, mangleCache, metafile, outputFiles, warnings } = result
}
