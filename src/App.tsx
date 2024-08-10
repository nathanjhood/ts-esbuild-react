import 'client-only';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// import * as Server from 'react-dom/server'

import logo from './logo.svg';
import './App.css';

// let Greet = () => <h1>Hello, world!</h1>
// console.log(Server.renderToString(<Greet />))

/**
 *
 * @returns {JSX.Element}
 */
export function App(): JSX.Element {
  // React.useEffect(() => {
  //   window.process = {
  //     ...window.process
  //   };
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1 className="text-5xl font-bold underline">Hello world!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// console.log(Server.renderToString(<App />))
