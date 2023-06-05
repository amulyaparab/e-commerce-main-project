import { useProducts } from "../../Contexts/ProductsProvider";
import { toast } from "react-toastify";

export const Coupon = () => {
  const { dispatch, showCouponModal, setShowCouponModal } = useProducts();

  return (
    <>
      {showCouponModal && (
        <div className="modal-container">
          <div className="modal-overlay options-overlay">
            <div className="options-modal-content coupon-content">
              <i
                onClick={() => {
                  setShowCouponModal(false);
                }}
                className="fa-solid fa-xmark wishlist-heart remove"
              ></i>
              <h2>Apply Coupon</h2>

              <button
                className="coupon-btn"
                onClick={() => {
                  dispatch({ type: "10%_OFF" });
                  setShowCouponModal(false);
                  toast.success("Coupon Applied!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }}
              >
                New User 10% Off
              </button>
              <button
                className="coupon-btn"
                onClick={() => {
                  dispatch({ type: "50%_OFF" });
                  setShowCouponModal(false);
                  toast.success("Coupon Applied!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }}
              >
                Summer Sale 50% Off
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
