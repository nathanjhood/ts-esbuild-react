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
