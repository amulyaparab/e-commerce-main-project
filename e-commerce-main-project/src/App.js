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
import { Checkout } from "./Pages/Checkout";
import { SignUp } from "./Pages/SignUp";
import { Loading } from "./Pages/Home/Components/Loading";

function App() {
  return (
    <div className="App">
      <Loading />
      <Header />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
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
{
  /* <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header> */
}
