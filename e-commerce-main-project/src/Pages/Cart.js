import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";
import { ProductCard } from "../Components/ProductCard";
import cartImage from "../Images/cart.svg";

export const Cart = () => {
  const { state, dispatch, totalAmount } = useContext(ProductsContext);
  return (
    <>
      <h1 className="header-heading">
        Cart {state?.cart?.length === 0 ? null : `(${state?.cart?.length})`}
      </h1>
      <div className="gridCart">
        <section className="products cart ">
          {state?.cart?.length === 0 ? (
            <div className="empty">
              <img src={cartImage} className="empty-img" alt="Empty cart." />
              <h2>Your cart looks rather lonely.</h2>
              <p>Add some items to show some love.</p>
            </div>
          ) : (
            state?.cart?.map((item) => (
              <div className="productCard cartCard">
                <i
                  class="fa-solid fa-xmark wishlist-heart remove"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item._id })
                  }
                ></i>
                <ProductCard item={item} />{" "}
              </div>
            ))
          )}
        </section>
        <section>
          <div className="totalCard">
            <div className="total-card-flex">
              <i class="fa-solid fa-tag tag"></i>
              <p>Have a Coupon?</p>

              <button
                className="apply"
                onClick={() => dispatch({ type: "APPLY_COUPON" })}
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
            <button className="add-to-cart checkout">Checkout</button>
          </div>
        </section>
      </div>
    </>
  );
};
