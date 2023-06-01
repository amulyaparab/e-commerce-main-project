import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const Header = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 800) {
        setIsCollapsed(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Ascend.</h1>
      </NavLink>
      <div className={` toggle-icon ${isCollapsed ? "collapsed" : ""}`}>
        <i
          class="fa-solid fa-bars "
          onClick={() => setIsCollapsed(!isCollapsed)}
        ></i>
      </div>
      <div className={`${isCollapsed ? "inline-icons" : "all-nav-icons"}`}>
        <div
          className={`${
            isCollapsed ? "inline-nav-icons nav-icon" : "nav-icons"
          }`}
        >
          <div className="search-parent">
            <input
              placeholder="Search"
              className="search"
              onChange={(event) => {
                dispatch({ type: "SEARCH_BAR", payload: event.target.value });
                navigate("/products");
              }}
            />
            <i className="fa-solid fa-magnifying-glass magnify"></i>
          </div>
          <div
            className={`${isCollapsed ? "inline-nav-icons-collection" : ""}`}
          >
            <NavLink to="/products">
              <i className="fa-solid fa-shop"></i>
            </NavLink>
            <NavLink className="wishlist-icon" to="/wishlist">
              <i className="fa-solid fa-heart"></i>
              <small
                className={`${state.wishlist.length >= 1 ? "qty-on-icon" : ""}`}
              >
                {state.wishlist.length >= 1 ? state.wishlist.length : null}
              </small>
            </NavLink>
            <NavLink className="cart-icon" to="/cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <small
                className={`${state.cart.length >= 1 ? "qty-on-icon" : ""}`}
              >
                {state.cart.length >= 1 ? state.cart.length : null}
              </small>
            </NavLink>
            <NavLink to="/profile">
              <i class="fa-solid fa-user"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
