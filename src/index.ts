#!/usr/bin/env -S yarn tsx
/// <reference lib="ESNext" />

import CLI from "./CLI";

const main = async (argv: string[]) => {
  const cli = new CLI();
  const args = await cli.process(argv);
  console.info(args);
  return;
};

export = (async () => await main(process.argv))();
