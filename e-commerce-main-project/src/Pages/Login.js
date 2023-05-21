import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  // const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { testUser, setTestUser, fetchLoginData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = async () => {
    setTestUser({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
    // fetchLoginData();
    // //console.log(location);
    // localStorage.getItem("encodedTokenTest") &&
    navigate(location?.state?.from?.pathname);
    // : navigate("/login");
  };

  return (
    <div className="login-page">
      {/* {localStorage.getItem("encodedTokenTest") && <Navigate to="/wishlist" />} */}
      <div className="overlay">
        <div className="login">
          <h1>Please Login</h1>
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
              <input placeholder={testUser ? testUser?.password : "*******"} />
            </label>
          </div>
          <button className="add-to-cart login-btn" onClick={loginHandler}>
            Login with Test Credentials
          </button>
        </div>
      </div>
    </div>
  );
};
