import { ProductCard } from "../Products/ProductCard";
import { useProducts } from "../../Contexts/ProductsProvider";
import { useUtils } from "../../Contexts/UtilsProvider";

export const WishlistListing = () => {
  const { state } = useProducts();
  const { removefromWishlistHandler, moveToCartHandler } = useUtils();

  return (
    <>
      {state?.wishlist?.map((item) => {
        return (
          <div className="productCard wishlistCard" key={item._id}>
            <i
              className="fa-solid fa-xmark wishlist-heart"
              onClick={() => removefromWishlistHandler(item._id)}
            ></i>
            <div>
              <ProductCard item={item} />
            </div>
            <button
              className="add-to-cart go-to-cart move"
              onClick={() => moveToCartHandler(item)}
            >
              Move To Cart
            </button>
          </div>
        );
      })}
    </>
  );
};
