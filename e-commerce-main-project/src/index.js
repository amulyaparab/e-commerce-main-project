import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Contexts/ProductsProvider";
// import { CartAndWishlistProvider } from "./Contexts/CartAndWishlistProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        {/* <CartAndWishlistProvider> */}
        <App />
        {/* </CartAndWishlistProvider> */}
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
