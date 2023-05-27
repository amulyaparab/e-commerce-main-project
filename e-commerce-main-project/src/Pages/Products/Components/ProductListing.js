import { useContext, useEffect } from "react";
import { APIContext } from "../../../Contexts/APIProvider";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { ProductCard } from "./ProductCard";
import { NavLink } from "react-router-dom";

export const ProductListing = () => {
  const { state, dispatch, filteredData, setNotificationActive } =
    useContext(ProductsContext);

  const {
    postToCart,
    updateCartQuantity,
    postToWishlist,
    fetchCart,
    fetchWishlist,
    deleteFromWishlist,
  } = useContext(APIContext);
  // console.log(state?.wishlist, "wishlist");

  useEffect(() => {}, []);

  return (
    <section className="products">
      {filteredData?.length === 0 ? (
        <h3>Products not Found.</h3>
      ) : (
        filteredData?.map((item) => {
          const prod = state?.cart?.find((prod) => {
            return prod._id === item._id;
          });
          const wishlistProd = state?.wishlist?.find((prod) => {
            return prod._id === item._id;
          });
          const isItemInCart = state?.cart?.includes(prod);
          const isItemInWishlist = state?.wishlist?.includes(wishlistProd);

          const handleAddToCart = async () => {
            try {
              setNotificationActive(true);
              state?.cart?.includes(item)
                ? await updateCartQuantity(item._id)
                : await postToCart(item);

              const unfilteredCart = await fetchCart();
              const cart = unfilteredCart.cart.filter(
                (item) => item._id !== undefined || item._id !== null
              );

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
          const addToWishlistHandler = async () => {
            try {
              setNotificationActive(true);
              isItemInWishlist
                ? await deleteFromWishlist(item._id)
                : await postToWishlist(item);
              {
                /* state.wishlist.filter((prod) => prod._id !== item._id) */
              }
              const wishlist = await fetchWishlist();
              {
                /* console.log(wishlist, "wishlist"); */
              }
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
          {
            /* console.log(isItemInWishlist); */
          }

          return (
            <div className="productCard" key={item._id}>
              <i
                className="fa-solid fa-heart wishlist-heart "
                style={{
                  color: isItemInWishlist ? "#BA3C3C" : "#2f2e41",
                }}
                onClick={addToWishlistHandler}
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
