import { useContext, useEffect } from "react";
import { ProductCard } from "../../Products/Components/ProductCard";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { APIContext } from "../../../Contexts/APIProvider";
export const WishlistListing = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const { fetchWishlist } = useContext(APIContext);

  const getWishlist = async () => {
    try {
      const wishlist = await fetchWishlist();
      console.log(wishlist);
      const newWishlist = wishlist.shift();
      dispatch({
        type: "FETCH_WISHLIST",
        payload: wishlist,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <>
      {state?.wishlist?.map((item) => {
        return (
          <div className="productCard" key={item._id}>
            <div>
              <ProductCard item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
};
