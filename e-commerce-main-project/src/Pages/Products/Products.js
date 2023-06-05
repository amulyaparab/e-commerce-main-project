import { useEffect } from "react";
import { Filters } from "../../Components/Products/Filters";
import { ProductListing } from "../../Components/Products/ProductListing";
import { useProducts } from "../../Contexts/ProductsProvider";
import { useUtils } from "../../Contexts/UtilsProvider";

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
