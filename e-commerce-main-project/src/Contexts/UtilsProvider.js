import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useAPI } from "./APIProvider";
import { useProducts } from "./ProductsProvider";
import { useAuth } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { state, dispatch, setNotificationActive } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    postToCart,
    increaseCartQuantity,
    postToWishlist,
    fetchCart,
    fetchWishlist,
    deleteFromWishlist,
    deleteFromCart,
    decreaseCartQuantity,
    setIsLoading,
  } = useAPI();
  const [modal, setModal] = useState(false);

  const isItemInCart = (item) => {
    const isItemInCart = state.cart?.includes(
      state.cart.find((prod) => prod._id === item._id)
    );
    return isItemInCart;
  };
  const isItemInWishlist = (item) => {
    const isItemInWishlist = state.wishlist?.includes(
      state.wishlist.find((prod) => prod._id === item._id)
    );
    return isItemInWishlist;
  };
  const isEncodedTokenPresent =
    localStorage.getItem("encodedTokenTest") ||
    localStorage.getItem("userEncodedToken");

  const updateCart = async () => {
    try {
      setIsLoading(true);
      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart?.filter(
        (item) => item._id !== undefined || item._id !== null
      );
      dispatch({
        type: "FETCH_CART",
        payload: cart,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateWishlist = async () => {
    try {
      setIsLoading(true);
      const wishlist = await fetchWishlist();
      dispatch({
        type: "FETCH_WISHLIST",
        payload: wishlist,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const { testUser, newUser } = useAuth();
  const handleAddToCart = async (item) => {
    try {
      setNotificationActive(true);
      if (isEncodedTokenPresent) {
        setNotificationActive(true);
        toast.success("Added To Cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        if (isItemInCart(item)) {
          console.log("cart");
          return state.cart;
        } else {
          console.log(" not in cart");
          await postToCart(item);
        }

        updateCart();
      } else {
        navigate("/login", { state: { from: location } });
        toast.warn("Please Log In First", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setNotificationActive(false);
    }
  };

  const addToWishlistHandler = async (item) => {
    try {
      setNotificationActive(true);
      if (isEncodedTokenPresent) {
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
      } else {
        navigate("/login", { state: { from: location } });
        toast.warn("Please Log In First", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
    }
  };

  const removefromWishlistHandler = async (itemId) => {
    try {
      setNotificationActive(true);
      toast.error("Removed From Wishlist", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
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
      setNotificationActive(true);
      toast.info("Moved To Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

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
      setNotificationActive(true);
      toast.error("Removed From Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      await deleteFromCart(item._id);
      updateCart();
    } catch (err) {
      console.log(err);
    } finally {
      setNotificationActive(false);
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
        await deleteFromCart(item._id);
        toast.error("Removed From Cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
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
        isEncodedTokenPresent,
        updateCart,
        updateWishlist,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
export const useUtils = () => useContext(UtilsContext);
