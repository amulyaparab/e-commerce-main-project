import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Contexts/ProductsProvider";
import { ProductCard } from "../Products/Components/ProductCard";
import cartImage from "../../Images/cart.svg";
import { APIContext } from "../../Contexts/APIProvider";
import { TotalCard } from "./Components/TotalCard";
import { NotificationModal } from "../../Components/NotificationModal";

export const Cart = () => {
  const { state, dispatch, setNotificationActive } =
    useContext(ProductsContext);

  const { fetchCart, deleteFromCart } = useContext(APIContext);

  const fetchUpdatedCart = async () => {
    const unfilteredCart = await fetchCart();
    const cart = unfilteredCart.cart.filter((item) => item._id);
    dispatch({
      type: "FETCH_CART",
      payload: cart,
    });
  };

  const removefromCartHandler = async (id) => {
    try {
      setNotificationActive(true);
      await deleteFromCart(id);
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
  useEffect(() => {
    fetchUpdatedCart();
    console.log(
      deleteFromCart("best-seller-1").then((data) => console.log(data)),
      "nskf"
    );
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
                  onClick={() => removefromCartHandler(item._id)}
                ></i>
                <ProductCard item={item} />{" "}
              </div>
            ))}{" "}
          </section>
          <TotalCard />
        </div>
      )}
    </>
  );
};
