import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";

export const Wishlist = () => {
  const { state } = useContext(ProductsContext);
  console.log(state.wishlist);
  return (
    <>
      <h1 className="header-heading">Wishlist</h1>
      <section className="products">
        {state?.wishlist?.length === 0 ? (
          <h1>No products in wishlist</h1>
        ) : (
          state?.wishlist?.map((item) => {
            return (
              <div className="productCard">
                <div>
                  <ProductCard item={item} />
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
};
