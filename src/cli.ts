#!/usr/bin/env -S yarn tsx
/// <reference lib="ESNext" />

import main from ".";

export const cli = (async () => await main(process.argv))();

export default cli;
