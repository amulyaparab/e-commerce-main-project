import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const AddressContext = createContext();
export const AddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [arrOfAddresses, setArrOfAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    address: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  const addAddressHandler = () => {
    const conditions =
      address.name.length !== 0 &&
      address.mobileNumber.length !== 0 &&
      address.address.length !== 0;
    conditions &&
      toast.info("Address Added", {
        position: toast.POSITION.BOTTOM_RIGHT,
      }) &&
      setArrOfAddresses([
        ...arrOfAddresses,
        arrOfAddresses.includes(address) ? null : address,
      ]);
    conditions && setShowAddressForm(false);
    setAddress({ name: "", address: "", mobileNumber: "" });
  };
  const deleteAddress = (item) => {
    toast.info("Address Removed", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setArrOfAddresses(
      arrOfAddresses.filter((prod) => prod.address !== item.address)
    );
  };
  const placeOrderHandler = () => {
    toast.success("Order Placed!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <AddressContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        arrOfAddresses,
        setArrOfAddresses,
        showAddressForm,
        setShowAddressForm,
        address,
        setAddress,
        addAddressHandler,
        deleteAddress,
        placeOrderHandler,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
