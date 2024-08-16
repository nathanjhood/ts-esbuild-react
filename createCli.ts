import { spawn } from 'child_process';

const controller = new AbortController();
const { signal } = controller;

const createCli = async () => {
  const cli = spawn(
    './index.ts',
    process.argv,
    {
      shell: true,
      signal: signal,
      env: process.env,
      
    }
  );
  cli.stdout.on('data', (data) => {
    console.info(`${data}`);
  });
  cli.stderr.on('data,', (error) => {
    console.error(`error: ${error.message}`);
  })
  cli.on('error', (err) => {
    console.info(`child process exited with code ${err}`);
  });
  cli.on('close', (code) => {
    console.info(`child process exited with code ${code}`);
  });
};

export = (async () => await createCli())()