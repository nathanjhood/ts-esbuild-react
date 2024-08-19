import * as React from 'react';
import * as ReactDom from 'react-dom';

import logo from './logo.svg';
import './App.css';

import { HOME, USER } from 'env';

/**
 *
 * @returns {JSX.Element}
 */
export function App(): JSX.Element {
  console.log(USER)
  console.log(HOME)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/nathanjhood/ts-esbuild-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by esbuild with Typescript
        </a>
      </header>
    </div>
  );
}

export default App;
