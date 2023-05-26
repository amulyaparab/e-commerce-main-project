import { useContext } from "react";
import { NotificationModal } from "../../Components/NotificationModal";
import { Filters } from "./Components/Filters";
import { ProductListing } from "./Components/ProductListing";
import { ProductsContext } from "../../Contexts/ProductsProvider";

export const Products = () => {
  const { showFilters } = useContext(ProductsContext);

  return (
    <>
      <h1 className="header-heading">Products</h1>
      <NotificationModal
        text={"Added To Cart"}
        icon={
          <i class="fa-solid fa-circle-check" style={{ color: "#90c190" }}></i>
        }
      />
      <div className={`${showFilters ? "grid-products" : ""}`}>
        <Filters />
        <ProductListing />
      </div>
    </>
  );
};
