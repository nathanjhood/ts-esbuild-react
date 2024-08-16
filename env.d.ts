declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
    }
  }
}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PWD: string;
      SHELL: string;
      PATH: string;
      VERBOSE?: string;
      PORT?: string;
      HOST?: string;
    }
  }
}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "development" | "production";
      OPENSSL_CONF?: string;
      SSL_CERT_DIR?: string;
      SSL_CERT_FILE?: string;
      TZ?: string;
      UV_THREADPOOL_SIZE?: string;
      UV_USE_IO_URING?: string;
    }
  }
}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FORCE_COLOR?: string;
      NO_COLOR?: string;
      NODE_COMPILE_CACHE?: string;
      NODE_DEBUG?: string;
      NODE_DEBUG_NATIVE?: string;
      NODE_DISABLE_COLORS?: string;
      NODE_EXTRA_CA_CERTS?: string;
      NODE_ICU_DATA?: string;
      NODE_NO_WARNINGS?: string;
      NODE_OPTIONS?: string;
      NODE_PATH?: string;
      NODE_PENDING_DEPRECATION?: string;
      NODE_PENDING_PIPE_INSTANCES?: string;
      NODE_PRESERVE_SYMLINKS?: string;
      NODE_REDIRECT_WARNINGS?: string;
      NODE_REPL_EXTERNAL_MODULE?: string;
      NODE_REPL_HISTORY?: string;
      NODE_SKIP_PLATFORM_CHECK?: string;
      NODE_TEST_CONTEXT?: string;
      NODE_TLS_REJECT_UNAUTHORIZED?: string;
      NODE_V8_COVERAGE?: string;
    }
  }
}

export {};
