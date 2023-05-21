import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Ascend.</h1>
      </NavLink>
      <div>
        <input placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass"></i>

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
    </nav>
  );
};
