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
      <APIProvider>
        <ProductsProvider>
          <AddressProvider>
            <UtilsProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </UtilsProvider>
          </AddressProvider>
        </ProductsProvider>
      </APIProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
