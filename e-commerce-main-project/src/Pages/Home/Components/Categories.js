import bathAndBody from "../../../Images/bath-category1.jpg";
import oliveCandle from "../../../Images/oliveCandle.jpg";
import skinCare from "../../../Images/3.jpg";
import a4 from "../../../Images/4.jpg";
import hair from "../../../Images/hairCategory.jpg";
import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { NavLink } from "react-router-dom";

export const Categories = () => {
  const { state, dispatch } = useContext(ProductsContext);

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
                  console.log(event.target.alt);
                  dispatch({
                    type: "PRODUCT_CATEGORY",
                    payload: event.target.alt,
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
