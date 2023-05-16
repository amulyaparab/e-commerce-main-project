import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Ascend.</h1>
      </NavLink>
      <div>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
};
