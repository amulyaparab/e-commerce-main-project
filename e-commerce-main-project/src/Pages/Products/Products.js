import { useEffect } from "react";
import { NotificationModal } from "../../Components/NotificationModal";
import { Filters } from "../../Components/Products/Filters";
import { ProductListing } from "../../Components/Products/ProductListing";
import { useProducts } from "../../Contexts/ProductsProvider";
import { useAPI } from "../../Contexts/APIProvider";
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
      <NotificationModal
        text={"Added To Cart"}
        icon={
          <i class="fa-solid fa-circle-check" style={{ color: "#90c190" }}></i>
        }
      />
      <div className={`${showFilters ? "grid-products" : "lined-products"}`}>
        <Filters />
        <ProductListing />
      </div>
    </>
  );
};
