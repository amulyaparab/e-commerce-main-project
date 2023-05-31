import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";

import { UtilsContext } from "../Contexts/UtilsProvider";
export const SingleProduct = () => {
  const { prodId } = useParams();
  const { state } = useContext(ProductsContext);

  const singleProduct = state?.prodData?.find((prod) => prod._id === prodId);

  const {
    handleAddToCart,
    addToWishlistHandler,
    isItemInCart,
    isItemInWishlist,
  } = useContext(UtilsContext);

  return (
    <div className="background">
      <div className="single-product">
        <img
          className="image"
          src={singleProduct?.image}
          alt={singleProduct?.name}
        />
        <div className="single-product-info">
          <p className="single-prod-rating">
            {singleProduct?.rating} <i class="fa-solid fa-star"></i>
          </p>
          <h1>{singleProduct?.name}</h1>

          <i
            class="fa-solid fa-heart single-prod-heart"
            style={{
              color: isItemInWishlist(singleProduct) ? "#BA3C3C" : "#2f2e41",
            }}
            onClick={() => addToWishlistHandler(singleProduct)}
          ></i>
          <small className="brand">{singleProduct?.brand}</small>

          <h1 className="single-price">₹{singleProduct?.price}</h1>
          <p className="desc">{singleProduct?.description}</p>

          {isItemInCart(singleProduct) ? (
            <NavLink to="/cart">
              <button className="add-to-cart go-to-cart">Go To Cart</button>
            </NavLink>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(singleProduct)}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
