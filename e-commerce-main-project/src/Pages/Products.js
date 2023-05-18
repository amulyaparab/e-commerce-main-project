import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const { state, dispatch } = useContext(ProductsContext);
  // console.log(state);

  return (
    <>
      <h1 className="header-heading">Products</h1>
      <div className="grid-products">
        <section>
          <div className="filters">
            <h1 className="filter-heading">Filters</h1>
            <button className="clear">Clear</button>

            <h3>Price</h3>
            {["High To Low", "Low To High"].map((sort) => (
              <label>
                <input type="radio" name="sort" />
                {sort}
              </label>
            ))}

            <h3>Category</h3>
            {["Bath & Body", "Skin Care", "Hair Care", "Home Decor"].map(
              (category) => (
                <label>
                  <input type="checkbox" />
                  {category}
                </label>
              )
            )}

            <h3>Ratings</h3>
            <input type="range" className="range-filter" />
          </div>
        </section>
        <section className="products">
          {state?.filteredData?.map((item) => {
            const prod = state?.cart?.find((prod) => {
              return prod._id === item._id;
            });
            const isItemInCart = state?.cart?.includes(prod);

            return (
              <div className="productCard">
                <ProductCard item={item} />

                {isItemInCart ? (
                  <NavLink to="/cart">
                    <button
                      className="add-to-cart"
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payload: item })
                      }
                    >
                      Go To Cart
                    </button>
                  </NavLink>
                ) : (
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};
