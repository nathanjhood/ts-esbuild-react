/// <reference types="esbuild" />
/// <reference types="react" />
/// <reference types="react-dom" />

// Add this to '.gitignore'


/**
 * 
 */
declare module '*.svg' {
    const content: string;
    export default content;
}