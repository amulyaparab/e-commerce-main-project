export const Profile = () => {
  const logoutHandler = () => {
    localStorage.removeItem("userEncodedToken");
    localStorage.removeItem("encodedTokenTest");
  };
  return (
    <>
      <div className="login-page">
        <div className="login profile">
          <h1>Profile</h1>
          <h3>Profile Details</h3>
          <p>Full Name </p>
          <p>Email</p>
          <h3>Account Settings</h3>
          <button className="add-to-cart" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
