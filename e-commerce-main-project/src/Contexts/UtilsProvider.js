import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useProducts } from "./ProductsProvider";
import { useAPI } from "./APIProvider";
import { useAddress } from "./AddressProvider";

const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const { state, dispatch, totalAmount } = useProducts();
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
  } = useAPI();

  const { selectedAddress } = useAddress();
  const [modal, setModal] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

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
    }
  };

  const updateWishlist = async () => {
    try {
      const wishlist = await fetchWishlist();
      dispatch({
        type: "FETCH_WISHLIST",
        payload: wishlist,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (item) => {
    try {
      if (isEncodedTokenPresent) {
        toast.success("Added To Cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setDisableBtn(true);
        await postToCart(item);
        setTimeout(() => {
          setDisableBtn(false);
        }, 500);
        updateCart();
      } else {
        navigate("/login", { state: { from: location } });
        toast.warn("Please Log In First", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlistHandler = async (item) => {
    try {
      if (isEncodedTokenPresent) {
        setDisableBtn(true);
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
        setTimeout(() => {
          setDisableBtn(false);
        }, 500);
        updateWishlist();
      } else {
        navigate("/login", { state: { from: location } });
        toast.warn("Please Log In First", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removefromWishlistHandler = async (itemId) => {
    try {
      toast.error("Removed From Wishlist", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      await deleteFromWishlist(itemId);
      updateWishlist();
    } catch (err) {
      console.log(err);
    }
  };
  const moveToCartHandler = async (item) => {
    try {
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
    }
  };

  const removefromCartHandler = async (item) => {
    try {
      setModal(false);

      toast.error("Removed From Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      await deleteFromCart(item._id);
      updateCart();
    } catch (err) {
      console.log(err);
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
    }
  };

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    if (selectedAddress) {
      const response = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!response) {
        alert("Razorpay SDK failed to load, check you internet connection");
        return;
      }
      const options = {
        key: "rzp_test_EPBilmCRDIX4I1",
        amount: Number(totalAmount) * 100,
        currency: "INR",
        name: "Ascend",
        description: "Thank you for shopping with us",
        handler: function () {
          toast.success(`Payment of Rs. ${totalAmount} is Succesful`);
          navigate("/success");
          state.cart.map((item) => deleteFromCart(item._id));
          setTimeout(() => {
            navigate("/");
            console.log("Success");
          }, 5000);
        },
        theme: {
          color: "#2f2e41",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      toast.warn("Select Address", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
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
        disableBtn,
        setDisableBtn,
        displayRazorpay,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtils = () => useContext(UtilsContext);
