import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";

export const Filters = () => {
  const { state, dispatch } = useContext(ProductsContext);
  return (
    <section>
      <div className="filters">
        <h1 className="filter-heading">Filters</h1>
        <button className="clear">Clear</button>

        <h3>Price</h3>
        {["High To Low", "Low To High"].map((sort) => (
          <label key={sort}>
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
          <label key={category._id}>
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
        <div className="range-container">
          <input
            type="range"
            className="range-input"
            min={4}
            max={5}
            step={0.1}
            onChange={(event) =>
              dispatch({
                type: "RATING_RANGE",
                payload: event.target.value,
              })
            }
          />
          <div className="range-value">{state?.rating}</div>
        </div>
      </div>
    </section>
  );
};
