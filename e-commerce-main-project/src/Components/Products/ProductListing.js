import { ProductCard } from "./ProductCard";
import { NavLink } from "react-router-dom";
import { useAPI, useProducts, useUtils } from "../../Contexts";
import { notFound } from "../../Assests";

export const ProductListing = () => {
  const { filteredData } = useProducts();
  const { isLoading } = useAPI();
  const {
    handleAddToCart,
    addToWishlistHandler,
    isItemInCart,
    isItemInWishlist,
    isEncodedTokenPresent,
    disableBtn,
  } = useUtils();

  return (
    <section className="products">
      {filteredData?.length === 0 && !isLoading ? (
        <div className="products-not-found">
          <img src={notFound} alt="Products Not Found" />
          <h1>Products not Found.</h1>
        </div>
      ) : (
        filteredData?.map((item) => {
          return (
            <div className="productCard" key={item._id}>
              <i
                className={`fa-solid fa-heart wishlist-heart
                ${
                  isItemInWishlist(item) && isEncodedTokenPresent
                    ? "colorRed"
                    : "colorPrimary"
                }  ${disableBtn ? "disabled" : ""}`}
                onClick={() => addToWishlistHandler(item)}
              ></i>
              <ProductCard item={item} />

              {isItemInCart(item) && isEncodedTokenPresent ? (
                <NavLink to="/cart">
                  <button className="add-to-cart go-to-cart-prods">
                    Go To Cart
                  </button>
                </NavLink>
              ) : (
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(item)}
                  disabled={disableBtn}
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
