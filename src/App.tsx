import React = require("react");
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={"data:image/svg+xml;base64," + logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/nathanjhood/esbuild-scripts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @nathanjhood/esbuild-scripts
        </a>
      </header>
    </div>
  );
}

export = App;
