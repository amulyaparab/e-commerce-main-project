import bathAndBody from "../../Images/bath-category1.jpg";
import oliveCandle from "../../Images/oliveCandle.jpg";
import skinCare from "../../Images/3.jpg";
import hair from "../../Images/hairCategory.jpg";

import { useProducts } from "../../Contexts/ProductsProvider";
import { NavLink } from "react-router-dom";

export const Categories = () => {
  const { state, dispatch } = useProducts();

  const images = [bathAndBody, skinCare, hair, oliveCandle];

  return (
    <section className="categories">
      {console.log(state?.categories)}
      <div className="heading">
        <h1>Categories</h1>
      </div>

      <div className="category-photos">
        {state?.categories?.map((category, index) => {
          return (
            <NavLink to="/products" className="photos" key={category._id}>
              <div
                value={category.category}
                onClick={(event) => {
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
