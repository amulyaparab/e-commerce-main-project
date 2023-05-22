import bathAndBody from "../../../Images/bath-category1.jpg";
import oliveCandle from "../../../Images/oliveCandle.jpg";
import skinCare from "../../../Images/3.jpg";
import a4 from "../../../Images/4.jpg";
import hair from "../../../Images/hairCategory.jpg";
import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { NavLink } from "react-router-dom";
export const Categories = () => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <section className="categories">
      <h1 className="heading">Categories</h1>
      <div className="category-photos">
        <NavLink to="/products" className="photos">
          <div
            onClick={() => {
              dispatch({ type: "CATEGORY", payload: "Bath & Body" });
            }}
          >
            <img alt="Bath and Body" src={bathAndBody} />
            <p className="name">Bath & Body</p>
          </div>
        </NavLink>
        <NavLink to="/products" className="photos">
          <div
            onClick={() => dispatch({ type: "CATEGORY", payload: "Skin Care" })}
          >
            <img alt="Skin Care" src={skinCare} />
            <p className="name">Skin Care</p>
          </div>
        </NavLink>
        <NavLink to="/products" className="photos">
          <div
            onClick={() => dispatch({ type: "CATEGORY", payload: "Hair Care" })}
          >
            <img alt="Hair Care" src={hair} />
            <p className="name">Hair Care</p>
          </div>
        </NavLink>
        {/* <img alt="Hair Care" src={a4} /> */}
        <NavLink to="/products" className="photos">
          <div
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "Home Decor" })
            }
          >
            <img alt="Home Decor" src={oliveCandle} />
            <p className="name">Home</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
};
