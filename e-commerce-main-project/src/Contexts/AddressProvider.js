import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState("123");
  const [showAddressForm, setShowAddressForm] = useState(false);

  const [arrOfAddresses, setArrOfAddresses] = useState([
    {
      name: "Amulya Parab",
      id: "123",
      address: "221B Baker Street",
      mobileNumber: "123456789",
      pincode: "NW1 6XE",
      city: "London",
      state: "UK",
      country: "United Kingdom",
    },
  ]);

  const [address, setAddress] = useState({
    name: "",
    id: "",
    address: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const addAddressHandler = () => {
    const conditions =
      address.name.length &&
      address.mobileNumber.length &&
      address.address.length &&
      address.pincode.length &&
      address.city.length &&
      address.state.length &&
      address.country.length;
    conditions
      ? toast.info("Address Added", {
          position: toast.POSITION.BOTTOM_RIGHT,
        }) &&
        setArrOfAddresses(() => {
          if (arrOfAddresses.find((arrItem) => arrItem.id === address.id)) {
            return arrOfAddresses?.map((arrItem) =>
              arrItem.id === address.id ? address : arrItem
            );
          } else return [...arrOfAddresses, address];
        })
      : toast.warn("Please Fill all fields", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
    conditions && setShowAddressForm(false);
  };

  const deleteAddress = (item) => {
    toast.info("Address Removed", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setArrOfAddresses(arrOfAddresses.filter((prod) => prod.id !== item.id));
    setSelectedAddress((prev) => (prev === item.id ? null : prev));
  };
  const placeOrderHandler = () => {
    toast.success("Order Placed!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const editAddress = (item) => {
    setAddress(item);
    setShowAddressForm(true);
  };

  const randomAddressAdder = () => {
    const randomAddress = {
      name: "Joe Goldberg",
      id: uuid(),
      address: "504, bldg A, Sunflower Gardens",
      mobileNumber: "1234567890",
      pincode: "411777",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    };
    setAddress(randomAddress);
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
        editAddress,
        randomAddressAdder,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
