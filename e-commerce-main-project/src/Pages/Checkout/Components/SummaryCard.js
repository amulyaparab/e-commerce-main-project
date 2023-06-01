import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { AddressContext } from "../../../Contexts/AddressProvider";

export const SummaryCard = () => {
  const { state, totalAmount, originalAmount } = useContext(ProductsContext);
  const { placeOrderHandler } = useContext(AddressContext);
  return (
    <>
      <h1 className="header-heading">Order Summary</h1>
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
          <div className="total-card-flex total-amount">
            <p>Total Amount</p>
            <p>₹{totalAmount >= 500 ? totalAmount : totalAmount + 50}</p>
          </div>
        </div>
        <h1 className="price-details">Deliver To</h1>
        {/* <ExampleAddress />
          <AddressesMapped /> */}
        <button className="add-to-cart place-order" onClick={placeOrderHandler}>
          Place Order
        </button>
      </section>
    </>
  );
};
