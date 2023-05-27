import { useContext, useState } from "react";
import { ProductsContext } from "../Contexts/ProductsProvider";

export const Checkout = () => {
  const { state, totalAmount } = useContext(ProductsContext);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    address: "",
    mobileNumber: "",
  });
  const [arrOfAddresses, setArrOfAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const addAddressHandler = () => {
    const conditions =
      address.name.length !== 0 &&
      address.mobileNumber.length !== 0 &&
      address.address.length !== 0;
    conditions &&
      setArrOfAddresses([
        ...arrOfAddresses,
        arrOfAddresses.includes(address) ? null : address,
      ]);
    conditions && setShowAddressForm(false);
    setAddress({ name: "", address: "", mobileNumber: "" });
  };
  const AddressesMapped = () => {
    return arrOfAddresses.map(({ name, address, mobileNumber }) => (
      <div className="addreses-map">
        <label>
          <input
            type="radio"
            name="address"
            // checked={(event) => event.target.value === "on"}
            onChange={(event) => {
              // console.log(event.target.value === "on");
              setSelectedAddress(event.target.checked);
            }}
          />
          {name}
        </label>
        <i class="fa-solid fa-pen address-edit"></i>
        <i class="fa-solid fa-trash address-delete"></i>
        <p>{address}</p>
        <p>Mobile Number: {mobileNumber}</p>
        <hr />
      </div>
    ));
  };
  const ExampleAddress = () => {
    return (
      <div>
        <label>
          <input
            type="radio"
            name="address"
            // checked={(event) => event.target.value === "on"}
            onChange={(event) => {
              // console.log(event.target.value === "on");
              setSelectedAddress(event.target.checked);
            }}
          />
          Amulya Parab{" "}
        </label>
        <p>221B Baker Street, London, NW1 6XE, United Kingdom. </p>
        <p>Mobile Number: 123456789</p>
        <hr />
      </div>
    );
  };
  const placeOrderHandler = (address) => {};
  console.log(selectedAddress);
  return (
    <>
      <h1 className="header-heading">Address</h1>

      <div className="address">
        <ExampleAddress />
        <AddressesMapped />
        <button
          className="add-to-cart add-address"
          onClick={() => setShowAddressForm(true)}
        >
          {" "}
          <i class="fa-solid fa-plus"></i>
          <span>Add Address</span>
        </button>
        {showAddressForm && (
          <div className="address-overlay">
            <div className="login address-form">
              <h1>Add Address</h1>
              <label>
                Your Name
                <input
                  placeholder="Type your name here"
                  onChange={(event) =>
                    setAddress({ ...address, name: event.target.value })
                  }
                />
              </label>
              <label>
                Your Mobile Number
                <input
                  type="number"
                  placeholder="Type your mobile number here"
                  onChange={(event) =>
                    setAddress({ ...address, mobileNumber: event.target.value })
                  }
                />
              </label>
              <label>
                Your Address
                <textarea
                  onChange={(event) =>
                    setAddress({ ...address, address: event.target.value })
                  }
                  // placeholder="Add your address here"
                ></textarea>
              </label>
              <button className="add-to-cart" onClick={addAddressHandler}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
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
        <h1 className="price-details">Deliver To</h1>
        <ExampleAddress />
        <AddressesMapped />
        <button className="add-to-cart place-order" onClick={placeOrderHandler}>
          Place Order
        </button>
      </section>
    </>
  );
};
