import { Route, Routes } from "react-router-dom";
import "./App.css";

import Mockman from "mockman-js";
import { Home } from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { Cart } from "./Pages/Cart/Cart";
import { SingleProduct } from "./Pages/SingleProduct";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Login } from "./Pages/Login";
import { RequiresAuth } from "./Components/RequiresAuth";
import { Profile } from "./Pages/Profile";
import { Checkout } from "./Pages/Checkout/Checkout";
import { SignUp } from "./Pages/SignUp";
import { Loading } from "./Pages/Home/Components/Loading";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const fetchLoginData = async () => {
    const creds = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    const options = {
      method: "POST",
      body: JSON.stringify(creds),
    };
    const loginRes = await fetch("/api/auth/login", options);
    const loginResponse = await loginRes.json();
    localStorage.setItem("encodedTokenTest", loginResponse.encodedToken);
    return loginResponse;
  };
  useEffect(() => {
    fetchLoginData();
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
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
