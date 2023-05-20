import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const ProductCard = ({ item }) => {
  //   const { _id, image, name, brand, price } = item;
  const { state, dispatch } = useContext(ProductsContext);
  const isItemInWishlist = state?.wishlist?.includes(
    state?.wishlist?.find((prod) => prod._id === item._id)
  );
  return (
    <div key={item?._id}>
      <i
        class="fa-solid fa-heart wishlist-heart"
        // className={isItemInWishlist ? "red" : "not-red"}
        onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })}
      ></i>
      <NavLink to={`/api/products/${item?._id}`}>
        <img src={item?.image} width="250px" height="350px" alt={item?.name} />
      </NavLink>
      <div className="description">
        <h4>{item?.brand}</h4>
        <p>{item?.name}</p>
        <h4 className="price">Price: ₹{item?.price}</h4>
      </div>
    </div>
  );
};
