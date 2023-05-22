export const SignUp = () => {
  return (
    <>
      <div className="login-page ">
        <div className="overlay">
          <div className="login sign-up-page">
            <h1>Sign Up</h1>
            <div>
              <label>
                First Name
                <input placeholder="First Name" />
              </label>
              <label>
                Last Name
                <input placeholder="Last Name" />
              </label>
            </div>
            <div className="login-input-div">
              <label>
                Email Address
                <input type="email" placeholder="test@gmail.com" />
              </label>
            </div>
            <div className="login-input-div">
              <label>
                Password
                <input placeholder="********" />
              </label>
            </div>
            <button className="add-to-cart login-btn">
              Create New Account
            </button>
            <p>Already have an account</p>
          </div>
        </div>
      </div>
    </>
  );
};
