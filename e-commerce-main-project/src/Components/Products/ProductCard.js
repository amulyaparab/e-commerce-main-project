import { useNavigate } from "react-router-dom";
import { useAPI } from "../../Contexts/APIProvider";

export const ProductCard = ({ item }) => {
  const { fetchSingleProduct } = useAPI();
  const navigate = useNavigate();

  const singleProductHandler = async (itemId) => {
    const item = await fetchSingleProduct(itemId);
    navigate(`/api/products/${item._id}`);
  };

  return (
    <div className="cartSlide">
      <div className="product-image">
        <img
          src={item?.image}
          alt={item?.name}
          onClick={() => singleProductHandler(item?._id)}
        />
        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <p>{item?.rating}</p>
        </div>
      </div>
      <div className="description">
        <h4 className="product-brand">{item?.brand}</h4>
        <p className="product-name">{item?.name}</p>
        <h4 className="price">Price: ₹{item?.price}</h4>
      </div>
    </div>
  );
};
