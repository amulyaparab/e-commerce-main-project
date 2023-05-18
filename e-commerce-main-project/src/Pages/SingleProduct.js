import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const SingleProduct = () => {
  const { prodId } = useParams();
  const { state } = useContext(ProductsContext);
  const singleProduct = state?.prodData?.find((prod) => prod._id === prodId);
  // const { _id, name, description, price, rating, category, brand, image } =
  //   singleProduct;
  console.log(prodId);
  return (
    <>
      <h1 className="header-heading">About</h1>
      <div className="single-product">
        <img
          className="image"
          src={singleProduct?.image}
          alt={singleProduct?.name}
        />
        <div className="single-product-info">
          <h1>{singleProduct?.name}</h1>
          <i class="fa-solid fa-heart single-prod-heart"></i>
          <small className="brand">{singleProduct?.brand}</small>
          <p className="desc">{singleProduct?.description}</p>
          <p>Price: {singleProduct?.price}</p>
          <p>Rating: {singleProduct?.rating}</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>
    </>
  );
};
