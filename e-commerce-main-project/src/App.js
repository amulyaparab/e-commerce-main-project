import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProducts } from "./Contexts/ProductsProvider";

import {
  Cart,
  Checkout,
  ErrorPage,
  Footer,
  Header,
  Home,
  Loading,
  Login,
  Products,
  Profile,
  RequiresAuth,
  SignUp,
  SingleProduct,
  Success,
  Wishlist,
} from "./Pages";

function App() {
  const { fetchCategoriesAgain, fetchProductsAgain } = useProducts();

  useEffect(() => {
    fetchProductsAgain();
    fetchCategoriesAgain();
  }, []);

  return (
    <div className="App">
      <Loading />
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/api/products/:prodId" element={<SingleProduct />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/success"
          element={
            <RequiresAuth>
              <Success />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
