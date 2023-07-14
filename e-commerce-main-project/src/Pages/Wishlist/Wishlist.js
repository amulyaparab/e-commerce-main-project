import { EmptyWishlist } from "../../Components/Wishlist/EmptyWishlist";
import { WishlistListing } from "../../Components/Wishlist/WishlistListing";
import { useEffect } from "react";
import { useProducts, useUtils } from "../../Contexts";

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
