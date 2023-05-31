import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { APIContext } from "./APIProvider";
import { ProductsContext } from "./ProductsProvider";
export const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { state, dispatch, setNotificationActive } =
    useContext(ProductsContext);

  const {
    postToCart,
    increaseCartQuantity,
    postToWishlist,
    fetchCart,
    fetchWishlist,
    deleteFromWishlist,
    deleteFromCart,
    decreaseCartQuantity,
  } = useContext(APIContext);
  const [modal, setModal] = useState(false);

  const isItemInCart = (item) => {
    const isItemInCart = state.cart.includes(
      state.cart.find((prod) => prod._id === item._id)
    );
    return isItemInCart;
  };
  const isItemInWishlist = (item) => {
    const isItemInWishlist = state.wishlist.includes(
      state.wishlist.find((prod) => prod._id === item._id)
    );
    return isItemInWishlist;
  };
  const updateCart = async () => {
    const unfilteredCart = await fetchCart();
    const cart = unfilteredCart.cart.filter(
      (item) => item._id !== undefined || item._id !== null
    );
    dispatch({
      type: "FETCH_CART",
      payload: cart,
    });
  };

  const updateWishlist = async () => {
    const wishlist = await fetchWishlist();
    dispatch({
      type: "FETCH_WISHLIST",
      payload: wishlist,
    });
  };

  const handleAddToCart = async (item) => {
    try {
      toast.success("Added To Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setNotificationActive(true);

      isItemInCart(item)
        ? await increaseCartQuantity(item._id)
        : await postToCart(item);
      updateCart();
    } catch (error) {
      console.log(error);
    } finally {
      setNotificationActive(false);
    }
  };

  const addToWishlistHandler = async (item) => {
    try {
      setNotificationActive(true);

      if (isItemInWishlist(item)) {
        await deleteFromWishlist(item._id);
        toast.error("Removed From Wishlist", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        await postToWishlist(item);
        toast.success("Added To Wishlist", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      updateWishlist();
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
    }
  };

  const removefromWishlistHandler = async (itemId) => {
    try {
      toast.error("Removed From Wishlist", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setNotificationActive(true);
      await deleteFromWishlist(itemId);
      updateWishlist();
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

      isItemInCart(item)
        ? await increaseCartQuantity(item._id)
        : await postToCart(item);
      await deleteFromWishlist(item._id);
      updateWishlist();
      updateCart();
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
    }
  };
  const removefromCartHandler = async (item) => {
    try {
      console.log(modal);
      setModal(false);
      // setNotificationActive(true);
      toast.error("Removed From Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      await deleteFromCart(item._id);
      updateCart();
    } catch (err) {
      console.log(err);
    } finally {
      // setNotificationActive(false);
    }
  };
  const increaseQtyHandler = async (itemId) => {
    try {
      await increaseCartQuantity(itemId);
      updateCart();
    } catch (err) {
      console.log(err);
    }
  };
  const decreaseQtyHandler = async (item) => {
    try {
      if (item?.qty > 1) {
        await decreaseCartQuantity(item._id);
      } else {
        setModal(true);
      }
      updateCart();
    } catch (err) {
      console.log(err);
    }
  };
  const moveToWishlistHandler = async (item) => {
    try {
      setNotificationActive(true);
      setModal(false);
      toast.info("Moved To Wishlist", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      deleteFromCart(item._id);
      isItemInWishlist(item)
        ? await fetchWishlist()
        : await postToWishlist(item);

      updateWishlist();
      updateCart();
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
    }
  };
  return (
    <UtilsContext.Provider
      value={{
        handleAddToCart,
        addToWishlistHandler,
        removefromWishlistHandler,
        moveToCartHandler,
        removefromCartHandler,
        increaseQtyHandler,
        decreaseQtyHandler,
        moveToWishlistHandler,
        modal,
        setModal,
        isItemInCart,
        isItemInWishlist,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
