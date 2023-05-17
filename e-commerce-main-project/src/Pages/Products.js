import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const Products = () => {
  const { state } = useContext(ProductsContext);
  return (
    <>
      <h1>Products</h1>
      <div className="grid-products">
        <section className="filters">Filters</section>
        <section className="products">
          {state?.data?.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              brand,
              image,
            }) => (
              <div className="productCard" key={_id}>
                <i class="fa-solid fa-heart wishlist-heart"></i>
                <img src={image} width="250px" height="350px" alt={name} />
                <div className="description">
                  <h4>{brand}</h4>
                  <p>{name}</p>
                  <h4>Price: ₹{price}</h4>
                  <button className="add-to-cart">Add To Cart</button>
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </>
  );
};
