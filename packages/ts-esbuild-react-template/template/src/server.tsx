import * as React from 'react';
// import * as ReactDom from 'react-dom';
import * as Server from 'react-dom/server';

import logo from './logo.svg';
import App from './App';

/**
 * TODO: Point esbuild and index.html at this file and serve with express
 */

export default Server.renderToString(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
