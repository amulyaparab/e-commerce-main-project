import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";
import cartImage from "../Images/cart.svg";

export const Cart = () => {
  const { state } = useContext(ProductsContext);
  return (
    <>
      <h1 className="header-heading">Cart</h1>
      <section className="products">
        {state?.cart?.length === 0 ? (
          <div className="empty">
            <img src={cartImage} className="empty-img" alt="Empty cart." />
            <h2>Your cart looks rather lonely.</h2>
            <p>Add some items to show some love.</p>
          </div>
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
