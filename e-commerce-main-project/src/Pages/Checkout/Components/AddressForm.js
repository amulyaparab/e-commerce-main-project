import { useContext } from "react";
import { AddressContext } from "../../../Contexts/AddressProvider";

export const AddressForm = () => {
  const { addAddressHandler, setShowAddressForm, address, setAddress } =
    useContext(AddressContext);
  return (
    <div className="address-overlay">
      <div className="login address-form">
        <i
          onClick={() => setShowAddressForm(false)}
          class="fa-solid fa-xmark wishlist-heart remove"
        ></i>
        <h1>Add Address</h1>
        <label>
          Your Name
          <input
            placeholder="Amulya Parab"
            onChange={(event) =>
              setAddress({ ...address, name: event.target.value })
            }
          />
        </label>
        <label>
          Your Mobile Number
          <input
            type="number"
            placeholder="1234567890"
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
          ></textarea>
        </label>
        <div className="address-sections">
          <div>
            <label>
              Pincode
              <input
                type="number"
                placeholder="411277"
                onChange={(event) =>
                  setAddress({ ...address, pincode: event.target.value })
                }
              />
            </label>
            <label>
              City
              <input
                placeholder="Pune"
                onChange={(event) =>
                  setAddress({ ...address, city: event.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              State
              <input
                placeholder="Maharashtra"
                onChange={(event) =>
                  setAddress({ ...address, state: event.target.value })
                }
              />
            </label>
            <label>
              Country
              <input
                placeholder="India"
                onChange={(event) =>
                  setAddress({ ...address, country: event.target.value })
                }
              />
            </label>
          </div>
        </div>
        <div className="address-btns">
          <div>
            <button
              className="add-to-cart address-btn"
              onClick={addAddressHandler}
            >
              Dummy Values
            </button>
            <button
              className="add-to-cart address-btn"
              onClick={addAddressHandler}
            >
              Reset
            </button>
          </div>
          <div>
            <button
              className="add-to-cart address-btn"
              onClick={addAddressHandler}
            >
              Save
            </button>
            <button
              className="add-to-cart address-btn"
              onClick={addAddressHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
