#!/usr/bin/env -S yarn tsx

/// <reference path="./index.d.ts" />

import * as process from "process";
import * as fs from "fs";

namespace CLI {
  export type Options = {
    inputFiles: string[];
    showVersion: boolean;
    showHelp: boolean;
  };
}

class CLI {
  private static _name: string = "ts-esbuld-react";
  private static _author: string = "nathanjhood <nathanjhood@googlemail.com>";
  private static _license: string = "Copyright 2024 MIT license";
  private static _webpage: string =
    "https://github.com/nathanjhood/ts-esbuild-react";
  private static _description: string = "ESBuild with Typescript for React";
  private static _input_args: string[] = [];
  private static _input_files: string[] = [];
  private static _show_version: boolean = false;
  private static _show_help: boolean = false;
  private static _version: string = "1.0.0"; // | object = { major: 1, minor: 0, patch: 0 };
  private static _help: string = `
  ${this._name} - ${this._description}
  version ${this._version}
  author: ${this._author}
  ${this._license}

  useage:

  $ ${__filename} [files] <parameters>

  parameters:

  --version   |   show version information
  --help      |   show help message

  visit: ${this._webpage}
`;

  constructor(options?: CLI.Options) {
    if (options && options.inputFiles) CLI._input_files = options.inputFiles;
    if (options && options.showVersion) CLI._show_version = options.showVersion;
    if (options && options.showHelp) CLI._show_help = options.showHelp;
  }

  private static async parseArgs(argv: string[]) {
    if (argv.length < 3) {
      console.warn("No input parameters");
    }
    if (argv.length > 64) {
      const msg = "Too many input parameters";
      console.error(msg);
      throw new Error(msg, { cause: argv });
    }

    // Args passed validation - pass them to an array...
    this._input_args = argv.slice(2).map((arg, index) => {
      return arg;
    });

    if (process.env.VERBOSE) {
      console.log("current args ", this._input_args);
      console.log("current files: ", this._input_files);
    }

    for (const idx in this._input_args) {
      const arg = this._input_args[idx];
      if (process.env.VERBOSE)
        console.info("processing arg: ", parseInt(idx), arg);
      // flags
      if (!(this._input_args.length === 0)) {
        if (arg === /--version/.source || arg === /-v/.source) {
          if (this._show_version) {
            const msg = "cannot use -v/--version parameter twice!";
            throw new Error(msg);
          }
          this._show_version = true;
          break;
        }
        if (arg === /--help/.source || arg === /-h/.source) {
          if (this._show_help) {
            const msg = "cannot use -h/--help parameter twice!";
            throw new Error(msg);
          }
          this._show_help = true;
          break;
        }
        if (arg === /--showConfig/.source) {
          if (this._show_help) {
            const msg = "cannot use --showConfig parameter twice!";
            throw new Error(msg);
          }
          this._show_help = true;
          break;
        }
      }
      const file = arg;
      if (!fs.existsSync(file)) {
        throw new Error(file + ": No such file or directory");
      }
      if (process.env.VERBOSE) console.info("pushing file: ", file);
      this._input_files.push(file);
    }

    return this._input_args;
  }

  private static async processArgs(argv: string[]) {
    try {
      const out = await this.parseArgs(argv)
        .then((args) => {
          if (this._show_help) {
            console.log(this._help);
            return process.exit();
          }

          if (this._show_version) {
            console.log("version", this._version);
            return process.exit();
          }
          return args;
        })
        .catch((err) => {
          const error = new Error("Error: ", { cause: err });
          console.error(error);
          process.exit(1);
        });
      return out;
    } catch (err) {
      const error = new Error("Error: ", { cause: err });
      console.error(error);
      process.exit(1);
    }
  }
  async process(argv: string[]) {
    return await CLI.processArgs(argv);
  }
}

const main = async (argv: string[]) => {
  const cli = new CLI();
  const args = await cli.process(argv);
  console.info(args);

  return;
};

export = (async () => await main(process.argv))();
