import { useProducts } from "../../Contexts/ProductsProvider";

import { EmptyWishlist } from "../../Components/Wishlist/EmptyWishlist";
import { WishlistListing } from "../../Components/Wishlist/WishlistListing";
import { useEffect } from "react";
import { useUtils } from "../../Contexts/UtilsProvider";
export const Wishlist = () => {
  const { state } = useProducts();
  const { updateWishlist } = useUtils();
  useEffect(() => {
    updateWishlist();
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
