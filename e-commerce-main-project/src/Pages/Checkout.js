import { useContext } from "react";

export const Checkout = () => {
  // const {state} = useContext()
  return (
    <>
      <h1>Address</h1>
      <div>
        <label>
          <input type="radio" />
          Amulya Parab{" "}
        </label>
        <p>#303, 221B Baker Street, London, UK. </p>
        <p>Mobile Number: 123456789</p>
      </div>
      <div>
        <h1>Order Details</h1>
        <div>
          <div>
            <p>Item</p>
            <p>Qty</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
