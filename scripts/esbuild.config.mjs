import * as esbuild from 'esbuild'
import esbuildPluginTsc from 'esbuild-plugin-tsc'
import esbuildPluginCopy from 'esbuild-plugin-copy'
import esbuildPluginClean from 'esbuild-plugin-clean'
import { fileURLToPath, URL } from 'node:url';

export const createBuildOptions = (options) => {
	const publicSrcDir = './public'
	const publicOutputDir = './dist'
	const publicOutFile = `${publicOutputDir}/app.js`
	const srcHtmlFile = `./${publicSrcDir}/index.html`
	const destinationHTML = `${publicOutputDir}/index.html`
  	return {
		external: ['react', 'react-dom'],
		entryPoints: ['src/App.tsx'],
		outfile: fileURLToPath(new URL('dist/app.js', import.meta.url)),
		sourcemap: true,
		bundle: true,
		minify: true,
		plugins: [
		esbuildPluginTsc({
			force: true,
			// tsconfigPath: fileURLToPath(new URL('./tsconfig.bundler.json', import.meta.url)),
			tsx: true
		}),
		esbuildPluginClean({
			patterns: [
			`${publicOutputDir}/*`,
			`!${destinationHTML}`
			],
			sync: true,
			verbose: true,
		}),
		esbuildPluginCopy({
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
			})
		],

		...options
	}
}

export default createBuildOptions
