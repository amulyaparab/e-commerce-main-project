import { Route, Routes } from "react-router-dom";
import "./App.css";

import Mockman from "mockman-js";

// import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
// import { Cart } from "./Pages/Cart/Cart";
import { SingleProduct } from "./Pages/SingleProduct";
// import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Login } from "./Pages/Login";
import { RequiresAuth } from "./Components/RequiresAuth";
import { Profile } from "./Pages/Profile";
import { Checkout } from "./Pages/Checkout/Checkout";
import { SignUp } from "./Pages/SignUp";
import { Loading } from "./Pages/Home/Components/Loading";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Success } from "./Pages/Success";
import { ProductsContext } from "./Contexts/ProductsProvider";
import { APIContext } from "./Contexts/APIProvider";
import { Cart, Home, Wishlist } from "./Pages";
import { UtilsContext } from "./Contexts/UtilsProvider";

function App() {
  // const fetchLoginData = async () => {
  //   const creds = {
  //     email: "adarshbalika@gmail.com",
  //     password: "adarshbalika",
  //   };
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(creds),
  //   };
  //   const loginRes = await fetch("/api/auth/login", options);
  //   const loginResponse = await loginRes.json();
  //   localStorage.setItem("encodedTokenTest", loginResponse.encodedToken);
  //   return loginResponse;
  // };
  const { dispatch, setIsLoading } = useContext(ProductsContext);
  const { fetchProducts, fetchCart, fetchWishlist, fetchCategories } =
    useContext(APIContext);
  const fetchProductsAgain = async () => {
    try {
      setIsLoading(true);
      const products1 = await fetchProducts();
      dispatch({ type: "FETCH_PRODUCTS", payload: products1 });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchCategoriesAgain = async () => {
    try {
      setIsLoading(true);
      const categories1 = await fetchCategories();
      dispatch({ type: "FETCH_CATEGORIES", payload: categories1 });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
