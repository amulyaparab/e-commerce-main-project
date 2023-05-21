import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const Checkout = () => {
  const { state, totalAmount } = useContext(ProductsContext);
  return (
    <>
      <h1>Address</h1>
      <div>
        <label>
          <input type="radio" />
          Amulya Parab{" "}
        </label>
        <p>221B Baker Street, London, NW1 6XE, United Kingdom. </p>
        <p>Mobile Number: 123456789</p>
      </div>
      <section className="checkout-card">
        <div>
          <h1 className="price-details">Order Details</h1>
          <div className="total-card-flex">
            <p>Item</p>
            <p>Qty</p>
          </div>
          {state?.cart?.map((item) => (
            <div className="total-card-flex">
              <p>{item.name}</p>
              <p>1</p>
            </div>
          ))}
        </div>
        <div>
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
        </div>
        <div>
          <h1 className="price-details">Deliver To</h1>
          <label>
            <input type="radio" />
            Amulya Parab{" "}
          </label>
          <p>221B Baker Street, London, NW1 6XE, United Kingdom. </p>
          <p>Mobile Number: 123456789</p>
        </div>
        <button className="add-to-cart">Place Order</button>
      </section>
    </>
  );
};
