import { NotificationModal } from "../../Components/NotificationModal";
import { Filters } from "./Components/Filters";
import { ProductListing } from "./Components/ProductListing";

export const Products = () => {
  return (
    <>
      <h1 className="header-heading">Products</h1>
      <NotificationModal
        text={"Added To Cart"}
        icon={
          <i class="fa-solid fa-circle-check" style={{ color: "#90c190" }}></i>
        }
      />
      <div className="grid-products">
        <Filters />
        <ProductListing />
      </div>
    </>
  );
};
