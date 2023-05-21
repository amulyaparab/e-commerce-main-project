import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const { state, dispatch, filteredData } = useContext(ProductsContext);
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
                <input
                  type="radio"
                  name="sort"
                  value={sort}
                  onChange={(event) =>
                    dispatch({
                      type: "SORT_BY_PRICE",
                      payload: event.target.value,
                    })
                  }
                />
                {sort}
              </label>
            ))}

            <h3>Category</h3>
            {state?.categories?.map((category) => (
              <label>
                <input
                  type="checkbox"
                  value={category.category}
                  checked={state?.category?.includes(category.category)}
                  onChange={(event) => {
                    dispatch({
                      type: "PRODUCT_CATEGORY",
                      payload: event.target.value,
                    });
                  }}
                />
                {category.category}
              </label>
            ))}

            <h3>Ratings</h3>
            <input
              type="range"
              className="range-filter"
              min={0}
              max={5}
              onChange={(event) =>
                dispatch({ type: "RATING_RANGE", payload: event.target.value })
              }
            />
          </div>
        </section>
        <section className="products">
          {filteredData?.map((item) => {
            const prod = state?.cart?.find((prod) => {
              return prod._id === item._id;
            });
            const isItemInCart = state?.cart?.includes(prod);
            const isItemInWishlist = state?.wishlist?.includes(
              state?.wishlist?.find((prod) => prod._id === item._id)
            );
            return (
              <div className="productCard">
                <i
                  class="fa-solid fa-heart wishlist-heart "
                  style={{
                    color: isItemInWishlist ? "#BA3C3C" : "#2f2e41",
                  }}
                  onClick={() =>
                    dispatch({ type: "ADD_TO_WISHLIST", payload: item })
                  }
                ></i>
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
