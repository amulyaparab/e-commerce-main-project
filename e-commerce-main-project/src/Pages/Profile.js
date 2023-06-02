// import { useState } from "react";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-toastify";
import { AddressesMapped } from "../Components/AddressComponents/AddressMapped";
import { AddressContext } from "../Contexts/AddressProvider";
export const Profile = () => {
  const { setTestUser } = useContext(AuthContext);
  const { arrOfAddresses } = useContext(AddressContext);
  const navigate = useNavigate();
  const location = useLocation();
  const logoutHandler = () => {
    toast.error("Logged Out.", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    localStorage.removeItem("userEncodedToken");
    localStorage.removeItem("encodedTokenTest");
    navigate("/login", { state: { from: location } });
    setTestUser(null);
  };
  const [showProfile, setShowProfile] = useState(true);
  return (
    <>
      <div>
        <div
          className={`profile ${
            showProfile || arrOfAddresses.length < 3 ? "bottom-space" : ""
          }`}
        >
          <div className="profile-tab">
            <div
              onClick={() => setShowProfile(!showProfile)}
              className={`first-tab ${showProfile ? "active-profile" : ""}`}
            >
              Profile
            </div>
            <div
              onClick={() => setShowProfile(!showProfile)}
              className={`${showProfile ? "" : "active-profile"}`}
            >
              Addresses
            </div>
          </div>
          {showProfile ? (
            <div className="userProfile">
              <h1>Profile</h1>
              <h3>Profile Details</h3>
              <p>Full Name </p>
              <p>Email</p>
              <h3>Account Settings</h3>
              <button className="add-to-cart" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <h1>Addresses</h1>
              <AddressesMapped />
            </div>
          )}{" "}
        </div>
      </div>
    </>
  );
};
