import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";

export const Filters = () => {
  const { state, dispatch, setShowFilters, showFilters } =
    useContext(ProductsContext);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     if (window.innerWidth > 800) {
  //       setShowFilters(!showFilters);
  //     }
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);
  return (
    <>
      <section>
        <div className={`${showFilters ? "filters" : "block-filters"}`}>
          <h1 className="filter-heading">Filters</h1>
          <button className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </button>

          <h3>Sort By Price</h3>
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
                    categoryType: "Product-Categories",
                  });
                }}
              />
              {category.category}
            </label>
          ))}
          <h3>Price</h3>
          <div className="range-container">
            <input
              type="range"
              className="range-input"
              min={100}
              max={3000}
              step={100}
              onChange={(event) =>
                dispatch({
                  type: "PRICE_RANGE",
                  payload: event.target.value,
                })
              }
            />
            <div className="range-value-1">100</div>
            <div className="range-value-2">1500</div>
            <div className="range-value-3">3000</div>
          </div>
          <h3>Ratings</h3>
          <div className="range-container">
            <input
              type="range"
              className="range-input"
              min={4}
              max={5}
              step={0.1}
              defaultValue={4}
              onChange={(event) =>
                dispatch({
                  type: "RATING_RANGE",
                  payload: event.target.value,
                })
              }
            />
            <div className="range-value-1">4.0</div>
            <div className="range-value-2">4.5</div>
            <div className="range-value-3">5.0</div>
          </div>
        </div>
      </section>
      {/* 
      <button
        className="add-to-cart"
        onClick={() => setShowFilters(!showFilters)}
      >
        Filter
      </button> */}
    </>
  );
};
