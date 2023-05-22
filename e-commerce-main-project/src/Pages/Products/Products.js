import { Filters } from "./Components/Filters";
import { ProductListing } from "./Components/ProductListing";

export const Products = () => {
  return (
    <>
      <h1 className="header-heading">Products</h1>
      <div className="grid-products">
        <Filters />
        <ProductListing />
      </div>
    </>
  );
};
