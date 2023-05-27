import { useContext } from "react";
import { ProductCard } from "../../Products/Components/ProductCard";
import { ProductsContext } from "../../../Contexts/ProductsProvider";

export const WishlistListing = () => {
  const { state } = useContext(ProductsContext);

  return (
    <>
      {state?.wishlist?.map((item) => {
        return (
          <div className="productCard" key={item._id}>
            <div>
              <ProductCard item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
};
