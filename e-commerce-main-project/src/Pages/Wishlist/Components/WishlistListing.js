import { useContext } from "react";
import { ProductCard } from "../../Products/Components/ProductCard";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { APIContext } from "../../../Contexts/APIProvider";
import { toast } from "react-toastify";
export const WishlistListing = () => {
  const { state, dispatch, filteredData, setNotificationActive } =
    useContext(ProductsContext);
  const {
    deleteFromWishlist,
    fetchWishlist,
    postToCart,
    fetchCart,
    increaseCartQuantity,
  } = useContext(APIContext);
  //  const {
  //    postToCart,
  //    updateCartQuantity,
  //    postToWishlist,
  //    fetchCart,
  //    fetchWishlist,
  //    deleteFromWishlist,
  //  } = useContext(APIContext);
  const removefromWishlistHandler = async (itemId) => {
    try {
      toast.error("Removed From Wishlist", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setNotificationActive(true);
      await deleteFromWishlist(itemId);
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
  const moveToCartHandler = async (item) => {
    try {
      toast.info("Moved To Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setNotificationActive(true);
      const prod = state?.cart?.find((prod) => {
        return prod._id === item._id;
      });
      const isItemInCart = state?.cart?.includes(prod);
      isItemInCart
        ? await increaseCartQuantity(item._id)
        : await postToCart(item);
      await deleteFromWishlist(item._id);
      const wishlist = await fetchWishlist();
      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart.filter(
        (item) => item._id !== undefined || item._id !== null
      );
      dispatch({
        type: "FETCH_WISHLIST",
        payload: wishlist,
      });
      dispatch({
        type: "FETCH_CART",
        payload: cart,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
    }
  };
  return (
    <>
      {state?.wishlist?.map((item) => {
        return (
          <div className="productCard" key={item._id}>
            <i
              class="fa-solid fa-xmark wishlist-heart"
              onClick={() => removefromWishlistHandler(item._id)}
            ></i>
            <div>
              <ProductCard item={item} />
            </div>
            <button
              className="add-to-cart go-to-cart move"
              onClick={() => moveToCartHandler(item)}
            >
              Move To Cart
            </button>
          </div>
        );
      })}
    </>
  );
};
