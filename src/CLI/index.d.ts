export = CLI;

declare class CLI {
  constructor(options?: CLIOptions): CLI;
  async process(argv: string[]);
}

declare namespace CLI {
  export type CLIOptions = {
    inputFiles: string[];

    showVersion: boolean;
    showHelp: boolean;
  };
}
