import { useProducts } from "../../Contexts/ProductsProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const TotalCard = () => {
  const {
    state,
    totalAmount,
    showCouponModal,
    setShowCouponModal,
    originalAmount,
    dispatch,
  } = useProducts();
  const navigate = useNavigate();

  return (
    <section>
      <div className="totalCard">
        <div className="total-card-flex">
          <i className="fa-solid fa-tag tag"></i>
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
          <p>₹{originalAmount}</p>
        </div>
        <div className="total-card-flex">
          <p>Delivery Charges</p>
          <p> {totalAmount >= 500 ? "FREE" : "₹50"}</p>
        </div>
        <div className="total-card-flex">
          <p>Coupon Discount</p>
          <p>-₹{(originalAmount - totalAmount).toFixed(2)}</p>
        </div>
        {state?.couponApplied && (
          <div className="total-card-flex">
            <p>Coupon Applied</p>
            <div className="total-card-flex">
              <p style={{ marginRight: "5px" }}>
                {state?.totalDiscount + "% OFF"}
              </p>
              <i
                style={{ cursor: "pointer", color: "#BA3C3C" }}
                className="fa-solid fa-xmark"
                onClick={() => {
                  dispatch({ type: "NO_COUPON" });
                  toast.error("Coupon Removed", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }}
              ></i>
            </div>
          </div>
        )}
        <div className="total-card-flex total-amount">
          <p>Total Amount</p>
          <p>₹{totalAmount >= 500 ? totalAmount : totalAmount + 50}</p>
        </div>
        <p className="saved">
          You saved ₹{(originalAmount - totalAmount).toFixed(2)} on this order
        </p>
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
