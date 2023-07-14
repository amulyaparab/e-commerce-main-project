import { useEffect } from "react";
import { useProducts, useUtils } from "../../Contexts";
import { Filters, ProductListing } from "../../Components";

export const Products = () => {
  const { showFilters } = useProducts();
  const { updateWishlist, updateCart } = useUtils();

  useEffect(() => {
    updateCart();
    updateWishlist();
  }, []);

  return (
    <>
      <h1
        className={`${
          showFilters ? "header-heading" : "header-heading products-heading"
        }`}
      >
        Products
      </h1>
      <div className={`${showFilters ? "grid-products" : "lined-products"}`}>
        <Filters />
        <ProductListing />
      </div>
    </>
  );
};
