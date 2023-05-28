import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { APIContext } from "../Contexts/APIProvider";
import { NotificationModal } from "../Components/NotificationModal";

export const SingleProduct = () => {
  const { prodId } = useParams();
  const { state, dispatch, setNotificationActive } =
    useContext(ProductsContext);

  const singleProduct = state?.prodData?.find((prod) => prod._id === prodId);

  const isItemInCart = state?.cart?.includes(
    state?.cart?.find((item) => item._id === singleProduct._id)
  );

  const isItemInWishlist = state?.wishlist?.includes(
    state?.wishlist?.find((prod) => prod._id === singleProduct._id)
  );

  const {
    increaseCartQuantity,
    postToCart,
    fetchCart,
    deleteFromWishlist,
    postToWishlist,
    fetchWishlist,
  } = useContext(APIContext);

  const handleAddToCart = async (item) => {
    try {
      setNotificationActive(true);
      isItemInCart
        ? await increaseCartQuantity(item._id)
        : await postToCart(item);

      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart.filter(
        (item) => item._id !== undefined || item._id !== null
      );
      console.log(cart);
      dispatch({
        type: "FETCH_CART",
        payload: cart,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNotificationActive(false);
    }
  };
  const addToWishlistHandler = async (item) => {
    try {
      setNotificationActive(true);
      isItemInWishlist
        ? await deleteFromWishlist(item._id)
        : await postToWishlist(item);

      const wishlist = await fetchWishlist();

      dispatch({
        type: "FETCH_WISHLIST",
        payload: wishlist,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
    }
  };
  return (
    <div className="background">
      <NotificationModal
        text={"Added To Cart"}
        icon={
          <i class="fa-solid fa-circle-check" style={{ color: "#90c190" }}></i>
        }
      />
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
            style={{ color: isItemInWishlist ? "#BA3C3C" : "#2f2e41" }}
            onClick={() => addToWishlistHandler(singleProduct)}
          ></i>
          <small className="brand">{singleProduct?.brand}</small>

          <h1 className="single-price">₹{singleProduct?.price}</h1>
          <p className="desc">{singleProduct?.description}</p>

          {/* <p className="single-rating">Rating: {singleProduct?.rating}</p> */}
          {isItemInCart ? (
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
