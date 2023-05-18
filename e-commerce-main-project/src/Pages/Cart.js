import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";

export const Cart = () => {
  const { state } = useContext(ProductsContext);
  return (
    <>
      <h1 className="header-heading">Cart</h1>
      <section className="products">
        {state?.cart?.length === 0 ? (
          <p>No products</p>
        ) : (
          state?.cart?.map((item) => (
            <div className="productCard">
              <ProductCard item={item} />{" "}
            </div>
          ))
        )}
      </section>
    </>
  );
};
