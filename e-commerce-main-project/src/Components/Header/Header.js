import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useProducts, useUtils } from "../../Contexts";

export const Header = () => {
  const { state, dispatch } = useProducts();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isEncodedTokenPresent } = useUtils();

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

  const conditionForWishlistIcons =
    state.wishlist?.length >= 1 && isEncodedTokenPresent;

  const conditionForCartIcons =
    state.cart?.length >= 1 && isEncodedTokenPresent;

  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Ascend.</h1>
      </NavLink>
      <div className={` toggle-icon ${isCollapsed ? "collapsed" : ""}`}>
        <i
          className="fa-solid fa-bars "
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
              value={state.search}
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
                className={`${conditionForWishlistIcons ? "qty-on-icon" : ""}`}
              >
                {conditionForWishlistIcons ? state.wishlist?.length : null}
              </small>
            </NavLink>
            <NavLink className="cart-icon" to="/cart">
              <i className="fa-solid fa-bag-shopping"></i>
              <small
                className={`${conditionForCartIcons ? "qty-on-icon" : ""}`}
              >
                {conditionForCartIcons ? state.cart?.length : null}
              </small>
            </NavLink>
            <NavLink to="/profile">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
