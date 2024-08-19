import * as React from "react";
import * as ReactDOM from "react-dom";

// import { PUBLIC_URL } from "env";

const env = new ReactEnvironment({
  development: {
    NODE_ENV: "development",
    PUBLIC_URL: "/",
    HOST: "127.0.0.1",
    PORT: "3000",
    HTTPS: "false",
  },
  production: {
    NODE_ENV: "production",
    PUBLIC_URL: "https://nh-pages.stoneydsp.com/ts-esbuild-react/",
    HOST: "nh-pages.stoneydsp.com",
    PORT: "80",
    HTTPS: "true",
  },
  test: {
    NODE_ENV: "test",
    PUBLIC_URL: "/",
    HOST: "127.0.0.1",
    PORT: "3000",
    HTTPS: "false"
  }
});


export const Index = () => {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      <link rel="icon" href="./favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using ts-esbuild-react" />
      <link rel="apple-touch-icon" href="./logo192.png" />
      {
        /**
         * manifest.json provides metadata used when your web app is installed
         * on a user's mobile device or desktop.
         * See https://developers.google.com/web/fundamentals/web-app-manifest/
         */
      }
      <link rel="manifest" href={ process.env.PUBLIC_URL + "manifest.json" } />
      {
        /**
         * Notice the use of %PUBLIC_URL% in the tags above.
         * It will be replaced with the URL of the `public` folder during the build.
         * Only files inside the `public` folder can be referenced from the HTML.
         *
         * Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
         * work correctly both with client-side routing and a non-root public URL.
         * Learn how to configure a non-root public URL by running `npm run build`.
         */
      }
      <meta name="referrer" content="no-referrer" />
      <link rel="stylesheet" href={ process.env.PUBLIC_URL + "index.jcss" } />
      <title>React App</title>
    </head>
    <body>
      <noscript>
        We're sorry but this application doesn't work properly without Javascript
        enabled. Please enable it to continue.
      </noscript>
      <div id="root"></div>
        {
          /**
           * This HTML file is a template.
           * If you open it directly in the browser, you will see an empty page.
           *
           * You can add webfonts, meta tags, or analytics to this file.
           * The build step will place the bundled scripts into the <body> tag.
           *
           * To begin the development, run `npm start` or `yarn start`.
           * To create a production bundle, use `npm run build` or `yarn build`.
           */
        }

      <script type="module" src={ process.env.PUBLIC_URL + "index.js" }></script>
    </body>
  </html>
  )
}

export default Index;
