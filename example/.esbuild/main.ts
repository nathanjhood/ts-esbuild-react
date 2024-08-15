import { spawn } from "child_process";

/**
 *
 * @returns {number}
 */
function main(): number {

  const controller = new AbortController();
  const { signal } = controller;

  const mode = process.env.npm_config_mode;

  const createTscServer = () => {
    const tsc = spawn('npx tsc', ['--noEmit --watch --skipLibCheck --pretty --project tsconfig.json'], {
      shell: true,
      signal: signal
    })
    tsc.stdout.on('data', data => {
      console.info(`stdout: ${data}`)
    })
    tsc.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    tsc.on('error', error => {
      console.error(`error: ${error.message}`)
    })
    tsc.on('close', (code) => {
      if (code !== 0) {
        console.warn(`tsc process exited with code ${code}`);
      }
    });
    controller.abort()
  }

  switch(mode) {
    case 'dev': {
      break;
    }
    case 'start': {
      break;
    }
    case 'build': {
      break;
    }
    case 'test': {
      break;
    }
    default: {
      break;
    }
  }

  createTscServer()

  return 0;
}



export default main()
