import React from "react";
import ReactDOM from "react-dom";
import {ReactQueryConfigProvider} from 'react-query'
import AppProviders from './context/AppProviders'

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const queryConfig = { 
  queries: {
    refetchOnWindowFocus: false,
  },
} 

ReactDOM.render(
  <ReactQueryConfigProvider config={queryConfig}>
    <AppProviders>
      <App />
    </AppProviders>
  </ReactQueryConfigProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
