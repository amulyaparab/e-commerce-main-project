import { AddressForm } from "./AddressForm";
import { useAddress } from "../../Contexts/AddressProvider";

export const AddressesMapped = () => {
  const {
    selectedAddress,
    setSelectedAddress,
    arrOfAddresses,
    setArrOfAddresses,
    showAddressForm,
    setShowAddressForm,
    address,
    setAddress,
    deleteAddress,
    editAddress,
  } = useAddress();
  // console.log(selectedAddress, "meow");
  return (
    <>
      {" "}
      <div>
        <label>
          <input
            type="radio"
            name="address"
            value={"123"}
            onChange={(event) => {
              setSelectedAddress(event.target.value);
            }}
          />
          Amulya Parab{" "}
        </label>
        <p>221B Baker Street, London, NW1 6XE, United Kingdom. </p>
        <p>Mobile Number: 123456789</p>
        <hr />
      </div>
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
          <div className="addreses-map">
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
              class="fa-solid fa-pen address-edit address-icon"
              onClick={() => editAddress(item)}
            ></i>
            <i
              class="fa-solid fa-trash address-delete address-icon"
              onClick={() => deleteAddress(item)}
            ></i>
            <p>{`${address}, ${city}, ${state}, ${pincode}`}</p>
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
        <i class="fa-solid fa-plus"></i>
        <span>Add Address</span>
      </button>
      {showAddressForm && <AddressForm />}
    </>
  );
};
