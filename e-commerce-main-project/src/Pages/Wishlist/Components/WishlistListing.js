import { useContext } from "react";
import { ProductCard } from "../../Products/Components/ProductCard";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { UtilsContext } from "../../../Contexts/UtilsProvider";

export const WishlistListing = () => {
  const { state } = useContext(ProductsContext);

  const { removefromWishlistHandler, moveToCartHandler } =
    useContext(UtilsContext);

  return (
    <>
      {state?.wishlist?.map((item) => {
        return (
          <div className="productCard" key={item._id}>
            <i
              class="fa-solid fa-xmark wishlist-heart"
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
