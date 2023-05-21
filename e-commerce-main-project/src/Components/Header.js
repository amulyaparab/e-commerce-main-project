import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const Header = () => {
  const { dispatch } = useContext(ProductsContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("encodedTokenTest");
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Ascend.</h1>
      </NavLink>
      <div>
        <div className="nav-icons">
          <div className="search-parent">
            <input
              placeholder="Search"
              className="search"
              onChange={(event) => {
                dispatch({ type: "SEARCH_BAR", payload: event.target.value });
                navigate("/products");
              }}
            />
            <i class="fa-solid fa-magnifying-glass magnify"></i>
            <button onClick={logoutHandler}>Logout</button>
          </div>
          <div>
            <NavLink to="/products">
              <i class="fa-solid fa-shop"></i>
            </NavLink>
            <NavLink to="/wishlist">
              <i class="fa-solid fa-heart"></i>
            </NavLink>
            <NavLink to="/cart">
              <i class="fa-solid fa-bag-shopping"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
