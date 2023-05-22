import { useContext } from "react";
import { APIContext } from "../../../Contexts/APIProvider";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { ProductCard } from "./ProductCard";
import { NavLink } from "react-router-dom";

export const ProductListing = () => {
  const { state, dispatch, filteredData, setNotificationActive } =
    useContext(ProductsContext);

  const { postToCart, updateCartQuantity, postToWishlist } =
    useContext(APIContext);

  return (
    <section className="products">
      {filteredData?.map((item) => {
        const prod = state?.cart?.find((prod) => {
          return prod._id === item._id;
        });
        const isItemInCart = state?.cart?.includes(prod);
        const isItemInWishlist = state?.wishlist?.includes(
          state?.wishlist?.find((prod) => prod._id === item._id)
        );

        const handleAddToCart = async () => {
          try {
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
      })}
    </section>
  );
};
