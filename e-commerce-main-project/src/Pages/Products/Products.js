import { useContext, useEffect } from "react";
import { NotificationModal } from "../../Components/NotificationModal";
import { Filters } from "./Components/Filters";
import { ProductListing } from "./Components/ProductListing";
import { ProductsContext } from "../../Contexts/ProductsProvider";
import { APIContext } from "../../Contexts/APIProvider";

export const Products = () => {
  const { showFilters } = useContext(ProductsContext);
  const { fetchCart } = useContext(APIContext);
  // console.log(state.cart);
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <h1 className="header-heading products-heading">Products</h1>
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
