import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { useNavigate } from "react-router-dom";

export const TotalCard = () => {
  const { state, dispatch, totalAmount, showCouponModal, setShowCouponModal } =
    useContext(ProductsContext);
  const navigate = useNavigate();
  return (
    <section>
      <div className="totalCard">
        <div className="total-card-flex">
          <i class="fa-solid fa-tag tag"></i>
          <p>Have a Coupon?</p>

          <button
            className="apply"
            onClick={() => setShowCouponModal(!showCouponModal)}
          >
            {state?.couponApplied ? "Applied!" : "Apply"}
          </button>
        </div>
        <h1 className="price-details">Price Details</h1>
        <div className="total-card-flex">
          <p>Price ({state?.cart?.length} items)</p>
          <p>₹{totalAmount}</p>
        </div>
        <div className="total-card-flex">
          <p>Discount</p>
          <p>{state?.couponApplied ? "-₹100" : "☹"}</p>
        </div>
        <div className="total-card-flex">
          <p>Delivery Charges</p>
          <p> {totalAmount >= 500 ? "FREE" : "₹50"}</p>
        </div>
        <div className="total-card-flex">
          <p>Coupon Discount</p>
          <p>₹4</p>
        </div>
        <div className="total-card-flex total-amount">
          <p>Total Amount</p>
          <p>₹{totalAmount}</p>
        </div>
        <p className="saved">You saved ₹ 0.00 on this order</p>
        <button
          className="add-to-cart checkout"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </div>
    </section>
  );
};
