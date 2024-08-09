import * as React from 'react'
// import * as Server from 'react-dom/server'

// let Greet = () => <h1>Hello, world!</h1>
// console.log(Server.renderToString(<Greet />))

// import React from 'react'
// import Server from 'react-dom/server'

// import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.svg" className="App-logo" alt="logo" />
        { /** <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// console.log(Server.renderToString(<App />))
