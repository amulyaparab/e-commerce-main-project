import { useProducts } from "../../Contexts/ProductsProvider";
import { ProductCard } from "../ProductCard";
import { NavLink } from "react-router-dom";

import { useUtils } from "../../Contexts/UtilsProvider";

export const ProductListing = () => {
  const { filteredData } = useProducts();

  const {
    handleAddToCart,
    addToWishlistHandler,
    isItemInCart,
    isItemInWishlist,
    isEncodedTokenPresent,
  } = useUtils();

  return (
    <section className="products">
      {filteredData?.length === 0 ? (
        <h3>Products not Found.</h3>
      ) : (
        filteredData?.map((item) => {
          return (
            <div className="productCard" key={item._id}>
              <i
                className="fa-solid fa-heart wishlist-heart "
                style={{
                  color:
                    isItemInWishlist(item) && isEncodedTokenPresent
                      ? "#BA3C3C"
                      : "#2f2e41",
                }}
                onClick={() => addToWishlistHandler(item)}
              ></i>
              <ProductCard item={item} />

              {isItemInCart(item) && isEncodedTokenPresent ? (
                <NavLink to="/cart">
                  <button className="add-to-cart">Go To Cart</button>
                </NavLink>
              ) : (
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item)}
                >
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
