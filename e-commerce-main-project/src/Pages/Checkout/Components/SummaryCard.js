import { useContext } from "react";
import { ProductsContext } from "../../../Contexts/ProductsProvider";
import { AddressContext } from "../../../Contexts/AddressProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { APIContext } from "../../../Contexts/APIProvider";
const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
export const SummaryCard = () => {
  const { state, totalAmount, originalAmount } = useContext(ProductsContext);
  const { selectedAddress, arrOfAddresses } = useContext(AddressContext);
  const { deleteFromCart } = useContext(APIContext);

  const navigate = useNavigate();
  const findSelectedAddress = arrOfAddresses.find(
    (address) => address.id === selectedAddress
  );
  const displayRazorpay = async () => {
    if (selectedAddress) {
      const response = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!response) {
        alert("Razorpay SDK failed to load, check you internet connection");
        return;
      }
      const options = {
        key: "rzp_test_EPBilmCRDIX4I1",
        amount: Number(totalAmount) * 100,
        currency: "INR",
        name: "Ascend",
        description: "Thank you for shopping with us",
        handler: function () {
          toast.success(`Payment of Rs. ${totalAmount} is Succesful`);
          navigate("/success");
          state.cart.map((item) => deleteFromCart(item._id));
          setTimeout(() => {
            navigate("/");
            console.log("Success");
          }, 5000);
        },
        theme: {
          color: "#2f2e41",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      toast.warn("Select Address", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
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
        <div>{findSelectedAddress?.name}</div>
        <p>{`${findSelectedAddress?.address}, ${findSelectedAddress?.city}, ${findSelectedAddress?.state}, ${findSelectedAddress?.pincode}`}</p>
        <p>Mobile Number: {findSelectedAddress?.mobileNumber}</p>
        <button className="add-to-cart place-order" onClick={displayRazorpay}>
          Place Order
        </button>
      </section>
    </>
  );
};
