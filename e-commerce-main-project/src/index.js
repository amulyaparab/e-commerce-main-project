import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Contexts/ProductsProvider";
import { AuthProvider } from "./Contexts/AuthProvider";
import { APIProvider } from "./Contexts/APIProvider";
import { UtilsProvider } from "./Contexts/UtilsProvider";
import { AddressProvider } from "./Contexts/AddressProvider";
// import { CartAndWishlistProvider } from "./Contexts/CartAndWishlistProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIProvider>
        <AuthProvider>
          <ProductsProvider>
            <UtilsProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </UtilsProvider>
          </ProductsProvider>
        </AuthProvider>
      </APIProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
