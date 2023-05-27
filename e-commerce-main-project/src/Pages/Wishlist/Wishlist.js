import { useContext, useEffect } from "react";
import { ProductsContext } from "../../Contexts/ProductsProvider";

import { EmptyWishlist } from "./Components/EmptyWishlist";
import { WishlistListing } from "./Components/WishlistListing";
import { APIContext } from "../../Contexts/APIProvider";

export const Wishlist = () => {
  const { state, dispatch } = useContext(ProductsContext);
  console.log(state.wishlist);
  const { fetchWishlist } = useContext(APIContext);
  const getWishlist = async () => {
    try {
      const wishlist = await fetchWishlist();
      console.log(wishlist, "helo");
      // const newWishlist = wishlist.shift();
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
      <h1 className="header-heading">
        Wishlist{" "}
        {(state?.wishlist?.length ?? null) === 0
          ? null
          : `(${state?.wishlist?.length})`}
      </h1>
      <section className="products">
        {state?.wishlist?.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <WishlistListing />
        )}
      </section>
    </>
  );
};
