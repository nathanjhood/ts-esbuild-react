#!/usr/bin/env -S yarn tsx

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

export function myFunction(a: string): string {
  return a;
}
export function myOtherFunction(a: number): number {
  return a;
}

export const myField: number = myOtherFunction(2);
