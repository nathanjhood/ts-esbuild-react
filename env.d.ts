declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;

      NODE_ENV: 'development' | 'production';
      
      PWD: string;
      SHELL: string;
      PATH: string;

      VERBOSE?: boolean | string;
      
      PORT?: string;
      HOST?: string;
      // TS_NODE

      /**
       * Path to tsconfig file.
       * @see https://typestrong.org/ts-node/docs/options#tsconfig-options
       */
      TS_NODE_PROJECT?: string;

      /**
       * Skip project config resolution and loading.
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#skipproject
       */
      TS_NODE_SKIP_PROJECT?: boolean;

      /**
       * JSON object to merge with compiler options
       * @see https://typestrong.org/ts-node/docs/options#compileroptions
       */
      TS_NODE_COMPILER_OPTION?: object;

      /**
       * Use TypeScript's faster transpileModule.
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#transpileonly
       */
      TS_NODE_TRANSPILE_ONLY?: boolean;

      /**
       * Opposite of `TS_NODE_TRANSPILE_ONLY`
       * @default true
       * @see https://typestrong.org/ts-node/docs/options#typecheck
       */
      TS_NODE_TYPE_CHECK?: boolean;

      /**
       * Use TypeScript's compiler host API
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#compilerhost
       */
      TS_NODE_COMPILER_HOST?: boolean;

      /**
       * Load "files", "include" and "exclude" from tsconfig.json on startup.
       * This may avoid certain typechecking failures.
       * See Missing types for details.
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#files
       */
      TS_NODE_FILES?: boolean;

      /**
       * @see https://typestrong.org/ts-node/docs/options#ignorediagnostics
       * @example 
       * ```sh
       * TS_NODE_IGNORE_DIAGNOSTICS=225,256
       * ```
       */
      TS_NODE_IGNORE_DIAGNOSTICS?: number | [number];

      /**
       * Override the path patterns to skip compilation
       * @default "/node_modules/"
       * @see https://typestrong.org/ts-node/docs/options#ignore
       */
      TS_NODE_IGNORE?: string;


      /**
       * Skip ignore checks
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#skipignore
       */
      TS_NODE_SKIP_IGNORE?: boolean;

      /**
       * Specify a custom TypeScript compiler
       * @default "typescript"
       * @see https://typestrong.org/ts-node/docs/options#compiler
       */
      TS_NODE_COMPILER?: string;

      /**
       * Re-order file extensions so that TypeScript imports are preferred
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#prefertsexts
       */
      TS_NODE_PREFER_TS_EXTS?: boolean;

      /**
       * Logs TypeScript errors to stderr instead of throwing exceptions
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#logerror
       */
      TS_NODE_LOG_ERROR?: boolean;

      /**
       * Use pretty diagnostic formatter
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#pretty
       */
      TS_NODE_PRETTY?: boolean;

      /**
       * Enable debug logging.
       * @see https://typestrong.org/ts-node/docs/options#ts_node_debug
       * @example
       * ```sh
       * $ TS_NODE_DEBUG=true ts-node
       * ```
       */
      TS_NODE_DEBUG?: boolean;

      /**
       * Behave as if invoked in this working directory
       * @default "process.cwd()"
       * @see https://typestrong.org/ts-node/docs/options#cwd
       */
      TS_NODE_CWD?: string;

      /**
       * Emit output files into ".ts-node" directory. Requires "--compilerHost"
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#emit
       */
      TS_NODE_EMIT?: boolean;

      /**
       * Scope compiler to files within "scopeDir".
       * Anything outside this directory is ignored.
       * @default false
       * @see https://typestrong.org/ts-node/docs/options#scope
       */
      TS_NODE_SCOPE?: boolean;

      /**
       * Directory within which compiler is limited when scope is enabled.
       * Default: First of: tsconfig.json "rootDir" if specified, directory containing tsconfig.json, or cwd if no tsconfig.json is loaded.
       * @see https://typestrong.org/ts-node/docs/options#scopedir
       */
      TS_NODE_SCOPE_DIR?: string;

      /**
       * Path to history file for REPL
       * @default "~/.ts_node_repl_history"
       * @example
       * ```sh
       * $ TS_NODE_HISTORY=<path/to/history/file> ts-node
       * ```
       * @see https://typestrong.org/ts-node/docs/options#ts_node_history
       */
      TS_NODE_HISTORY?: string;

      /**
       * Disable top-level await in REPL. Equivalent to node's --no-experimental-repl-await
       * default: Enabled if TypeScript version is 3.8 or higher and target is ES2018 or higher.
       * TS_NODE_EXPERIMENTAL_REPL_AWAIT set false to disable
       * @see https://typestrong.org/ts-node/docs/options#noexperimentalreplawait
       */
      TS_NODE_EXPERIMENTAL_REPL_AWAIT?: boolean;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}