export declare type Options = {
  // If empty, uses tsconfig.json
  tsconfigPath?: string;
  // If true, force compilation with tsc
  force?: boolean;
  // If true, enables tsx file support
  tsx?: boolean;
};

export default Options;
