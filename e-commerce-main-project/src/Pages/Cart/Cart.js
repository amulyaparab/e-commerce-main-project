import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../Contexts/ProductsProvider";
import { ProductCard } from "../Products/Components/ProductCard";
import cartImage from "../../Images/cart.svg";
import { APIContext } from "../../Contexts/APIProvider";
import { TotalCard } from "./Components/TotalCard";
import { NotificationModal } from "../../Components/NotificationModal";
import { OptionsModal } from "../../Components/OptionsModal";

export const Cart = () => {
  const { state, dispatch, setNotificationActive } =
    useContext(ProductsContext);
  const [modal, setModal] = useState(false);
  const {
    fetchCart,
    deleteFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    postToWishlist,
    fetchWishlist,
  } = useContext(APIContext);
  console.log(state.cart);
  const fetchUpdatedCart = async () => {
    const unfilteredCart = await fetchCart();
    const cart = unfilteredCart.cart.filter(
      (item) => item._id !== undefined || item._id !== null
    );
    console.log(cart);
    dispatch({
      type: "FETCH_CART",
      payload: cart,
    });
  };

  const removefromCartHandler = async (item) => {
    try {
      console.log(item);
      setModal(false);
      setNotificationActive(true);
      await deleteFromCart(item._id);
      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart.filter(
        (item) => item._id !== null || item._id !== undefined
      );
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
  const increaseQtyHandler = async (itemId) => {
    try {
      await increaseCartQuantity(itemId);
      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart.filter(
        (item) => item._id !== null || item._id !== undefined
      );
      dispatch({
        type: "FETCH_CART",
        payload: cart,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const decreaseQtyHandler = async (item) => {
    try {
      item.qty > 1 ? await decreaseCartQuantity(item._id) : setModal(true);
      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart.filter(
        (item) => item._id !== null || item._id !== undefined
      );
      dispatch({
        type: "FETCH_CART",
        payload: cart,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const moveToWishlistHandler = async (item) => {
    try {
      console.log(item);
      setModal(false);
      deleteFromCart(item._id);
      const isItemInWishlist = state.wishlist.includes(
        state.wishlist.find((prod) => prod._id === item._id)
      );
      isItemInWishlist ? await fetchWishlist() : await postToWishlist(item);

      const wishlist = await fetchWishlist();

      dispatch({
        type: "FETCH_WISHLIST",
        payload: wishlist,
      });

      const unfilteredCart = await fetchCart();
      const cart = unfilteredCart.cart.filter(
        (item) => item._id !== null || item._id !== undefined
      );
      dispatch({
        type: "FETCH_CART",
        payload: cart,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUpdatedCart();
  }, []);
  console.log(state.cart);
  return (
    <>
      <h1 className="header-heading">
        Cart {state?.cart?.length === 0 ? null : `(${state?.cart?.length})`}
      </h1>
      <NotificationModal
        text={"Item Removed"}
        icon={
          <i class="fa-solid fa-circle-xmark" style={{ color: "#BA3C3C" }}></i>
        }
      />

      {state?.cart?.length === 0 ? (
        <div className="empty">
          <img src={cartImage} className="empty-img" alt="Empty cart." />
          <h2>Your cart looks rather lonely.</h2>
          <p>Add some items to show some love.</p>
        </div>
      ) : (
        <div className="gridCart">
          <section className="products cart ">
            {state?.cart?.map((item) => (
              <div className="productCard cartCard">
                <i
                  class="fa-solid fa-xmark wishlist-heart remove"
                  onClick={() => setModal(true)}
                ></i>
                <ProductCard item={item} />
                <p className="cart-quantity">
                  Qty: {item?.qty >= 1 && item?.qty}
                </p>
                <div className="cart-qty-buttons">
                  <button onClick={() => increaseQtyHandler(item._id)}>
                    +
                  </button>

                  <button onClick={() => decreaseQtyHandler(item)}>-</button>
                </div>
                {modal && (
                  <div className="modal-container">
                    <div className="modal-overlay options-overlay">
                      <div className="options-modal-content">
                        <i
                          onClick={() => setModal(false)}
                          class="fa-solid fa-xmark wishlist-heart remove"
                        ></i>
                        <h2>Are you sure you want to delete it?</h2>
                        <small>Wishlist it instead and buy it later.</small>
                        <div className="options-buttons">
                          <button
                            className="option-1-btn"
                            onClick={() => removefromCartHandler(item)}
                          >
                            Remove
                          </button>
                          <button onClick={() => moveToWishlistHandler(item)}>
                            Add To Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}{" "}
          </section>
          <TotalCard />
        </div>
      )}
    </>
  );
};
