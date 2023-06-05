import { useProducts } from "../../Contexts/ProductsProvider";
import { ProductCard } from "../ProductCard";
import { NavLink } from "react-router-dom";
import notFound from "../../Images/notFound.svg";
import { useUtils } from "../../Contexts/UtilsProvider";
import { useAPI } from "../../Contexts/APIProvider";

export const ProductListing = () => {
  const { filteredData } = useProducts();

  const {
    handleAddToCart,
    addToWishlistHandler,
    isItemInCart,
    isItemInWishlist,
    isEncodedTokenPresent,
  } = useUtils();
  const { isLoading } = useAPI();
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
                  <button className="add-to-cart go-to-cart-prods">
                    Go To Cart
                  </button>
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
