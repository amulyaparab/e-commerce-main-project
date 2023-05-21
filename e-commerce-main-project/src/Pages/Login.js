import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log(location);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <div className="login-page">
      <div className="overlay">
        <div className="login">
          <h1>Please Login</h1>
          <div className="login-input-div">
            <label>
              Email address:
              <input type="email" placeholder="test@gmail.com" />
            </label>
          </div>
          <div className="login-input-div">
            <label>
              Password: <input placeholder="********" />
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
