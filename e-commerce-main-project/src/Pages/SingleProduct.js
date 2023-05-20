import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const SingleProduct = () => {
  const { prodId } = useParams();
  const { state, dispatch } = useContext(ProductsContext);
  const singleProduct = state?.prodData?.find((prod) => prod._id === prodId);
  // const { _id, name, description, price, rating, category, brand, image } =
  //   singleProduct;
  console.log(prodId);
  const isItemInCart = state?.cart?.includes(singleProduct);
  const isItemInWishlist = state?.wishlist?.includes(
    state?.wishlist?.find((prod) => prod._id === singleProduct._id)
  );
  return (
    <div className="background">
      {/* <h1 className="header-heading">About</h1> */}
      <div className="single-product">
        <img
          className="image"
          src={singleProduct?.image}
          alt={singleProduct?.name}
        />
        <div className="single-product-info">
          <h1>{singleProduct?.name}</h1>

          <i
            class="fa-solid fa-heart single-prod-heart"
            style={{ color: isItemInWishlist ? "#BA3C3C" : "#2f2e41" }}
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST", payload: singleProduct })
            }
          ></i>
          <small className="brand">{singleProduct?.brand}</small>
          <h1 className="single-price">₹{singleProduct?.price}</h1>
          <p className="desc">{singleProduct?.description}</p>

          {/* <p className="single-rating">Rating: {singleProduct?.rating}</p> */}
          {isItemInCart ? (
            <NavLink to="/cart">
              <button
                className="add-to-cart go-to-cart"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: singleProduct })
                }
              >
                Go To Cart
              </button>
            </NavLink>
          ) : (
            <button
              className="add-to-cart"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: singleProduct })
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
