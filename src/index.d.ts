declare class CLI {
  constructor(options?: CLI.Options);
  process(argv: string[]): Promise<string[]>;
}

declare namespace CLI {
  export type Options = {
    inputFiles: string[];
    showVersion: boolean;
    showHelp: boolean;
  };
}

declare const main: (argv: string[]) => Promise<void>;

export { main as default, main, CLI };
