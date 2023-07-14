import { wishlistImage } from "../../Assests";

export const EmptyWishlist = () => {
  return (
    <div className="empty empty-wishlist">
      <img className="empty-img" src={wishlistImage} alt="Empty Wishlist" />
      <h2>Make a wish.</h2>
      <p> Gain the power to make it come true.</p>
    </div>
  );
};
