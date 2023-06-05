import { AddressForm } from "./AddressForm";
import { useAddress } from "../../Contexts/AddressProvider";

export const AddressesMapped = () => {
  const {
    selectedAddress,
    setSelectedAddress,
    arrOfAddresses,
    showAddressForm,
    setShowAddressForm,
    setAddress,
    deleteAddress,
    editAddress,
  } = useAddress();

  return (
    <>
      {arrOfAddresses?.map((item) => {
        const {
          id,
          name,
          address,
          mobileNumber,
          pincode,
          city,
          state,
          country,
        } = item;
        return (
          <div key={id} className="addreses-map">
            <label>
              <input
                type="radio"
                name="address"
                value={item.id}
                checked={selectedAddress === item.id}
                onChange={(event) => {
                  setSelectedAddress(event.target.value);
                }}
              />
              {name}
            </label>
            <i
              className="fa-solid fa-pen address-edit address-icon"
              onClick={() => editAddress(item)}
            ></i>
            <i
              className="fa-solid fa-trash address-delete address-icon"
              onClick={() => deleteAddress(item)}
            ></i>
            <p>{`${address}, ${city}, ${state}, ${pincode}, ${country}`}</p>
            <p>Mobile Number: {mobileNumber}</p>
            <hr />
          </div>
        );
      })}
      <button
        className="add-to-cart add-address"
        onClick={() => {
          setAddress({
            name: "",
            id: "",
            address: "",
            mobileNumber: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
          });
          setShowAddressForm(true);
        }}
      >
        {" "}
        <i className="fa-solid fa-plus"></i>
        <span>Add Address</span>
      </button>
      {showAddressForm && <AddressForm />}
    </>
  );
};
