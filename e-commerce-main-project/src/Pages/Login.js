import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { APIContext } from "../Contexts/APIProvider";

export const Login = () => {
  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { testUser, setTestUser } = useContext(AuthContext);
  const { fetchLoginData } = useContext(APIContext);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = async () => {
    setTestUser({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
    const { foundUser, encodedToken } = await fetchLoginData();
    console.log(
      localStorage.getItem("encodedTokenTest") === encodedToken,
      location
    );
    // localStorage.getItem("encodedTokenTest") === encodedToken &&
    navigate(location?.state?.from?.pathname);
  };

  return (
    <div className="login-page">
      {/* {localStorage.getItem("encodedTokenTest") && <Navigate to="/wishlist" />} */}
      <div className="overlay">
        <div className="login">
          <h1>Sign In</h1>
          <div className="login-input-div">
            <label>
              Email address:
              <input
                type="email"
                placeholder={testUser ? testUser?.email : "test@gmail.com"}
              />
            </label>
          </div>
          <div className="login-input-div">
            <label>
              Password:{" "}
              <input
                type="password"
                placeholder={testUser ? testUser?.password : "*******"}
              />
            </label>
          </div>
          <button className="add-to-cart login-btn" onClick={loginHandler}>
            Login as a Guest
          </button>
          <NavLink to="/signUp">Create a new account</NavLink>
        </div>
      </div>
    </div>
  );
};
