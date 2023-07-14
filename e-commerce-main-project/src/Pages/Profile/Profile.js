import { useState } from "react";
import { useAddress, useAuth } from "../../Contexts";
import { AddressesMapped } from "../../Components";

export const Profile = () => {
  const { arrOfAddresses } = useAddress();
  const { logoutHandler } = useAuth();
  const [showProfile, setShowProfile] = useState(true);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

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
              <h2>Profile Details</h2>
              <p>
                <strong>Full Name:</strong> {user?.firstName} {user?.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
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
