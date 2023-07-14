import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  APIProvider,
  AddressProvider,
  AuthProvider,
  ProductsProvider,
  UtilsProvider,
} from "./Contexts";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <APIProvider>
          <ProductsProvider>
            <AddressProvider>
              <UtilsProvider>
                <App />
              </UtilsProvider>
            </AddressProvider>
          </ProductsProvider>
        </APIProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
