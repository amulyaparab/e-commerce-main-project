import bestHome from "../Images/best-home.jpg";
import bestBath from "../Images/best-bath.jpg";
import bestHair from "../Images/best-hair.jpg";
import bestSkin from "../Images/best-skin.jpg";
export const BestSellers = () => {
  return (
    <section className="categories">
      <h1 className="heading">Best Sellers</h1>
      <div className="category-photos">
        <div className="photos">
          <img src={bestBath} alt="bestseller bath bomb " />
          <p className="name">Soothing Lemon Bath Bomb</p>
        </div>
        <div className="photos">
          <img src={bestSkin} alt="bestseller skin care" />
          <p className="name">Brightening Serum</p>
        </div>{" "}
        <div className="photos">
          <img src={bestHair} alt="bestseller shampoo + conditioner" />
          <p className="name">Love Shampoo Combo</p>
        </div>{" "}
        <div className="photos">
          <img src={bestHome} alt="bestseller home decor" />
          <p className="name">Glass Terrarium</p>
        </div>
      </div>
    </section>
  );
};
