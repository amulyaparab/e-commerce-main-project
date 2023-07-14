import { NavLink, useParams } from "react-router-dom";
import { useProducts, useUtils } from "../../Contexts";

export const SingleProduct = () => {
  const { prodId } = useParams();
  const { state } = useProducts();
  const {
    handleAddToCart,
    addToWishlistHandler,
    isItemInCart,
    isItemInWishlist,
    disableBtn,
    isEncodedTokenPresent,
  } = useUtils();

  const singleProduct = state?.prodData?.find((prod) => prod._id === prodId);

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
            {singleProduct?.rating} <i className="fa-solid fa-star"></i>
          </p>
          <h1>{singleProduct?.name}</h1>
          <i
            className={`fa-solid fa-heart single-prod-heart ${
              isItemInWishlist(singleProduct) && isEncodedTokenPresent
                ? "colorRed"
                : "colorPrimary"
            }  ${disableBtn ? "disabled" : ""}`}
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
              disabled={disableBtn}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
