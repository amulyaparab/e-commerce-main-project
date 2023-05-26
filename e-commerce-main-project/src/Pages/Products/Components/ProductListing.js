import { useContext, useEffect } from "react";
import { APIContext } from "../../../Contexts/APIProvider";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { ProductCard } from "./ProductCard";
import { NavLink } from "react-router-dom";

export const ProductListing = () => {
  const { state, dispatch, filteredData, setNotificationActive } =
    useContext(ProductsContext);

  const { postToCart, updateCartQuantity, postToWishlist, fetchCart } =
    useContext(APIContext);

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
  useEffect(() => {
    fetchUpdatedCart();
  }, []);
  return (
    <section className="products">
      {filteredData?.length === 0 ? (
        <h3>Products not Found.</h3>
      ) : (
        filteredData?.map((item) => {
          const prod = state?.cart?.find((prod) => {
            return prod._id === item._id;
          });
          const isItemInCart = state?.cart?.includes(prod);
          const isItemInWishlist = state?.wishlist?.includes(
            state?.wishlist?.find((prod) => prod._id === item._id)
          );

          const handleAddToCart = async () => {
            try {
              console.log(state.cart);
              setNotificationActive(true);
              state?.cart?.includes(item)
                ? await updateCartQuantity(item._id)
                : await postToCart(item);
            } catch (error) {
              console.log(error);
            } finally {
              setNotificationActive(false);
            }
          };
          const addToWishlistHandler = async (item) => {
            try {
              setNotificationActive(true);
              await postToWishlist(item);
            } catch (err) {
              console.log(err);
            } finally {
              setNotificationActive(false);
            }
          };
          {
            /* useEffect(() => {

            fetchCart()
          }, []); */
          }
          return (
            <div className="productCard" key={item._id}>
              <i
                className="fa-solid fa-heart wishlist-heart "
                style={{
                  color: isItemInWishlist ? "#BA3C3C" : "#2f2e41",
                }}
                onClick={() => addToWishlistHandler()}
              ></i>
              <ProductCard item={item} />

              {isItemInCart ? (
                <NavLink to="/cart">
                  <button
                    className="add-to-cart"
                    // onClick={() => addToCart(item)}
                  >
                    Go To Cart
                  </button>
                </NavLink>
              ) : (
                <button className="add-to-cart" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              )}
            </div>
          );
        })
      )}
    </section>
  );
};
