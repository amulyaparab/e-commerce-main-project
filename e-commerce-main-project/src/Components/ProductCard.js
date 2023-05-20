import { NavLink } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <div key={item?._id} className="cartSlide">
      <NavLink to={`/api/products/${item?._id}`}>
        <img src={item?.image} width="250px" height="350px" alt={item?.name} />
      </NavLink>
      <div className="description">
        <h4 className="product-brand">{item?.brand}</h4>
        <p className="product-name">{item?.name}</p>
        <h4 className="price">Price: ₹{item?.price}</h4>
      </div>
    </div>
  );
};
