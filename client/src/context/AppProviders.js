import * as React from 'react'

import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import { SideDrawerProvider } from "./SideDrawerContext";

function AppProviders({children}) {
    return (
      <React.StrictMode>
        <AuthProvider>
          <SideDrawerProvider>
            <BrowserRouter>
              {children}
            </BrowserRouter>
          </SideDrawerProvider>
        </AuthProvider>
      </React.StrictMode>
    )
  }
  
  export default AppProviders