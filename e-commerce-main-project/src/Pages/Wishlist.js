import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";
import wishlistImage from "../Images/wishlist.svg";
export const Wishlist = () => {
  const { state, dispatch } = useContext(ProductsContext);
  console.log(state.wishlist);
  return (
    <>
      <h1 className="header-heading">
        Wishlist{" "}
        {state?.wishlist?.length === 0 ? null : `(${state?.wishlist?.length})`}
      </h1>
      <section className="products">
        {state?.wishlist?.length === 0 ? (
          <div className="empty">
            <img
              className="empty-img"
              src={wishlistImage}
              alt="Empty Wishlist"
            />
            <h2>Make a wish.</h2>
            <p> Gain the power to make it come true.</p>
          </div>
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
