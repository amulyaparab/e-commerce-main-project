import { useEffect } from "react";
import { useAddress } from "../../Contexts/AddressProvider";
import { v4 as uuid } from "uuid";

export const AddressForm = () => {
  const {
    addAddressHandler,
    setShowAddressForm,
    address,
    setAddress,
    randomAddressAdder,
  } = useAddress();

  useEffect(() => {
    if (address.id) {
      return;
    } else {
      setAddress({ ...address, id: uuid() });
    }
  }, []);

  return (
    <div className="address-overlay">
      <div className="login address-form">
        <i
          onClick={() => setShowAddressForm(false)}
          className="fa-solid fa-xmark wishlist-heart remove"
        ></i>
        <h1>Add Address</h1>
        <label>
          Your Name
          <input
            placeholder="Amulya Parab"
            value={address.name ?? ""}
            onChange={(event) =>
              setAddress({ ...address, name: event.target.value })
            }
          />
        </label>
        <label>
          Your Mobile Number
          <input
            value={address.mobileNumber ?? ""}
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
            value={address.address ?? ""}
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
                value={address.pincode ?? ""}
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
                value={address.city ?? ""}
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
                value={address.state ?? ""}
                placeholder="Maharashtra"
                onChange={(event) =>
                  setAddress({ ...address, state: event.target.value })
                }
              />
            </label>
            <label>
              Country
              <input
                value={address.country ?? ""}
                placeholder="India"
                onChange={(event) =>
                  setAddress({ ...address, country: event.target.value })
                }
              />
            </label>
          </div>
        </div>
        <div className="address-btns">
          <button
            className="add-to-cart address-btn"
            onClick={randomAddressAdder}
          >
            Dummy Values
          </button>

          <button
            className="add-to-cart address-btn"
            onClick={addAddressHandler}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
