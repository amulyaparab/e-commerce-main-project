import { NavLink } from "react-router-dom";
import { bestBath, bestHair, bestHome, bestSkin } from "../../Assests";

export const BestSellers = () => {
  return (
    <section className="categories">
      <div className="heading">
        <h1>Best Sellers</h1>
      </div>
      <div className="category-photos">
        <NavLink to="/api/products/best-seller-2" className="photos">
          <img src={bestBath} alt="bestseller bath bomb " />
          <p className="name best-name">Soothing Lemon Bath Bomb</p>
        </NavLink>
        <NavLink to="/api/products/best-seller-1" className="photos">
          <img src={bestSkin} alt="bestseller skin care" />
          <p className="name best-name">Brightening Serum</p>
        </NavLink>
        <NavLink to="/api/products/best-seller-3" className="photos">
          <img src={bestHair} alt="bestseller shampoo + conditioner" />
          <p className="name best-name">Love Shampoo Combo</p>
        </NavLink>
        <NavLink to="/api/products/best-seller-4" className="photos">
          <img src={bestHome} alt="bestseller home decor" />
          <p className="name best-name">Glass Terrarium</p>
        </NavLink>
      </div>
    </section>
  );
};
