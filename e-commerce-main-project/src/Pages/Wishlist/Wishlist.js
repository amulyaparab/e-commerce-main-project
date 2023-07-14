import { useEffect } from "react";
import { useProducts, useUtils } from "../../Contexts";
import { EmptyWishlist, WishlistListing } from "../../Components";

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
        {state?.wishlist?.length ? `(${state?.wishlist?.length})` : null}
      </h1>
      <section className="products">
        {state?.wishlist?.length ? <WishlistListing /> : <EmptyWishlist />}
      </section>
    </>
  );
};
