import { useProducts } from "../../Contexts/ProductsProvider";
import { NavLink } from "react-router-dom";
import { bathAndBody, hair, oliveCandle, skinCare } from "../../Assests";

export const Categories = () => {
  const { state, dispatch } = useProducts();
  const images = [bathAndBody, skinCare, hair, oliveCandle];

  return (
    <section className="categories">
      <div className="heading">
        <h1>Categories</h1>
      </div>
      <div className="category-photos">
        {state?.categories?.map((category, index) => {
          return (
            <NavLink to="/products" className="photos" key={category._id}>
              <div
                value={category.category}
                onClick={() => {
                  dispatch({
                    type: "PRODUCT_CATEGORY",
                    payload: category.category,
                    categoryType: "Main-Categories",
                  });
                }}
              >
                <img src={images[index]} alt={category.category} />
                <p className="name">{category.category}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
